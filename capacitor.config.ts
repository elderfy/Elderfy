import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elderfy.app',
  appName: 'Elderfy',
  webDir: 'out',
  server: {
    // For development, you can use: url: 'http://localhost:3000'
    // For production, comment out the url or use your deployed URL
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#f97316',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#f97316'
    },
    Keyboard: {
      resize: 'body',
      style: 'LIGHT',
      resizeOnFullScreen: true,
    }
  }
};

export default config;
