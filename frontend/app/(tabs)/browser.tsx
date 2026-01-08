import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../../src/constants/theme';

const dApps = [
  { id: '1', name: 'Uniswap', category: 'DEX', icon: 'swap-horizontal' },
  { id: '2', name: 'Aave', category: 'Lending', icon: 'analytics' },
  { id: '3', name: 'OpenSea', category: 'NFT', icon: 'images' },
  { id: '4', name: 'Compound', category: 'Lending', icon: 'pie-chart' },
  { id: '5', name: 'SushiSwap', category: 'DEX', icon: 'fish' },
  { id: '6', name: 'Curve', category: 'DEX', icon: 'trending-up' },
];

export default function BrowserScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Browser</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={Colors.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search or enter URL"
          placeholderTextColor={Colors.textMuted}
        />
        <TouchableOpacity>
          <Ionicons name="qr-code-outline" size={20} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Popular dApps</Text>
        
        <View style={styles.dAppsGrid}>
          {dApps.map((dApp) => (
            <TouchableOpacity key={dApp.id} style={styles.dAppCard}>
              <View style={styles.dAppIcon}>
                <Ionicons name={dApp.icon as any} size={28} color={Colors.primary} />
              </View>
              <Text style={styles.dAppName}>{dApp.name}</Text>
              <Text style={styles.dAppCategory}>{dApp.category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>Recent</Text>
        <View style={styles.emptyState}>
          <Ionicons name="time-outline" size={48} color={Colors.textMuted} />
          <Text style={styles.emptyText}>No recent activity</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
  },
  content: {
    flex: 1,
    paddingTop: Spacing.xl,
  },
  sectionTitle: {
    color: Colors.textSecondary,
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  dAppsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.xl,
  },
  dAppCard: {
    width: '33.33%',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  dAppIcon: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  dAppName: {
    color: Colors.textPrimary,
    fontSize: Typography.caption.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  dAppCategory: {
    color: Colors.textMuted,
    fontSize: Typography.small.fontSize,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
  },
  emptyText: {
    color: Colors.textMuted,
    fontSize: Typography.body.fontSize,
    marginTop: Spacing.md,
  },
});
