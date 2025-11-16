# 🎨 App Icons & Splash Screen Guide

## Current Status

✅ **Splash Screen**: Configured with warm orange (#f97316) in `capacitor.config.ts`
⚠️ **App Icon**: Currently using default Capacitor icon - **needs customization**

## App Icon Requirements

### Quick Option: Icon Generator (Recommended)

1. **Visit**: https://icon.kitchen
2. **Upload** a 1024x1024px image (or create one there)
3. **Suggested icon**: Elderfy logo with warm orange/purple gradient
   - Main color: #f97316 (warm orange)
   - Accent: #a855f7 (warm purple)
   - Consider using: 🌟 or 💝 emoji with "Elderfy" text
4. **Download** the Android icon pack
5. **Replace** icons in `android/app/src/main/res/mipmap-*/`

### Manual Option: Create Icons in Different Sizes

Create PNG icons in these sizes:

| Density | Size | Location |
|---------|------|----------|
| mdpi | 48x48 | `android/app/src/main/res/mipmap-mdpi/ic_launcher.png` |
| hdpi | 72x72 | `android/app/src/main/res/mipmap-hdpi/ic_launcher.png` |
| xhdpi | 96x96 | `android/app/src/main/res/mipmap-xhdpi/ic_launcher.png` |
| xxhdpi | 144x144 | `android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png` |
| xxxhdpi | 192x192 | `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png` |

**Also create round icons** (same sizes) in `mipmap-*/ic_launcher_round.png` for Android 7.1+.

### Using Android Studio (Easiest)

1. Open Android Studio: `npm run android:open`
2. Right-click `android/app/src/main/res`
3. Select **New → Image Asset**
4. Choose **Launcher Icons (Adaptive and Legacy)**
5. Select your 1024x1024 source image
6. Click **Next → Finish**
7. Icons auto-generated in all sizes!

## Splash Screen

Already configured in `capacitor.config.ts`:

```typescript
SplashScreen: {
  launchShowDuration: 2000,      // Shows for 2 seconds
  backgroundColor: '#f97316',     // Warm orange
  showSpinner: false,             // No loading spinner
  androidSpinnerStyle: 'small',
  iosSpinnerStyle: 'small',
}
```

### To customize:

1. Edit `capacitor.config.ts`
2. Change `backgroundColor` to any hex color
3. Set `showSpinner: true` to show loading indicator
4. Adjust `launchShowDuration` (milliseconds)
5. Run `npm run android:sync` to apply changes

### Adding Custom Splash Screen Image

If you want an image (not just solid color):

1. Create `android/app/src/main/res/drawable/splash.png` (2732x2732px)
2. Edit `android/app/src/main/res/values/styles.xml`:
   ```xml
   <style name="AppTheme.NoActionBarLaunch" parent="AppTheme.NoActionBar">
       <item name="android:background">@drawable/splash</item>
   </style>
   ```
3. Sync: `npm run android:sync`

## Recommended Design

### App Icon Concept

**Simple & Clear for Seniors:**
- Large, friendly icon
- High contrast colors
- Warm, inviting feeling
- Easy to recognize on home screen

**Suggested designs:**
1. 🌟 Star emoji on orange/purple gradient background
2. 💝 Heart with gift on gradient
3. Stylized "E" for Elderfy with warm colors
4. Silhouette of wise elder with halo/glow

### Color Palette

Use Elderfy's brand colors:
- **Primary**: #f97316 (warm orange)
- **Secondary**: #a855f7 (warm purple)
- **Accent**: #637263 (sage green)
- **Background**: #fff7ed (light warm)

## Design Tools

### Free Online Tools
- **Icon Kitchen**: https://icon.kitchen (recommended)
- **Canva**: https://canva.com (free templates)
- **Figma**: https://figma.com (professional design)

### Desktop Tools
- **Adobe Illustrator** (paid)
- **Affinity Designer** (one-time purchase)
- **GIMP** (free)
- **Inkscape** (free)

## Testing Your Icons

After adding icons:

1. **Sync changes:**
   ```bash
   npm run android:sync
   ```

2. **Rebuild app:**
   ```bash
   npm run android:open
   ```
   Then click Run ▶️

3. **Check on device:**
   - Icon appears on home screen
   - Icon appears in app drawer
   - Icon appears in recent apps
   - Splash screen shows on launch

## Examples of Good Senior App Icons

Look at these apps for inspiration:
- **Simple & Large**: Minimal designs, one main element
- **High Contrast**: Dark icon on light background or vice versa
- **Familiar Symbols**: Hearts, stars, people silhouettes
- **Warm Colors**: Orange, purple, gold tones

## Quick Start Checklist

- [ ] Create 1024x1024px icon design
- [ ] Use https://icon.kitchen to generate all sizes
- [ ] Download Android icon pack
- [ ] Replace icons in `android/app/src/main/res/mipmap-*/`
- [ ] Run `npm run android:sync`
- [ ] Build and test: `npm run android:open` → Run ▶️
- [ ] Verify icon looks good on device

## Current Default Icon

The app currently uses Capacitor's default blue icon. While functional, a custom icon will make Elderfy more professional and recognizable.

---

**Need help?** Check BUILD_ANDROID.md for full build instructions!
