import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../constants/theme';

interface WalletHeaderProps {
  walletAddress: string;
  onSearchPress?: () => void;
  onQRPress?: () => void;
  onSettingsPress?: () => void;
}

export const WalletHeader: React.FC<WalletHeaderProps> = ({
  walletAddress,
  onSearchPress,
  onQRPress,
  onSettingsPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addressChip}>
        <View style={styles.avatar}>
          <Ionicons name="wallet" size={16} color={Colors.primary} />
        </View>
        <Text style={styles.addressText}>{walletAddress}</Text>
        <Ionicons name="chevron-down" size={16} color={Colors.textSecondary} />
      </TouchableOpacity>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton} onPress={onSearchPress}>
          <Ionicons name="search-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onQRPress}>
          <Ionicons name="qr-code-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onSettingsPress}>
          <Ionicons name="settings-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  addressChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    gap: Spacing.sm,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressText: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
