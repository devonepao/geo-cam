// Camera and GPS functionality
let stream = null;
let facingMode = 'environment'; // 'user' for front, 'environment' for back
let watchId = null;

const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const toggleBtn = document.getElementById('toggleCamera');
const captureBtn = document.getElementById('captureBtn');
const retryBtn = document.getElementById('retryBtn');
const permissionMessage = document.getElementById('permissionMessage');

// Elements for displaying data
const coordinatesEl = document.getElementById('coordinates');
const altitudeEl = document.getElementById('altitude');
const accuracyEl = document.getElementById('accuracy');
const datetimeEl = document.getElementById('datetime');

// Initialize the app
async function init() {
    try {
        await startCamera();
        startLocationTracking();
        startClock();
    } catch (error) {
        console.error('Initialization error:', error);
        showPermissionMessage();
    }
}

// Start camera with current facing mode
async function startCamera() {
    try {
        // Stop existing stream if any
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }

        const constraints = {
            video: {
                facingMode: facingMode,
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            },
            audio: false
        };

        stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        permissionMessage.style.display = 'none';
    } catch (error) {
        console.error('Camera error:', error);
        showPermissionMessage();
        throw error;
    }
}

// Toggle between front and back camera
async function toggleCamera() {
    facingMode = facingMode === 'environment' ? 'user' : 'environment';
    await startCamera();
}

// Start GPS location tracking
function startLocationTracking() {
    if (!navigator.geolocation) {
        coordinatesEl.textContent = 'Geolocation not supported';
        return;
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    watchId = navigator.geolocation.watchPosition(
        updatePosition,
        handleLocationError,
        options
    );
}

// Update position data
function updatePosition(position) {
    const lat = position.coords.latitude.toFixed(6);
    const lon = position.coords.longitude.toFixed(6);
    
    coordinatesEl.textContent = `${lat}, ${lon}`;
    coordinatesEl.classList.remove('loading');
    
    if (position.coords.altitude !== null) {
        altitudeEl.textContent = `${position.coords.altitude.toFixed(1)} m`;
    } else {
        altitudeEl.textContent = 'N/A';
    }
    
    if (position.coords.accuracy !== null) {
        accuracyEl.textContent = `±${position.coords.accuracy.toFixed(1)} m`;
    } else {
        accuracyEl.textContent = 'N/A';
    }
}

// Handle location errors
function handleLocationError(error) {
    console.error('Location error:', error);
    coordinatesEl.textContent = 'Location unavailable';
    coordinatesEl.classList.remove('loading');
}

// Update clock
function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    
    const dateOptions = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
    };
    
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const dateStr = now.toLocaleDateString('en-US', dateOptions);
    const timeStr = now.toLocaleTimeString('en-US', timeOptions);
    
    datetimeEl.textContent = `${dateStr} ${timeStr}`;
}

// Capture photo with overlay
function capturePhoto() {
    const context = canvas.getContext('2d');
    
    // Set canvas size to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Add overlay text
    const fontSize = Math.floor(canvas.width / 25);
    context.font = `600 ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, fontSize * 8);
    
    context.fillStyle = 'white';
    context.textAlign = 'left';
    
    let y = fontSize * 1.5;
    const padding = fontSize * 0.8;
    
    // Header
    context.font = `700 ${fontSize * 1.2}px -apple-system, BlinkMacSystemFont, sans-serif`;
    context.fillText('SolvePao Research', padding, y);
    y += fontSize * 1.8;
    
    // Info
    context.font = `500 ${fontSize * 0.8}px -apple-system, BlinkMacSystemFont, sans-serif`;
    context.fillText(`Coordinates: ${coordinatesEl.textContent}`, padding, y);
    y += fontSize * 1.2;
    context.fillText(`Altitude: ${altitudeEl.textContent}`, padding, y);
    y += fontSize * 1.2;
    context.fillText(`Accuracy: ${accuracyEl.textContent}`, padding, y);
    y += fontSize * 1.2;
    context.fillText(`Date & Time: ${datetimeEl.textContent}`, padding, y);
    
    // Download image
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `solvepao_${Date.now()}.jpg`;
        a.click();
        URL.revokeObjectURL(url);
    }, 'image/jpeg', 0.95);
}

// Show permission message
function showPermissionMessage() {
    permissionMessage.style.display = 'flex';
}

// Event listeners
toggleBtn.addEventListener('click', toggleCamera);
captureBtn.addEventListener('click', capturePhoto);
retryBtn.addEventListener('click', init);

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Start the application
init();
