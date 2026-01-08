import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

interface BalanceCardProps {
  balance: string;
  currency?: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  currency = 'USD',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Balance</Text>
      <Text style={styles.balance}>${balance}</Text>
      <Text style={styles.currency}>{currency}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.caption.fontWeight,
    marginBottom: Spacing.xs,
  },
  balance: {
    color: Colors.textPrimary,
    fontSize: Typography.h1.fontSize,
    fontWeight: Typography.h1.fontWeight,
    letterSpacing: Typography.h1.letterSpacing,
  },
  currency: {
    color: Colors.textMuted,
    fontSize: Typography.small.fontSize,
    marginTop: Spacing.xs,
  },
});
