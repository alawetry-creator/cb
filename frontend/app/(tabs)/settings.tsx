import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../../src/constants/theme';

interface SettingsItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showArrow?: boolean;
  rightElement?: React.ReactNode;
  danger?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  showArrow = true,
  rightElement,
  danger = false,
}) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    <View style={[styles.settingsIcon, danger && styles.dangerIcon]}>
      <Ionicons name={icon} size={20} color={danger ? Colors.error : Colors.primary} />
    </View>
    <View style={styles.settingsInfo}>
      <Text style={[styles.settingsTitle, danger && styles.dangerText]}>{title}</Text>
      {subtitle && <Text style={styles.settingsSubtitle}>{subtitle}</Text>}
    </View>
    {rightElement || (showArrow && (
      <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
    ))}
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const [biometricEnabled, setBiometricEnabled] = React.useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Wallet Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wallet</Text>
          <View style={styles.sectionContent}>
            <SettingsItem
              icon="wallet-outline"
              title="Manage Wallets"
              subtitle="Add or remove wallets"
            />
            <SettingsItem
              icon="key-outline"
              title="Backup Wallet"
              subtitle="Secure your recovery phrase"
            />
            <SettingsItem
              icon="globe-outline"
              title="Network"
              subtitle="Ethereum Mainnet"
            />
          </View>
        </View>
        
        {/* Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <View style={styles.sectionContent}>
            <SettingsItem
              icon="finger-print-outline"
              title="Biometric Login"
              showArrow={false}
              rightElement={
                <Switch
                  value={biometricEnabled}
                  onValueChange={setBiometricEnabled}
                  trackColor={{ false: Colors.surface, true: Colors.primary + '50' }}
                  thumbColor={biometricEnabled ? Colors.primary : Colors.textMuted}
                />
              }
            />
            <SettingsItem
              icon="lock-closed-outline"
              title="Change PIN"
              subtitle="Update your security PIN"
            />
            <SettingsItem
              icon="shield-checkmark-outline"
              title="Connected Sites"
              subtitle="Manage dApp connections"
            />
          </View>
        </View>
        
        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.sectionContent}>
            <SettingsItem
              icon="notifications-outline"
              title="Notifications"
              showArrow={false}
              rightElement={
                <Switch
                  value={notificationsEnabled}
                  onValueChange={setNotificationsEnabled}
                  trackColor={{ false: Colors.surface, true: Colors.primary + '50' }}
                  thumbColor={notificationsEnabled ? Colors.primary : Colors.textMuted}
                />
              }
            />
            <SettingsItem
              icon="cash-outline"
              title="Currency"
              subtitle="USD"
            />
            <SettingsItem
              icon="language-outline"
              title="Language"
              subtitle="English"
            />
          </View>
        </View>
        
        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <View style={styles.sectionContent}>
            <SettingsItem
              icon="help-circle-outline"
              title="Help Center"
            />
            <SettingsItem
              icon="chatbubble-outline"
              title="Contact Support"
            />
            <SettingsItem
              icon="document-text-outline"
              title="Terms of Service"
            />
            <SettingsItem
              icon="shield-outline"
              title="Privacy Policy"
            />
          </View>
        </View>
        
        {/* Danger Zone */}
        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <SettingsItem
              icon="log-out-outline"
              title="Lock Wallet"
              showArrow={false}
              danger
            />
          </View>
        </View>
        
        {/* Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  title: {
    color: Colors.textPrimary,
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
    color: Colors.textSecondary,
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  sectionContent: {
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  settingsIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: Colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dangerIcon: {
    backgroundColor: Colors.error + '15',
  },
  settingsInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  settingsTitle: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  dangerText: {
    color: Colors.error,
  },
  settingsSubtitle: {
    color: Colors.textMuted,
    fontSize: Typography.small.fontSize,
    marginTop: 2,
  },
  versionContainer: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
  },
  versionText: {
    color: Colors.textMuted,
    fontSize: Typography.small.fontSize,
  },
});
