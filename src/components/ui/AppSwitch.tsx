
import React from 'react';

import {
  View,
  Switch,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  colors,
  spacing,
} from '../../theme';

import AppText from './AppText';

interface AppSwitchProps {
  label: string;
  description?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function AppSwitch({
  label,
  description,
  value,
  onValueChange,
  disabled = false,
  style,
}: AppSwitchProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <AppText size="base" weight="medium">
          {label}
        </AppText>

        {description && (
          <AppText
            size="sm"
            style={styles.description}
          >
            {description}
          </AppText>
        )}
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        accessibilityRole="switch"
        accessibilityLabel={label}
        accessibilityState={{
          checked: value,
          disabled,
        }}
        trackColor={{
          false: colors.inputBorder,
          true: colors.coin,
        }}
        thumbColor={colors.white}
        ios_backgroundColor={colors.inputBorder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },

  textContainer: {
    flex: 1,
    marginRight: spacing.base,
  },

  description: {
    marginTop: spacing.xs,
  },
});
