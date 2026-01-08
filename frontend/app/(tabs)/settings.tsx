import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ThemeMode } from '../../src/context/ThemeContext';
import { Spacing, BorderRadius, Typography } from '../../src/constants/theme';

interface SettingsItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showArrow?: boolean;
  rightElement?: React.ReactNode;
  danger?: boolean;
  colors: any;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  showArrow = true,
  rightElement,
  danger = false,
  colors,
}) => (
  <TouchableOpacity style={[styles.settingsItem, { borderBottomColor: colors.border }]} onPress={onPress}>
    <View style={[styles.settingsIcon, danger ? { backgroundColor: colors.error + '15' } : { backgroundColor: colors.primary + '15' }]}>
      <Ionicons name={icon} size={20} color={danger ? colors.error : colors.primary} />
    </View>
    <View style={styles.settingsInfo}>
      <Text style={[styles.settingsTitle, { color: danger ? colors.error : colors.textPrimary }]}>{title}</Text>
      {subtitle && <Text style={[styles.settingsSubtitle, { color: colors.textMuted }]}>{subtitle}</Text>}
    </View>
    {rightElement || (showArrow && (
      <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
    ))}
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { isDarkMode, themeMode, setThemeMode, colors } = useTheme();
  const [biometricEnabled, setBiometricEnabled] = React.useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const getThemeModeLabel = () => {
    switch (themeMode) {
      case 'dark':
        return 'Dark';
      case 'light':
        return 'Light';
      case 'system':
        return 'System';
      default:
        return 'Dark';
    }
  };

  const cycleThemeMode = () => {
    const modes: ThemeMode[] = ['dark', 'light', 'system'];
    const currentIndex = modes.indexOf(themeMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setThemeMode(modes[nextIndex]);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Settings</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Appearance</Text>
          <View style={[styles.sectionContent, { backgroundColor: colors.surface }]}>
            <TouchableOpacity style={[styles.settingsItem, { borderBottomColor: colors.border }]} onPress={cycleThemeMode}>
              <View style={[styles.settingsIcon, { backgroundColor: colors.primary + '15' }]}>
                <Ionicons 
                  name={isDarkMode ? 'moon' : 'sunny'} 
                  size={20} 
                  color={colors.primary} 
                />
              </View>
              <View style={styles.settingsInfo}>
                <Text style={[styles.settingsTitle, { color: colors.textPrimary }]}>Theme</Text>
                <Text style={[styles.settingsSubtitle, { color: colors.textMuted }]}>
                  {getThemeModeLabel()} Mode
                </Text>
              </View>
              <View style={styles.themeBadge}>
                <Text style={[styles.themeBadgeText, { color: colors.primary }]}>
                  {getThemeModeLabel()}
                </Text>
                <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
              </View>
            </TouchableOpacity>
            <SettingsItem
              icon="color-palette-outline"
              title="Accent Color"
              subtitle="Blue"
              colors={colors}
            />
          </View>
        </View>

        {/* Wallet Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Wallet</Text>
          <View style={[styles.sectionContent, { backgroundColor: colors.surface }]}>
            <SettingsItem
              icon="wallet-outline"
              title="Manage Wallets"
              subtitle="Add or remove wallets"
              colors={colors}
            />
            <SettingsItem
              icon="key-outline"
              title="Backup Wallet"
              subtitle="Secure your recovery phrase"
              colors={colors}
            />
            <SettingsItem
              icon="globe-outline"
              title="Network"
              subtitle="Ethereum Mainnet"
              colors={colors}
            />
          </View>
        </View>
        
        {/* Security Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Security</Text>
          <View style={[styles.sectionContent, { backgroundColor: colors.surface }]}>
            <SettingsItem
              icon="finger-print-outline"
              title="Biometric Login"
              showArrow={false}
              colors={colors}
              rightElement={
                <Switch
                  value={biometricEnabled}
                  onValueChange={setBiometricEnabled}
                  trackColor={{ false: colors.surface, true: colors.primary + '50' }}
                  thumbColor={biometricEnabled ? colors.primary : colors.textMuted}
                />
              }
            />
            <SettingsItem
              icon="lock-closed-outline"
              title="Change PIN"
              subtitle="Update your security PIN"
              colors={colors}
            />
            <SettingsItem
              icon="shield-checkmark-outline"
              title="Connected Sites"
              subtitle="Manage dApp connections"
              colors={colors}
            />
          </View>
        </View>
        
        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Preferences</Text>
          <View style={[styles.sectionContent, { backgroundColor: colors.surface }]}>
            <SettingsItem
              icon="notifications-outline"
              title="Notifications"
              showArrow={false}
              colors={colors}
              rightElement={
                <Switch
                  value={notificationsEnabled}
                  onValueChange={setNotificationsEnabled}
                  trackColor={{ false: colors.surface, true: colors.primary + '50' }}
                  thumbColor={notificationsEnabled ? colors.primary : colors.textMuted}
                />
              }
            />
            <SettingsItem
              icon="cash-outline"
              title="Currency"
              subtitle="USD"
              colors={colors}
            />
            <SettingsItem
              icon="language-outline"
              title="Language"
              subtitle="English"
              colors={colors}
            />
          </View>
        </View>
        
        {/* Support Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Support</Text>
          <View style={[styles.sectionContent, { backgroundColor: colors.surface }]}>
            <SettingsItem
              icon="help-circle-outline"
              title="Help Center"
              colors={colors}
            />
            <SettingsItem
              icon="chatbubble-outline"
              title="Contact Support"
              colors={colors}
            />
            <SettingsItem
              icon="document-text-outline"
              title="Terms of Service"
              colors={colors}
            />
            <SettingsItem
              icon="shield-outline"
              title="Privacy Policy"
              colors={colors}
            />
          </View>
        </View>
        
        {/* Danger Zone */}
        <View style={styles.section}>
          <View style={[styles.sectionContent, { backgroundColor: colors.surface }]}>
            <SettingsItem
              icon="log-out-outline"
              title="Lock Wallet"
              showArrow={false}
              danger
              colors={colors}
            />
          </View>
        </View>
        
        {/* Version */}
        <View style={styles.versionContainer}>
          <Text style={[styles.versionText, { color: colors.textMuted }]}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  title: {
    fontSize: Typography.h2.fontSize,
    fontWeight: Typography.h2.fontWeight,
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  sectionContent: {
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderBottomWidth: 1,
  },
  settingsIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  settingsTitle: {
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  settingsSubtitle: {
    fontSize: Typography.small.fontSize,
    marginTop: 2,
  },
  themeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  themeBadgeText: {
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  versionContainer: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
  },
  versionText: {
    fontSize: Typography.small.fontSize,
  },
});
