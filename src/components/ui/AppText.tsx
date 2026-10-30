import React from 'react';
import {
  Text,
  TextProps,
  TextStyle,
  StyleSheet,
} from 'react-native';

import { colors, typography } from '../../theme';

type FontSize = keyof typeof typography.fontSize;
type FontWeight = keyof typeof typography.fontWeight;

interface AppTextProps extends TextProps {
  size?: FontSize;
  weight?: FontWeight;
  color?: string;
  align?: TextStyle['textAlign'];
  children: React.ReactNode;
}

export default function AppText({
  size = 'base',
  weight = 'regular',
  color = colors.primaryText,
  align = 'left',
  style,
  children,
  ...props
}: AppTextProps) {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        {
          fontSize: typography.fontSize[size],
          fontWeight: typography.fontWeight[weight],
          color,
          textAlign: align,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.base,
  },
});