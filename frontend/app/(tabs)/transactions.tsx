import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../src/context/ThemeContext';
import { Spacing, BorderRadius, Typography } from '../../src/constants/theme';

interface Transaction {
  id: string;
  type: 'deposit';
  asset: 'ETH' | 'USDC';
  amount: string;
  value: string;
  from: string;
  date: string;
  time: string;
  fullDate: string;
  status: 'completed';
  txHash: string;
  network: string;
  blockNumber: string;
  gasUsed: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'deposit',
    asset: 'ETH',
    amount: '+53.00174',
    value: '$106,003.48',
    from: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    date: 'January 6th, 2025',
    time: '12:40 PM',
    fullDate: 'Jan 6, 12:40 PM',
    status: 'completed',
    txHash: '0x8f2b...4e9a',
    network: 'Ethereum Mainnet',
    blockNumber: '19234567',
    gasUsed: '21,000',
  },
  {
    id: '2',
    type: 'deposit',
    asset: 'USDC',
    amount: '+6,000.00',
    value: '$6,000.00',
    from: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    date: 'January 6th, 2025',
    time: '12:25 PM',
    fullDate: 'Jan 6, 12:25 PM',
    status: 'completed',
    txHash: '0x3c1d...7b2f',
    network: 'Ethereum Mainnet',
    blockNumber: '19234512',
    gasUsed: '65,000',
  },
  {
    id: '3',
    type: 'deposit',
    asset: 'ETH',
    amount: '+1.00',
    value: '$2,000.00',
    from: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    date: 'January 2nd, 2025',
    time: '2:38 PM',
    fullDate: 'Jan 2, 2:38 PM',
    status: 'completed',
    txHash: '0x9d4e...2c8b',
    network: 'Ethereum Mainnet',
    blockNumber: '19198234',
    gasUsed: '21,000',
  },
  {
    id: '4',
    type: 'deposit',
    asset: 'ETH',
    amount: '+1.00',
    value: '$2,000.00',
    from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    date: 'October 14th, 2024',
    time: '10:35 PM',
    fullDate: 'Oct 14, 10:35 PM',
    status: 'completed',
    txHash: '0x5a7c...1d3e',
    network: 'Ethereum Mainnet',
    blockNumber: '18567890',
    gasUsed: '21,000',
  },
  {
    id: '5',
    type: 'deposit',
    asset: 'ETH',
    amount: '+0.01',
    value: '$20.00',
    from: '0x6B175474E89094C44Da98b954EescdaeAD3F4cEF',
    date: 'October 10th, 2024',
    time: '1:45 PM',
    fullDate: 'Oct 10, 1:45 PM',
    status: 'completed',
    txHash: '0x2e8f...9a4c',
    network: 'Ethereum Mainnet',
    blockNumber: '18534567',
    gasUsed: '21,000',
  },
];

type FilterType = 'All' | 'ETH' | 'USDC';

