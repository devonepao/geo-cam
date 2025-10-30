# Geo-Cam v1.0 - SolvePao Research

A mobile-first progressive web application for real-time geolocation-aware photography with camera access and GPS coordinate overlay.

## 🎯 Project Overview

Geo-Cam is a specialized mobile web application designed for field research, documentation, and location-based photography. It combines device camera access with real-time GPS positioning to create geo-tagged photographs with embedded location metadata overlays.

## ✨ Key Features

### Camera Management
- **Dual Camera Support**: Seamless switching between front-facing and rear-facing cameras
- **High-Resolution Capture**: Optimized for 1920x1080 video streaming with quality photo captures
- **Real-time Preview**: Live camera feed with minimal latency
- **Auto-focus & Exposure**: Leverages native device camera capabilities

### GPS & Location Services
- **Real-time Coordinates**: Continuous GPS tracking with high accuracy mode
- **Latitude & Longitude**: Precision to 6 decimal places (~0.11 meters)
- **Altitude Tracking**: Displays elevation data when available
- **Accuracy Indicator**: Shows GPS accuracy radius in meters
- **Auto-update**: Location refreshes automatically as device moves

### Data Overlay
- **Branded Header**: "SolvePao Research" identification
- **Coordinate Display**: Live GPS coordinates (latitude, longitude)
- **Altitude Information**: Height above sea level in meters
- **Accuracy Metrics**: GPS precision indicator
- **Timestamp**: Real-time date and time display with second precision
- **Semi-transparent HUD**: Non-intrusive glassmorphism overlay design

### Photo Capture
- **Snapshot Functionality**: Capture current camera frame with overlay
- **Embedded Metadata**: All GPS and time data burned into image
- **High-Quality Export**: JPEG format at 95% quality
- **Auto-download**: Photos automatically saved to device
- **Timestamped Filenames**: Format: `solvepao_[timestamp].jpg`

## 🎨 Design Language

### Apple Design System
The application follows Apple's Human Interface Guidelines with a focus on:

- **San Francisco Font**: Uses `-apple-system` and `SF Pro Display` font stack
- **Minimalism**: Clean, uncluttered interface with purpose-driven elements
- **White Space**: Generous padding and breathing room
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Haptic Feedback**: Visual feedback on touch interactions
- **Safe Areas**: Respects iOS notch and home indicator regions

