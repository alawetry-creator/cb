import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

type TabType = 'Crypto' | 'NFTs' | 'DeFi';

interface AssetTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const AssetTabs: React.FC<AssetTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs: TabType[] = ['Crypto', 'NFTs', 'DeFi'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={styles.tab}
          onPress={() => onTabChange(tab)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
          {activeTab === tab && <View style={styles.indicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tab: {
    marginRight: Spacing.xl,
    paddingBottom: Spacing.md,
    position: 'relative',
  },
  tabText: {
    color: Colors.textSecondary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  activeTabText: {
    color: Colors.textPrimary,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: Colors.primary,
    borderRadius: 1,
  },
});
