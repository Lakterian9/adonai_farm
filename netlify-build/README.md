# Adonai Farm - Netlify Deployment

This is a complete build of the Adonai Farm website ready for Netlify deployment.

## Features

- **Dual Mode Operation**: Automatically switches between backend API and localStorage based on device/connection
- **Mobile Optimized**: Optimized for mobile devices with touch-friendly interface
- **Offline Support**: Works offline using localStorage backend
- **Progressive Web App**: Includes service worker and manifest for PWA functionality
- **Image Gallery**: 20+ farm images with lazy loading and optimization
- **Admin Dashboard**: Complete farm management system
- **Contact Forms**: Working contact forms with local storage

## Deployment

1. **Netlify**: Upload this entire folder to Netlify or connect your Git repository
2. **Manual**: Serve the files from any static web server

## Testing

- Visit `/test-mode.html` to switch between localStorage and backend modes
- Mobile devices automatically use localStorage mode
- Desktop can use either mode

## Login Credentials

- **Username**: admin
- **Password**: adonai123

## File Structure

```
/
├── index.html          # Main application
├── mobile-config.js    # Mobile detection and configuration
├── test-mode.html      # Mode switching utility
├── images/Adonai/     # Farm images
├── images/             # Fallback images
├── js/                 # Application JavaScript
├── css/                # Application styles
├── _redirects          # Netlify routing rules
└── netlify.toml        # Netlify configuration
```

## Local Storage Data

The app automatically initializes with:
- 5 sample animals (cattle, goats, sheep, chickens)
- 3 sample workers
- 4+ farm images
- Admin user account

All data persists in browser localStorage for testing.
