import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../../src/constants/theme';

type FilterType = 'All' | 'Sent' | 'Received' | 'Swapped';

const transactions = [
  {
    id: '1',
    type: 'received',
    asset: 'ETH',
    amount: '+0.05',
    value: '$100.50',
    from: '0xABC...123',
    date: 'Today, 2:30 PM',
    status: 'completed',
  },
  {
    id: '2',
    type: 'sent',
    asset: 'USDC',
    amount: '-25.00',
    value: '$25.00',
    to: '0xDEF...456',
    date: 'Today, 11:15 AM',
    status: 'completed',
  },
  {
    id: '3',
    type: 'swapped',
    assetFrom: 'ETH',
    assetTo: 'USDC',
    amountFrom: '0.02',
    amountTo: '40.25',
    date: 'Yesterday, 5:45 PM',
    status: 'completed',
  },
  {
    id: '4',
    type: 'received',
    asset: 'MATIC',
    amount: '+10.00',
    value: '$6.50',
    from: '0xGHI...789',
    date: 'Yesterday, 9:00 AM',
    status: 'completed',
  },
  {
    id: '5',
    type: 'sent',
    asset: 'ETH',
    amount: '-0.01',
    value: '$20.10',
    to: '0xJKL...012',
    date: '2 days ago',
    status: 'completed',
  },
];

export default function TransactionsScreen() {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filters: FilterType[] = ['All', 'Sent', 'Received', 'Swapped'];

  const getIcon = (type: string): keyof typeof Ionicons.glyphMap => {
    switch (type) {
      case 'received':
        return 'arrow-down';
      case 'sent':
        return 'arrow-up';
      case 'swapped':
        return 'swap-horizontal';
      default:
        return 'ellipse';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'received':
        return Colors.success;
      case 'sent':
        return Colors.error;
      case 'swapped':
        return Colors.primary;
      default:
        return Colors.textMuted;
    }
  };

  const filteredTransactions = transactions.filter((tx) => {
    if (activeFilter === 'All') return true;
    return tx.type.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>
      
      {/* Filter Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterChip,
              activeFilter === filter && styles.activeFilterChip,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.activeFilterText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Transactions List */}
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {filteredTransactions.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={48} color={Colors.textMuted} />
            <Text style={styles.emptyText}>No transactions found</Text>
          </View>
        ) : (
          filteredTransactions.map((tx) => (
            <TouchableOpacity key={tx.id} style={styles.transactionItem}>
              <View style={[styles.txIcon, { backgroundColor: getIconColor(tx.type) + '20' }]}>
                <Ionicons name={getIcon(tx.type)} size={20} color={getIconColor(tx.type)} />
              </View>
              <View style={styles.txInfo}>
                <Text style={styles.txType}>
                  {tx.type === 'swapped'
                    ? `Swapped ${tx.assetFrom} → ${tx.assetTo}`
                    : `${tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} ${tx.asset}`}
                </Text>
                <Text style={styles.txDate}>{tx.date}</Text>
              </View>
              <View style={styles.txAmount}>
                <Text
                  style={[
                    styles.txAmountText,
                    tx.type === 'received' && styles.positiveAmount,
                    tx.type === 'sent' && styles.negativeAmount,
                  ]}
                >
                  {tx.type === 'swapped' ? `-${tx.amountFrom} ${tx.assetFrom}` : `${tx.amount} ${tx.asset}`}
                </Text>
                <Text style={styles.txValue}>
                  {tx.type === 'swapped' ? `+${tx.amountTo} ${tx.assetTo}` : tx.value}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: Typography.h2.fontSize,
    fontWeight: Typography.h2.fontWeight,
  },
  filterButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    maxHeight: 50,
  },
  filterContent: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  filterChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.surface,
    marginRight: Spacing.sm,
  },
  activeFilterChip: {
    backgroundColor: Colors.primary,
  },
  filterText: {
    color: Colors.textSecondary,
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  activeFilterText: {
    color: Colors.textPrimary,
  },
  list: {
    flex: 1,
    marginTop: Spacing.md,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  txIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  txType: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  txDate: {
    color: Colors.textMuted,
    fontSize: Typography.small.fontSize,
    marginTop: 2,
  },
  txAmount: {
    alignItems: 'flex-end',
  },
  txAmountText: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  positiveAmount: {
    color: Colors.success,
  },
  negativeAmount: {
    color: Colors.error,
  },
  txValue: {
    color: Colors.textMuted,
    fontSize: Typography.small.fontSize,
    marginTop: 2,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl * 2,
  },
  emptyText: {
    color: Colors.textMuted,
    fontSize: Typography.body.fontSize,
    marginTop: Spacing.md,
  },
});
