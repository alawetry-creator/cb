import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../constants/theme';

interface NFT {
  id: string;
  name: string;
  collection: string;
  floorPrice: string;
}

interface NFTListProps {
  nfts: NFT[];
}

export const NFTList: React.FC<NFTListProps> = ({ nfts }) => {
  if (nfts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="images-outline" size={48} color={Colors.textMuted} />
        <Text style={styles.emptyText}>No NFTs yet</Text>
        <Text style={styles.emptySubtext}>Your NFTs will appear here</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {nfts.map((nft) => (
        <TouchableOpacity key={nft.id} style={styles.nftCard}>
          <View style={styles.nftImage}>
            <Ionicons name="image" size={32} color={Colors.textMuted} />
          </View>
          <View style={styles.nftInfo}>
            <Text style={styles.nftName} numberOfLines={1}>{nft.name}</Text>
            <Text style={styles.nftCollection}>{nft.collection}</Text>
            <Text style={styles.nftPrice}>{nft.floorPrice}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
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
  nftCard: {
    width: '47%',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  nftImage: {
    aspectRatio: 1,
    backgroundColor: Colors.surfaceDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nftInfo: {
    padding: Spacing.md,
  },
  nftName: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
  nftCollection: {
    color: Colors.textSecondary,
    fontSize: Typography.small.fontSize,
    marginTop: 2,
  },
  nftPrice: {
    color: Colors.primary,
    fontSize: Typography.caption.fontSize,
    marginTop: Spacing.xs,
  },
});
