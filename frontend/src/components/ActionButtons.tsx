import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../constants/theme';

interface ActionButtonsProps {
  onBuyPress?: () => void;
  onSwapPress?: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onBuyPress,
  onSwapPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonWrapper} onPress={onBuyPress}>
        <LinearGradient
          colors={[Colors.gradientStart, Colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Ionicons name="add" size={20} color={Colors.textPrimary} />
          <Text style={styles.buttonText}>Buy</Text>
        </LinearGradient>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.buttonWrapper, styles.swapButton]} onPress={onSwapPress}>
        <Ionicons name="swap-horizontal" size={20} color={Colors.textPrimary} />
        <Text style={styles.buttonText}>Swap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  buttonWrapper: {
    flex: 1,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xl,
    gap: Spacing.sm,
  },
  swapButton: {
    backgroundColor: Colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xl,
    gap: Spacing.sm,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontSize: Typography.body.fontSize,
    fontWeight: Typography.bodyMedium.fontWeight,
  },
});
