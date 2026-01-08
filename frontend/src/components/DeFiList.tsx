import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../constants/theme';

interface DeFiPosition {
  id: string;
  protocol: string;
  type: string;
  value: string;
  apy: string;
}

interface DeFiListProps {
  positions: DeFiPosition[];
}

export const DeFiList: React.FC<DeFiListProps> = ({ positions }) => {
  if (positions.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="analytics-outline" size={48} color={Colors.textMuted} />
        <Text style={styles.emptyText}>No DeFi positions</Text>
        <Text style={styles.emptySubtext}>Start earning by providing liquidity</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {positions.map((position) => (
        <TouchableOpacity key={position.id} style={styles.positionCard}>
          <View style={styles.leftSection}>
            <View style={styles.iconContainer}>
              <Ionicons name="pie-chart" size={24} color={Colors.primary} />
            </View>
            <View>
              <Text style={styles.protocol}>{position.protocol}</Text>
              <Text style={styles.type}>{position.type}</Text>
            </View>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.value}>{position.value}</Text>
            <Text style={styles.apy}>{position.apy} APY</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxl * 2,
  },
  emptyText: {
    color: Colors.textSecondary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
    marginTop: Spacing.md,
  },
  emptySubtext: {
    color: Colors.textMuted,
    fontSize: Typography.caption.fontSize,
    marginTop: Spacing.xs,
  },
  positionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  protocol: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  type: {
    color: Colors.textSecondary,
    fontSize: Typography.caption.fontSize,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  value: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  apy: {
    color: Colors.success,
    fontSize: Typography.caption.fontSize,
  },
});
