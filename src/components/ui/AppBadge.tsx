import React from 'react';

import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { spacing, radius } from '../../theme';
import AppText from './AppText';

type BadgeVariant =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'default';

interface AppBadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: StyleProp<ViewStyle>;
}

const badgeColors = {
  success: {
    background: '#DCFCE7',
    text: '#166534',
  },
  warning: {
    background: '#FEF3C7',
    text: '#92400E',
  },
  error: {
    background: '#FEE2E2',
    text: '#991B1B',
  },
  info: {
    background: '#DBEAFE',
    text: '#1D4ED8',
  },
  default: {
    background: '#F3F4F6',
    text: '#374151',
  },
};

export default function AppBadge({
  label,
  variant = 'default',
  style,
}: AppBadgeProps) {
  const selectedColor = badgeColors[variant];

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: selectedColor.background,
        },
        style,
      ]}
    >
      <AppText
        size="sm"
        weight="medium"
        color={selectedColor.text}
      >
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
});