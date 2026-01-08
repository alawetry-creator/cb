import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Spacing } from '../../src/constants/theme';
import { WalletHeader } from '../../src/components/WalletHeader';
import { BalanceCard } from '../../src/components/BalanceCard';
import { ActionButtons } from '../../src/components/ActionButtons';
import { AssetTabs } from '../../src/components/AssetTabs';
import { AssetListItem } from '../../src/components/AssetListItem';
import { NFTList } from '../../src/components/NFTList';
import { DeFiList } from '../../src/components/DeFiList';
import { WarningBanner } from '../../src/components/WarningBanner';
import { walletAddress, cryptoAssets, nftAssets, defiPositions } from '../../src/constants/mockData';

type TabType = 'Crypto' | 'NFTs' | 'DeFi';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<TabType>('Crypto');
  const [showWarning, setShowWarning] = useState(true);

  const totalBalance = cryptoAssets.reduce((sum, asset) => {
    const value = parseFloat(asset.value.replace('$', ''));
    return sum + value;
  }, 0).toFixed(2);

  const handleBuy = () => {
    Alert.alert('Buy Crypto', 'Buy functionality coming soon!');
  };

  const handleSwap = () => {
    Alert.alert('Swap Crypto', 'Swap functionality coming soon!');
  };

  const handleSearch = () => {
    Alert.alert('Search', 'Search functionality coming soon!');
  };

  const handleQR = () => {
    Alert.alert('QR Scanner', 'QR Scanner coming soon!');
  };

  const handleSettings = () => {
    Alert.alert('Settings', 'Navigate to settings');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Crypto':
        return (
          <View style={styles.assetList}>
            {cryptoAssets.map((asset) => (
              <AssetListItem
                key={asset.id}
                name={asset.name}
                symbol={asset.symbol}
                balance={asset.balance}
                value={asset.value}
                change={asset.change}
                isPositive={asset.isPositive}
                color={asset.color}
                network={asset.network}
              />
            ))}
          </View>
        );
      case 'NFTs':
        return <NFTList nfts={nftAssets} />;
      case 'DeFi':
        return <DeFiList positions={defiPositions} />;
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {showWarning && (
        <WarningBanner
          message="Testnet mode enabled. Assets shown are for testing purposes only."
          onClose={() => setShowWarning(false)}
        />
      )}
      
      <WalletHeader
        walletAddress={walletAddress}
        onSearchPress={handleSearch}
        onQRPress={handleQR}
        onSettingsPress={handleSettings}
      />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <BalanceCard balance={totalBalance} />
        
        <ActionButtons
          onBuyPress={handleBuy}
          onSwapPress={handleSwap}
        />
        
        <AssetTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <View style={styles.contentContainer}>
          {renderContent()}
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xxl,
  },
  assetList: {
    marginTop: Spacing.md,
  },
  contentContainer: {
    marginTop: Spacing.md,
  },
});
