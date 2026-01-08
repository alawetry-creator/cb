import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

// Light Mode Colors
export const LightColors = {
  background: '#FFFFFF',
  primary: '#2B5CFF',
  primaryLight: '#5B8AFF',
  surface: '#F5F5F5',
  surfaceLight: '#EBEBEB',
  surfaceDark: '#E0E0E0',
  textPrimary: '#000000',
  textSecondary: '#666666',
  textMuted: '#999999',
  gradientStart: '#00D4AA',
  gradientEnd: '#2B5CFF',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  border: '#E0E0E0',
  borderLight: '#D0D0D0',
};

// Dark Mode Colors
export const DarkColors = {
  background: '#000000',
  primary: '#2B5CFF',
  primaryLight: '#5B8AFF',
  surface: '#121212',
  surfaceLight: '#1A1A1A',
  surfaceDark: '#0A0A0A',
  textPrimary: '#FFFFFF',
  textSecondary: '#8E8E93',
  textMuted: '#636366',
  gradientStart: '#00D4AA',
  gradientEnd: '#2B5CFF',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  border: '#2C2C2E',
  borderLight: '#3A3A3C',
};

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  isDarkMode: boolean;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  colors: typeof DarkColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark'); // Default to dark for crypto wallet

  const isDarkMode = themeMode === 'system' 
    ? systemColorScheme === 'dark' 
    : themeMode === 'dark';

  const colors = isDarkMode ? DarkColors : LightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeMode, setThemeMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