export default function TransactionsScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const filters: FilterType[] = ['All', 'ETH', 'USDC'];

  const getAssetColor = (asset: string) => {
    switch (asset) {
      case 'ETH':
        return '#627EEA';
      case 'USDC':
        return '#2775CA';
      default:
        return colors.primary;
    }
  };

  const filteredTransactions = transactions.filter((tx) => {
    if (activeFilter === 'All') return true;
    return tx.asset === activeFilter;
  });

  const openTransactionModal = (tx: Transaction) => {
    setSelectedTransaction(tx);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTransaction(null);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Transaction History</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={22} color={colors.textPrimary} />
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
              { backgroundColor: colors.surface },
              activeFilter === filter && { backgroundColor: colors.primary },
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                { color: colors.textSecondary },
                activeFilter === filter && { color: colors.textPrimary },
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
            <Ionicons name="document-text-outline" size={48} color={colors.textMuted} />
            <Text style={[styles.emptyText, { color: colors.textMuted }]}>No transactions found</Text>
          </View>
        ) : (
          filteredTransactions.map((tx) => (
            <TouchableOpacity 
              key={tx.id} 
              style={[styles.transactionItem, { borderBottomColor: colors.border }]}
              onPress={() => openTransactionModal(tx)}
              activeOpacity={0.7}
            >
              <View style={[styles.txIcon, { backgroundColor: getAssetColor(tx.asset) + '20' }]}>
                <Ionicons name="arrow-down" size={20} color={colors.success} />
              </View>
              <View style={styles.txInfo}>
                <Text style={[styles.txType, { color: colors.textPrimary }]}>
                  Deposit {tx.asset}
                </Text>
                <Text style={[styles.txDate, { color: colors.textMuted }]}>{tx.fullDate}</Text>
              </View>
              <View style={styles.txAmount}>
                <Text style={[styles.txAmountText, { color: colors.success }]}>
                  {tx.amount} {tx.asset}
                </Text>
                <Text style={[styles.txValue, { color: colors.textMuted }]}>{tx.value}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={colors.textMuted} style={styles.chevron} />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      {/* Transaction Detail Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <Pressable style={[styles.modalContent, { backgroundColor: colors.surface }]} onPress={(e) => e.stopPropagation()}>
            {selectedTransaction && (
              <>
                <View style={styles.modalHeader}>
                  <View style={[styles.modalIcon, { backgroundColor: getAssetColor(selectedTransaction.asset) + '20' }]}>
                    <Ionicons name="arrow-down" size={32} color={colors.success} />
                  </View>
                  <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>Deposit {selectedTransaction.asset}</Text>
                  <Text style={[styles.modalAmount, { color: colors.success }]}>
                    {selectedTransaction.amount} {selectedTransaction.asset}
                  </Text>
                  <Text style={[styles.modalValue, { color: colors.textSecondary }]}>{selectedTransaction.value}</Text>
                </View>

                <View style={[styles.modalDivider, { backgroundColor: colors.border }]} />

                <View style={styles.modalDetails}>
                  <View style={styles.detailRow}>
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Status</Text>
                    <View style={[styles.statusBadge, { backgroundColor: colors.success + '20' }]}>
                      <Ionicons name="checkmark-circle" size={14} color={colors.success} />
                      <Text style={[styles.statusText, { color: colors.success }]}>Completed</Text>
                    </View>
                  </View>

                  <View style={styles.detailRow}>
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Date</Text>
                    <Text style={[styles.detailValue, { color: colors.textPrimary }]}>{selectedTransaction.date}</Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Time</Text>
                    <Text style={[styles.detailValue, { color: colors.textPrimary }]}>{selectedTransaction.time}</Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Network</Text>
                    <Text style={[styles.detailValue, { color: colors.textPrimary }]}>{selectedTransaction.network}</Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>From</Text>
                    <Text style={[styles.detailValueSmall, { color: colors.textPrimary }]} numberOfLines={1}>
                      {selectedTransaction.from}
                    </Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Transaction Hash</Text>
                    <Text style={[styles.detailValueSmall, { color: colors.textPrimary }]}>{selectedTransaction.txHash}</Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Block Number</Text>
                    <Text style={[styles.detailValue, { color: colors.textPrimary }]}>{selectedTransaction.blockNumber}</Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Gas Used</Text>
                    <Text style={[styles.detailValue, { color: colors.textPrimary }]}>{selectedTransaction.gasUsed}</Text>
                  </View>
                </View>

                <TouchableOpacity style={[styles.viewExplorerBtn, { borderColor: colors.primary }]} onPress={closeModal}>
                  <Ionicons name="open-outline" size={18} color={colors.primary} />
                  <Text style={[styles.viewExplorerText, { color: colors.primary }]}>View on Explorer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.closeButton, { backgroundColor: colors.surfaceLight }]} onPress={closeModal}>
                  <Text style={[styles.closeButtonText, { color: colors.textPrimary }]}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  title: {
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
    marginRight: Spacing.sm,
  },
  filterText: {
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
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
    borderBottomWidth: 1,
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
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  txDate: {
    fontSize: Typography.small.fontSize,
    marginTop: 2,
  },
  txAmount: {
    alignItems: 'flex-end',
    marginRight: Spacing.sm,
  },
  txAmountText: {
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  txValue: {
    fontSize: Typography.small.fontSize,
    marginTop: 2,
  },
  chevron: {
    marginLeft: Spacing.xs,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl * 2,
  },
  emptyText: {
    fontSize: Typography.body.fontSize,
    marginTop: Spacing.md,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxl + 20,
    maxHeight: '85%',
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  modalIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  modalTitle: {
    fontSize: Typography.h3.fontSize,
    fontWeight: Typography.h3.fontWeight,
    marginBottom: Spacing.xs,
  },
  modalAmount: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: Spacing.xs,
  },
  modalValue: {
    fontSize: Typography.body.fontSize,
  },
  modalDivider: {
    height: 1,
    marginVertical: Spacing.md,
  },
  modalDetails: {
    gap: Spacing.md,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: Typography.caption.fontSize,
  },
  detailValue: {
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  detailValueSmall: {
    fontSize: Typography.small.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
    maxWidth: '60%',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    gap: 4,
  },
  statusText: {
    fontSize: Typography.small.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  viewExplorerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.xl,
    paddingVertical: Spacing.md,
    borderWidth: 1,
    borderRadius: BorderRadius.md,
  },
  viewExplorerText: {
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  closeButton: {
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  closeButtonText: {
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
});
