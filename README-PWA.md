# Elderfy PWA Setup Guide

## Overview
Elderfy is now a Progressive Web App (PWA)! Users can install it on their devices for a native app-like experience.

## Files Created/Modified

### New Files:
1. **app/manifest.ts** - Web App Manifest configuration
2. **public/sw.js** - Service Worker for offline functionality
3. **app/offline/page.tsx** - Offline fallback page
4. **components/PWAInstallPrompt.tsx** - Install prompt component
5. **components/ServiceWorkerRegistration.tsx** - SW registration component
6. **public/icon-192.svg** - Icon source file (192x192)
7. **public/icon-512.svg** - Icon source file (512x512)
8. **public/icon-fallback.html** - Icon generator utility

### Modified Files:
1. **app/layout.tsx** - Added PWA meta tags and components
2. **next.config.ts** - Updated with PWA configuration

## Icon Setup

You need to create PNG icon files from the SVG templates. Choose one method:

### Method 1: Using the Icon Generator (Recommended)
1. Open your browser and navigate to: `http://localhost:3000/icon-fallback.html`
2. Click the download buttons to save all three icon files
3. Place them in the `/public` directory:
   - `icon-192x192.png`
   - `icon-512x512.png`
   - `apple-touch-icon.png`

### Method 2: Using ImageMagick
If you have ImageMagick installed:
```bash
cd public
./create-icon-pngs.sh
```

### Method 3: Online Converter
1. Go to https://cloudconvert.com/svg-to-png
2. Upload `icon-192.svg` and `icon-512.svg` from the `/public` directory
3. Convert and download as PNG
4. Rename to `icon-192x192.png` and `icon-512x512.png`
5. Create a 180x180 version for `apple-touch-icon.png`

## Features

### ✅ Installable
- Users can install Elderfy on their home screen
- Works on Android, iOS, and desktop browsers
- Standalone app mode (no browser UI)

### ✅ Offline Support
- Service worker caches key pages
- Graceful offline fallback page
- Previously viewed content available offline

### ✅ Native-Like Experience
- Custom theme colors matching your brand
- Splash screen with your icons
- Smooth transitions between pages

### ✅ Smart Install Prompt
- Non-intrusive install banner
- Shows after 3 seconds on first visit
- Respects user dismissal (7-day cooldown)
- Automatically detects if already installed

## Testing the PWA

### Local Development:
1. Build the production version:
   ```bash
   npm run build
   npm start
   ```
   (Service workers don't work in development mode)

2. Open Chrome DevTools:
   - Go to Application tab
   - Check "Manifest" section
   - Verify "Service Workers" is registered
   - Test "Offline" mode

### Testing Install:
1. On Android Chrome: Look for "Install" in the menu
2. On iOS Safari: Tap share → "Add to Home Screen"
3. On Desktop Chrome: Look for install icon in address bar

### Lighthouse Audit:
Run a Lighthouse audit in Chrome DevTools to verify PWA score:
```bash
npm run build
npm start
# Then run Lighthouse audit in Chrome DevTools
```

## Deployment Notes

### Vercel (Recommended):
Vercel automatically handles service workers and manifests. Just deploy normally:
```bash
git push
```

### Environment Variables:
No special environment variables needed for PWA functionality.

### Important:
- Service workers only work over HTTPS (except localhost)
- Make sure your production domain has a valid SSL certificate
- Vercel provides this automatically

## Customization

### Changing Theme Colors:
Edit `app/manifest.ts`:
```typescript
theme_color: '#6b8f7f', // Your primary color
background_color: '#fdfcfb', // Your background color
```

### Changing App Name:
Edit `app/manifest.ts`:
```typescript
name: 'Your App Name',
short_name: 'Short Name',
```

### Changing Icons:
Replace the PNG files in `/public`:
- `icon-192x192.png`
- `icon-512x512.png`
- `apple-touch-icon.png`

### Caching Strategy:
Edit `public/sw.js` to modify what gets cached and how.

## Troubleshooting

### Service Worker Not Registering:
- Make sure you're in production mode (not `npm run dev`)
- Check browser console for errors
- Verify `/sw.js` is accessible

### Icons Not Showing:
- Ensure PNG files exist in `/public`
- Check file names match manifest exactly
- Clear browser cache and reload

### Install Prompt Not Showing:
- PWA criteria must be met (manifest, service worker, HTTPS)
- User may have dismissed it (wait 7 days)
- Some browsers don't show prompt automatically

### Offline Mode Not Working:
- Service worker must be activated
- Visit pages first to cache them
- Check service worker status in DevTools

## Browser Support

- ✅ Chrome/Edge (Full support)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox (Limited install support)
- ✅ Samsung Internet
- ⚠️ IE11 (Not supported)

## Next Steps

1. Generate the icon PNG files (see Icon Setup above)
2. Test locally with `npm run build && npm start`
3. Deploy to Vercel
4. Test on real devices (Android/iOS)
5. Monitor service worker updates in production

## Resources

- [Web.dev PWA Guide](https://web.dev/progressive-web-apps/)
- [MDN Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [PWA Builder](https://www.pwabuilder.com/)
