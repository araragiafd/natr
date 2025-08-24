# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese interactive web application featuring a 3D character model with mouse tracking and camera interface elements. The project combines Three.js 3D graphics with jQuery-based UI interactions.

## Key Architecture Components

### Core Files
- `index.html` - Main HTML structure with Japanese camera interface mockup
- `custom.js` - jQuery-based interactions for entrance animations and UI controls
- `3D.js` - Three.js implementation for 3D model rendering and mouse tracking
- `style.css` - Complete styling including custom cursor and camera UI elements

### 3D Model System
- Uses Three.js with ES6 modules loaded from CDN
- Loads `model.glb` 3D model with animations
- Implements head bone tracking that follows mouse movement
- Container element with class `.a` (check if exists in current HTML)

### UI Interaction Flow
1. Video intro plays on page load (`video,mp4/adcance.mp4`)
2. Welcome screen with click-to-enter functionality
3. Transitions to camera interface with Splide.js carousel
4. Custom cursor with blur trail effects

### Dependencies
- Three.js (v0.158.0) - 3D graphics
- jQuery (v3.6.0) - DOM manipulation
- Splide.js (v4.1.4) - Carousel functionality
- Local GLTFLoader for 3D model loading

## Development Notes

### No Build System
This project uses direct browser loading - no package.json, build tools, or test frameworks detected. All dependencies are loaded via CDN.

### File Structure
- Images stored in `imges/` directory (note: non-standard spelling)
- Video files in `video,mp4/` directory  
- 3D model file: `model.glb`
- Includes `three.min.js` (likely unused due to CDN loading)

### Current Git State
Working on `feature/kamihitoe` branch with several modified files and new assets added.