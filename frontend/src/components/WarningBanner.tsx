import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Typography } from '../constants/theme';

interface WarningBannerProps {
  message: string;
  onClose?: () => void;
}

export const WarningBanner: React.FC<WarningBannerProps> = ({
  message,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="information-circle" size={16} color={Colors.primary} />
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>
      {onClose && (
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={16} color={Colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary + '15',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    flex: 1,
  },
  message: {
    color: Colors.textSecondary,
    fontSize: Typography.small.fontSize,
    flex: 1,
  },
  closeButton: {
    padding: Spacing.xs,
  },
});
