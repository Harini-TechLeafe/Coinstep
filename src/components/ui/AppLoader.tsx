import React from 'react';

import {
  View,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  colors,
  spacing,
} from '../../theme';

import AppText from './AppText';

interface AppLoaderProps {
  loading?: boolean;
  size?: 'small' | 'large';
  color?: string;
  message?: string;
  fullScreen?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function AppLoader({
  loading = true,
  size = 'large',
  color = colors.coin,
  message,
  fullScreen = false,
  style,
}: AppLoaderProps) {
  if (!loading) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        fullScreen && styles.fullScreen,
        style,
      ]}
      accessibilityRole="progressbar"
      accessibilityLabel={message || 'Loading'}
      accessibilityState={{ busy: true }}
    >
      <ActivityIndicator
        size={size}
        color={color}
      />

      {message && (
        <AppText
          size="md"
          align="center"
          style={styles.message}
        >
          {message}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.base,
  },

  fullScreen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  message: {
    marginTop: spacing.md,
  },
});