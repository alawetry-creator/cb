import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme, DarkColors } from '../src/context/ThemeContext';

// Splash Screen Component
const SplashScreen: React.FC = () => {
  return (
    <View style={splashStyles.container}>
      <View style={splashStyles.logoContainer}>
        <View style={splashStyles.logoOuter}>
          <View style={splashStyles.logoInner}>
            <View style={splashStyles.logoC}>
              <View style={splashStyles.logoCInner} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: DarkColors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: DarkColors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
  logoInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: DarkColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoC: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: DarkColors.textPrimary,
    borderRightColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
  logoCInner: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 12,
    height: 12,
    backgroundColor: DarkColors.primary,
  },
});

function RootLayoutContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode, colors } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen />
      </>
    );
  }

  return (
    <>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootLayoutContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
