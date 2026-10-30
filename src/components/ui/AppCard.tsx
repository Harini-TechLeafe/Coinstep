import React from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  Pressable,
} from 'react-native';

import {
  colors,
  spacing,
  radius,
  shadows,
} from '../../theme';

type CardVariant = 'default' | 'outlined' | 'elevated';

interface AppCardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: keyof typeof spacing;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function AppCard({
  children,
  variant = 'default',
  padding = 'base',
  onPress,
  style,
}: AppCardProps) {
  const cardStyle = [
    styles.card,
    { padding: spacing[padding] },
    variant === 'outlined' && styles.outlined,
    variant === 'elevated' && shadows.md,
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        style={({ pressed }) => [
          cardStyle,
          pressed && styles.pressed,
        ]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
  },

  outlined: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },

  pressed: {
    opacity: 0.8,
  },
});