
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
  radius,
} from '../../theme';

import AppText from './AppText';
import AppIcon, { AppIconName } from './AppIcon';
import AppButton from './AppButton';

interface AppEmptyStateProps {
  icon?: AppIconName;
  title: string;
  description?: string;
  buttonTitle?: string;
  onButtonPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function AppEmptyState({
  icon = 'wallet',
  title,
  description,
  buttonTitle,
  onButtonPress,
  style,
}: AppEmptyStateProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <AppIcon
          name={icon}
          size={40}
          color={colors.step}
        />
      </View>

      <AppText
        size="xl"
        weight="bold"
        align="center"
        style={styles.title}
      >
        {title}
      </AppText>

      {description && (
        <AppText
          size="md"
          align="center"
          style={styles.description}
        >
          {description}
        </AppText>
      )}

      {buttonTitle && onButtonPress && (
        <View style={styles.buttonContainer}>
          <AppButton
            title={buttonTitle}
            onPress={onButtonPress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },

  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: radius.round,
    backgroundColor: colors.lightBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },

  title: {
    marginBottom: spacing.sm,
  },

  description: {
    marginBottom: spacing.lg,
    maxWidth: 300,
  },

  buttonContainer: {
    width: '100%',
    maxWidth: 240,
    marginTop: spacing.sm,
  },
});
