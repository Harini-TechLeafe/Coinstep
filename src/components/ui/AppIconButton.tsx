import React from 'react';

import {
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  colors,
  spacing,
  radius,
} from '../../theme';

import AppIcon, { AppIconName } from './AppIcon';

interface AppIconButtonProps {
  icon: AppIconName;
  onPress: () => void;
  size?: number;
  iconSize?: number;
  iconColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  accessibilityLabel: string;
  style?: StyleProp<ViewStyle>;
}

export default function AppIconButton({
  icon,
  onPress,
  size = 48,
  iconSize = 24,
  iconColor = colors.primaryText,
  backgroundColor = colors.lightBackground,
  disabled = false,
  accessibilityLabel,
  style,
}: AppIconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      hitSlop={spacing.xs}
      style={({ pressed }) => [
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: radius.round,
          backgroundColor,
        },
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <AppIcon
        name={icon}
        size={iconSize}
        color={iconColor}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  pressed: {
    opacity: 0.7,
  },

  disabled: {
    opacity: 0.4,
  },
});