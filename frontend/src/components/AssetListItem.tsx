import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../constants/theme';

interface AssetListItemProps {
  name: string;
  symbol: string;
  balance: string;
  value: string;
  change: string;
  isPositive: boolean;
  color: string;
  network: string;
  onPress?: () => void;
}

export const AssetListItem: React.FC<AssetListItemProps> = ({
  name,
  symbol,
  balance,
  value,
  change,
  isPositive,
  color,
  network,
  onPress,
}) => {
  const getIconName = (sym: string): keyof typeof Ionicons.glyphMap => {
    switch (sym) {
      case 'ETH':
        return 'logo-web-component';
      case 'USDC':
        return 'logo-usd';
      case 'MATIC':
        return 'triangle';
      case 'LINK':
        return 'link';
      case 'UNI':
        return 'swap-horizontal';
      default:
        return 'ellipse';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
          <Ionicons name={getIconName(symbol)} size={24} color={color} />
          <View style={styles.networkBadge}>
            <Ionicons name="ellipse" size={8} color={Colors.primary} />
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.balance}>
            {balance} {symbol}
          </Text>
        </View>
      </View>
      
      <View style={styles.rightSection}>
        <Text style={styles.value}>{value}</Text>
        <Text style={[styles.change, isPositive ? styles.positive : styles.negative]}>
          {change}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  networkBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    gap: 2,
  },
  name: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  balance: {
    color: Colors.textSecondary,
    fontSize: Typography.caption.fontSize,
  },
  rightSection: {
    alignItems: 'flex-end',
    gap: 2,
  },
  value: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  change: {
    fontSize: Typography.caption.fontSize,
  },
  positive: {
    color: Colors.success,
  },
  negative: {
    color: Colors.error,
  },
});
