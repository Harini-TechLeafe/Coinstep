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

import AppText from './AppText';
import AppIconButton from './AppIconButton';
import type { AppIconName } from './AppIcon';

interface AppHeaderProps {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
  rightIcon?: AppIconName;
  onRightPress?: () => void;
  rightAccessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

export default function AppHeader({
  title,
  showBack = true,
  onBackPress,
  rightIcon,
  onRightPress,
  rightAccessibilityLabel,
  style,
}: AppHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.side}>
        {showBack && (
          <AppIconButton
            icon="back"
            size={40}
            iconSize={22}
            accessibilityLabel="Go back"
            onPress={() => onBackPress?.()}
            disabled={!onBackPress}
          />
        )}
      </View>

      <View style={styles.titleContainer}>
        <AppText
          size="lg"
          weight="semibold"
          align="center"
          numberOfLines={1}
        >
          {title}
        </AppText>
      </View>

      <View style={[styles.side, styles.rightSide]}>
        {rightIcon && onRightPress && (
          <AppIconButton
            icon={rightIcon}
            size={40}
            iconSize={22}
            accessibilityLabel={
              rightAccessibilityLabel || 'Header action'
            }
            onPress={onRightPress}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: spacing.base,
  },

  side: {
    width: 48,
    justifyContent: 'center',
  },

  rightSide: {
    alignItems: 'flex-end',
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
  },
});