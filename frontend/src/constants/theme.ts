// Professional Mobile Crypto Wallet UI Theme
export const Colors = {
  // Primary Background
  background: '#000000',
  
  // Primary Accent
  primary: '#2B5CFF',
  primaryLight: '#5B8AFF',
  
  // Secondary Surfaces
  surface: '#121212',
  surfaceLight: '#1A1A1A',
  surfaceDark: '#0A0A0A',
  
  // Text Colors
  textPrimary: '#FFFFFF',
  textSecondary: '#8E8E93',
  textMuted: '#636366',
  
  // Gradient Colors
  gradientStart: '#00D4AA',
  gradientEnd: '#2B5CFF',
  
  // Status Colors
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  
  // Border Colors
  border: '#2C2C2E',
  borderLight: '#3A3A3C',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const Typography = {
  h1: {
    fontSize: 48,
    fontWeight: '700' as const,
    letterSpacing: -1,
  },
  h2: {
    fontSize: 32,
    fontWeight: '700' as const,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
  },
  bodyMedium: {
    fontSize: 16,
    fontWeight: '500' as const,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
  },
};

export const Shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: '#2B5CFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
};
