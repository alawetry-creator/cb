import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../src/context/ThemeContext';
import { Spacing, BorderRadius } from '../../src/constants/theme';

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: [styles.tabBar, { backgroundColor: colors.background, borderTopColor: colors.border }],
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: colors.primary + '15' }]}>
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="browser"
        options={{
          title: 'Browser',
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: colors.primary + '15' }]}>
              <Ionicons
                name={focused ? 'globe' : 'globe-outline'}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: 'Swap',
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: colors.primary + '15' }]}>
              <Ionicons
                name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: colors.primary + '15' }]}>
              <Ionicons
                name={focused ? 'document-text' : 'document-text-outline'}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: colors.primary + '15' }]}>
              <Ionicons
                name={focused ? 'wallet' : 'wallet-outline'}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
    height: Platform.OS === 'ios' ? 88 : 68,
    paddingTop: Spacing.sm,
    paddingBottom: Platform.OS === 'ios' ? Spacing.xl : Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
  },
});
