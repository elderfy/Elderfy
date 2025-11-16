# 📱 Building Elderfy Android App

## Prerequisites

Before building the Android app, you need:

1. **Node.js and npm** (already installed)
2. **Android Studio** - Download from https://developer.android.com/studio
3. **Java JDK 17** - Comes with Android Studio or download separately

## Quick Build (Development APK)

### Option 1: Using Android Studio (Recommended)

1. **Open the Android project:**
   ```bash
   npm run android:open
   ```
   This will open Android Studio with the Elderfy Android project.

2. **Wait for Gradle sync** (first time takes 5-10 minutes)
   - Android Studio will download dependencies automatically
   - You'll see "Gradle sync finished" when complete

3. **Connect your Android device OR start emulator:**
   - **Physical device**: Enable USB debugging in Developer Options
   - **Emulator**: Click "Device Manager" → Create/Start a virtual device

4. **Run the app:**
   - Click the green ▶️ "Run" button in Android Studio
   - Select your device
   - App will install and launch automatically

### Option 2: Command Line Build

1. **Build the APK:**
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

2. **Find your APK:**
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

3. **Install on device:**
   ```bash
   adb install app/build/outputs/apk/debug/app-debug.apk
   ```

## Making Changes to Web App

Every time you update the web app, sync changes to Android:

```bash
npm run export          # Build static export
npm run android:sync    # Sync to Android
```

Or use the combined command:
```bash
npm run android:build   # Export + Sync + Open Android Studio
```

## Customizing App Icon and Splash Screen

### App Icon

1. **Create app icons** (or use https://icon.kitchen):
   - Create a 1024x1024px PNG icon
   - Upload to Android Studio:
     - Right-click `android/app/src/main/res`
     - New → Image Asset
     - Select your icon file
     - Click "Next" → "Finish"

2. **Or manually add icons** to these folders:
   ```
   android/app/src/main/res/
     ├── mipmap-mdpi/ic_launcher.png (48x48)
     ├── mipmap-hdpi/ic_launcher.png (72x72)
     ├── mipmap-xhdpi/ic_launcher.png (96x96)
     ├── mipmap-xxhdpi/ic_launcher.png (144x144)
     └── mipmap-xxxhdpi/ic_launcher.png (192x192)
   ```

### Splash Screen

The splash screen is already configured with Elderfy's orange color (#f97316) in `capacitor.config.ts`.

To customize further:
1. Edit `capacitor.config.ts`:
   ```typescript
   SplashScreen: {
     launchShowDuration: 2000,  // Duration in ms
     backgroundColor: '#f97316', // Change color
     showSpinner: false,         // Show loading spinner
   }
   ```

2. Re-sync:
   ```bash
   npm run android:sync
   ```

## Building Signed APK (Production/Distribution)

### Step 1: Generate Signing Key

```bash
cd android/app
keytool -genkey -v -keystore elderfy-release-key.keystore \
  -alias elderfy -keyalg RSA -keysize 2048 -validity 10000
```

Enter a strong password and save it securely!

### Step 2: Configure Signing

Create `android/key.properties`:
```properties
storePassword=YOUR_KEYSTORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=elderfy
storeFile=elderfy-release-key.keystore
```

Add to `android/app/build.gradle`:
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

### Step 3: Build Release APK

```bash
cd android
./gradlew assembleRelease
```

Signed APK will be at:
```
android/app/build/outputs/apk/release/app-release.apk
```

## Installing APK on Android Device

### Method 1: Via USB (ADB)

1. **Enable USB Debugging** on your Android device:
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
   - Go back → Developer Options → Enable USB Debugging

2. **Connect device and install:**
   ```bash
   adb install android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Method 2: Direct Download

1. **Transfer APK to your phone** (email, Google Drive, USB, etc.)
2. **Open the APK file** on your phone
3. **Enable "Install from Unknown Sources"** if prompted
4. **Tap Install**

### Method 3: Google Play Store (Production)

1. Build signed release APK (see above)
2. Create Google Play Developer account ($25 one-time fee)
3. Upload APK to Play Console
4. Complete store listing
5. Submit for review

## App Permissions

Elderfy currently uses these permissions (auto-configured):

- **INTERNET** - To load content and process payments
- **READ/WRITE_EXTERNAL_STORAGE** - For photo uploads (Android 10+)

Permissions are declared in `android/app/src/main/AndroidManifest.xml`.

## Troubleshooting

### "SDK location not found"

Create `android/local.properties`:
```properties
sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk
```
(Path varies by OS - check Android Studio preferences)

### "Gradle sync failed"

1. Open Android Studio
2. File → Invalidate Caches → Invalidate and Restart
3. Try again

### "App won't install"

1. Uninstall old version first
2. Check device storage space
3. Enable "Install from Unknown Sources"

### White screen on app launch

1. Clear app data on device
2. Rebuild:
   ```bash
   npm run export
   npm run android:sync
   ```

### Changes not appearing in app

Always sync after web changes:
```bash
npm run android:sync
```

## Project Structure

```
elderfy/
├── android/                    # Android native project
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── assets/www/    # Your web app goes here (auto-synced)
│   │   │   ├── res/           # Icons, splash screens
│   │   │   └── AndroidManifest.xml
│   │   └── build.gradle
│   └── build.gradle
├── out/                        # Static export of web app
├── capacitor.config.ts         # Capacitor configuration
└── package.json
```

## Useful Commands

```bash
# Development workflow
npm run dev                 # Run web app locally (localhost:3000)
npm run export             # Build static export for mobile
npm run android:sync       # Sync web changes to Android
npm run android:open       # Open in Android Studio
npm run android:build      # Export + Sync + Open (all-in-one)

# Android native
cd android
./gradlew assembleDebug    # Build debug APK
./gradlew assembleRelease  # Build release APK
./gradlew clean            # Clean build cache
```

## Testing on Real Device

1. **Build the app:**
   ```bash
   npm run android:build
   ```

2. **In Android Studio, click Run (▶️)**

3. **App installs on your device!**

4. **Test all features:**
   - ✅ Browse elder profiles
   - ✅ View content (videos, text, music, art)
   - ✅ Donation buttons work
   - ✅ Stripe checkout opens in browser
   - ✅ Navigation works smoothly
   - ✅ Upload page is accessible

## Performance Tips

- **Images**: All images are optimized for mobile
- **Offline**: App requires internet connection for Stripe payments
- **Size**: APK is ~5-10MB (small!)
- **Speed**: Static export = fast loading

## Next Steps

1. **Test thoroughly** on multiple Android devices
2. **Add custom app icon** (use https://icon.kitchen)
3. **Customize splash screen** if desired
4. **Build signed APK** for distribution
5. **Submit to Play Store** (optional)

## Resources

- **Capacitor Docs**: https://capacitorjs.com/docs
- **Android Studio**: https://developer.android.com/studio
- **Icon Generator**: https://icon.kitchen
- **Play Console**: https://play.google.com/console

## Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review Capacitor docs: https://capacitorjs.com/docs/android
3. Check Android Studio Logcat for errors

---

**🎉 You're ready to build Elderfy for Android!**

Start with: `npm run android:build`
