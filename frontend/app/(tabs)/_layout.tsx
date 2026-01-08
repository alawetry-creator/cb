import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius } from '../../src/constants/theme';

type IconName = 'home' | 'home-outline' | 'globe' | 'globe-outline' | 'swap-horizontal' | 'swap-horizontal-outline' | 'document-text' | 'document-text-outline' | 'wallet' | 'wallet-outline';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
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
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
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
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
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
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
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
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
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
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
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
  activeIconContainer: {
    backgroundColor: Colors.primary + '15',
  },
});
