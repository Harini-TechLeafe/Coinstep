import React from 'react';

import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  colors,
  spacing,
} from '../../theme';

interface AppDividerProps {
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  thickness?: number;
  spacingSize?: keyof typeof spacing;
  style?: StyleProp<ViewStyle>;
}

export default function AppDivider({
  orientation = 'horizontal',
  color = colors.inputBorder,
  thickness = 1,
  spacingSize = 'md',
  style,
}: AppDividerProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <View
      accessibilityRole="none"
      style={[
        styles.divider,
        isHorizontal
          ? {
              width: '100%',
              height: thickness,
              marginVertical: spacing[spacingSize],
            }
          : {
              width: thickness,
              alignSelf: 'stretch',
              marginHorizontal: spacing[spacingSize],
            },
        { backgroundColor: color },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    flexShrink: 0,
  },
});