### Color Scheme
- **Primary Background**: Pure white (#FFFFFF)
- **Primary Text**: True black (#000000)
- **Secondary Background**: Light gray (#F2F2F7)
- **Overlay**: Semi-transparent white with blur (rgba(255,255,255,0.15))
- **Borders**: Subtle dividers with low opacity
- **Contrast Ratio**: WCAG AAA compliant for accessibility

### UI/UX Principles
- **Mobile-First**: Designed exclusively for handheld devices
- **Touch-Optimized**: Large touch targets (minimum 44x44 points)
- **Responsive**: Adapts to portrait and landscape orientations
- **Gesture-Friendly**: Prevents accidental zoom and scroll
- **Progressive Enhancement**: Graceful degradation for unsupported features

## 🛠 Tech Stack

### Frontend Framework
- **Pure JavaScript (ES6+)**: No framework dependencies for maximum performance
- **Vanilla HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with flexbox and advanced properties

### Web APIs
- **MediaDevices API**: Camera access and stream management
- **Geolocation API**: GPS positioning with high accuracy mode
- **Canvas API**: Image manipulation and overlay rendering
- **Blob API**: Photo export and download functionality

### Browser Technologies
- **Progressive Web App (PWA) Ready**: Meta tags for app-like experience
- **Viewport Configuration**: Locked orientation and scaling
- **Safe Area Insets**: iOS notch support with `env(safe-area-inset-*)`
- **Backdrop Filters**: Modern blur effects with fallbacks

### Performance Optimizations
- **No External Dependencies**: Zero npm packages, pure vanilla code
- **Minimal Asset Loading**: Sub-second initial load time
- **Hardware Acceleration**: GPU-accelerated transforms and filters
- **Efficient Polling**: Smart interval management for battery life

## 📱 How to Use

### Initial Setup
1. **Open in Mobile Browser**: Navigate to the application URL on your smartphone
2. **Grant Permissions**: 
   - Allow camera access when prompted
   - Enable location services when requested
3. **Wait for GPS Lock**: Coordinates will display once GPS signal is acquired

### Taking Photos
1. **Frame Your Shot**: Point camera at desired subject
2. **Check Overlay**: Verify GPS data is displaying correctly
3. **Tap Capture**: Press the "Capture" button
4. **Auto-Save**: Photo downloads automatically to your device

### Switching Cameras
1. **Tap Toggle Camera**: Use the toggle button in controls
2. **Wait for Switch**: Camera will flip to opposite lens
3. **Continue Shooting**: All features work with both cameras

### Troubleshooting
- **No Camera Feed**: Check browser permissions in settings
- **Location Unavailable**: Ensure GPS is enabled on device
- **Poor Accuracy**: Move to open area with clear sky view
- **Permission Denied**: Tap "Retry" button to re-request access

## 🎯 Use Cases

### Field Research
- **Environmental Studies**: Document location-specific observations
- **Archaeological Surveys**: Geo-tag artifact discoveries
- **Geological Mapping**: Capture rock formations with precise coordinates
- **Wildlife Tracking**: Record animal sightings with location data

### Professional Documentation
- **Construction Sites**: Progress photos with exact locations
- **Real Estate**: Property documentation with GPS verification
- **Infrastructure Inspection**: Utility and facility assessments
- **Land Surveying**: Visual reference with coordinate verification

### Emergency & Safety
- **Incident Reporting**: Document emergencies with location proof
- **Search & Rescue**: Mark locations during operations
- **Disaster Assessment**: Damage documentation with coordinates
- **Security Patrols**: Checkpoint verification photos

### Personal Use
- **Travel Logging**: Remember exact locations of memories
- **Hiking & Outdoors**: Trail documentation and waypoints
- **Geocaching**: Cache discovery verification
- **Photography**: Landscape shots with location metadata

## 🔐 Privacy & Security

- **No Data Storage**: All processing happens client-side
- **No Server Communication**: Zero data transmission to external servers
- **Local Only**: Photos saved directly to user's device
- **Permission Based**: Requires explicit user consent for camera and GPS
- **Session Only**: No persistent storage or cookies

## 🌐 Browser Compatibility

### Recommended Browsers
- **iOS Safari**: 14.0+
- **Chrome Mobile**: 90+
- **Samsung Internet**: 14+
- **Firefox Mobile**: 88+

### Required Features
- MediaDevices.getUserMedia()
- Geolocation API with watchPosition()
- HTML5 Canvas with context2D
- CSS Backdrop Filter
- ES6 JavaScript support

## 📋 System Requirements

- **Mobile Device**: Smartphone or tablet with camera
- **Operating System**: iOS 14+ or Android 10+
- **GPS Module**: Built-in GPS receiver
- **Internet**: Not required after initial load
- **Storage**: Minimal (photos saved to device gallery)

## 🚀 Future Enhancements (Roadmap)

### Planned Features
- Compass heading overlay
- Speed and bearing indicators
- Photo gallery viewer
- Batch export functionality
- Custom branding options
- QR code generation from coordinates
- Offline map integration
- Weather data overlay

### Technical Improvements
- Service Worker for offline capability
- IndexedDB for photo history
- WebGL for advanced overlays
- WebRTC for streaming
- EXIF metadata writing

## 📄 License

This project is open source and available for research and educational purposes.

## 👥 Credits

**Developed by**: SolvePao Research  
**Version**: 1.0  
**Last Updated**: 2024

---

For issues, suggestions, or contributions, please contact the development team.
