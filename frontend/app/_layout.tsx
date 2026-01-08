import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../src/constants/theme';

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
    backgroundColor: Colors.background,
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
    backgroundColor: Colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
  logoInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoC: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: Colors.textPrimary,
    borderRightColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
  logoCInner: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 12,
    height: 12,
    backgroundColor: Colors.primary,
  },
});

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <StatusBar style="light" />
        <SplashScreen />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
