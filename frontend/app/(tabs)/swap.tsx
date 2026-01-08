import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../../src/constants/theme';

export default function SwapScreen() {
  const insets = useSafeAreaInsets();
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Swap</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        {/* From Token */}
        <View style={styles.tokenCard}>
          <View style={styles.tokenHeader}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.balance}>Balance: 0.0024 ETH</Text>
          </View>
          <View style={styles.tokenInput}>
            <TouchableOpacity style={styles.tokenSelector}>
              <View style={styles.tokenIcon}>
                <Ionicons name="logo-web-component" size={20} color="#627EEA" />
              </View>
              <Text style={styles.tokenName}>ETH</Text>
              <Ionicons name="chevron-down" size={16} color={Colors.textSecondary} />
            </TouchableOpacity>
            <TextInput
              style={styles.amountInput}
              placeholder="0.0"
              placeholderTextColor={Colors.textMuted}
              keyboardType="decimal-pad"
              value={fromAmount}
              onChangeText={setFromAmount}
            />
          </View>
          <TouchableOpacity style={styles.maxButton}>
            <Text style={styles.maxText}>MAX</Text>
          </TouchableOpacity>
        </View>
        
        {/* Swap Button */}
        <TouchableOpacity style={styles.swapIconContainer}>
          <View style={styles.swapIcon}>
            <Ionicons name="swap-vertical" size={24} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        
        {/* To Token */}
        <View style={styles.tokenCard}>
          <View style={styles.tokenHeader}>
            <Text style={styles.label}>To</Text>
            <Text style={styles.balance}>Balance: 2.50 USDC</Text>
          </View>
          <View style={styles.tokenInput}>
            <TouchableOpacity style={styles.tokenSelector}>
              <View style={[styles.tokenIcon, { backgroundColor: '#2775CA20' }]}>
                <Ionicons name="logo-usd" size={20} color="#2775CA" />
              </View>
              <Text style={styles.tokenName}>USDC</Text>
              <Ionicons name="chevron-down" size={16} color={Colors.textSecondary} />
            </TouchableOpacity>
            <TextInput
              style={styles.amountInput}
              placeholder="0.0"
              placeholderTextColor={Colors.textMuted}
              keyboardType="decimal-pad"
              value={toAmount}
              onChangeText={setToAmount}
            />
          </View>
        </View>
        
        {/* Swap Details */}
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Rate</Text>
            <Text style={styles.detailValue}>1 ETH = 2,012.45 USDC</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Network Fee</Text>
            <Text style={styles.detailValue}>~$0.50</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Slippage</Text>
            <Text style={styles.detailValue}>0.5%</Text>
          </View>
        </View>
        
        {/* Swap Button */}
        <TouchableOpacity style={styles.swapButtonWrapper}>
          <LinearGradient
            colors={[Colors.gradientStart, Colors.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.swapButton}
          >
            <Text style={styles.swapButtonText}>Swap</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
  settingsButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
  },
  tokenCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
  },
  tokenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: Typography.caption.fontSize,
  },
  balance: {
    color: Colors.textMuted,
    fontSize: Typography.small.fontSize,
  },
  tokenInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tokenSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceLight,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    gap: Spacing.sm,
  },
  tokenIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#627EEA20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokenName: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  amountInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: Typography.h3.fontSize,
    fontWeight: Typography.h3.fontWeight,
    textAlign: 'right',
  },
  maxButton: {
    alignSelf: 'flex-start',
    marginTop: Spacing.sm,
  },
  maxText: {
    color: Colors.primary,
    fontSize: Typography.small.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  swapIconContainer: {
    alignItems: 'center',
    marginVertical: -Spacing.md,
    zIndex: 1,
  },
  swapIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.surface,
    borderWidth: 4,
    borderColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginTop: Spacing.xl,
    gap: Spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLabel: {
    color: Colors.textSecondary,
    fontSize: Typography.caption.fontSize,
  },
  detailValue: {
    color: Colors.textPrimary,
    fontSize: Typography.caption.fontSize,
  },
  swapButtonWrapper: {
    marginTop: Spacing.xl,
  },
  swapButton: {
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
  },
  swapButtonText: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
});
