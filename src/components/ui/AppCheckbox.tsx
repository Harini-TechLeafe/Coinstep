import React from 'react';

import {
  Pressable,
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
import AppIcon from './AppIcon';

interface AppCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: string;
  style?: StyleProp<ViewStyle>;
}

export default function AppCheckbox({
  label,
  checked,
  onChange,
  disabled = false,
  error,
  style,
}: AppCheckboxProps) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={() => onChange(!checked)}
        disabled={disabled}
        accessibilityRole="checkbox"
        accessibilityLabel={label}
        accessibilityState={{
          checked,
          disabled,
        }}
        style={[
          styles.row,
          disabled && styles.disabled,
        ]}
      >
        <View
          style={[
            styles.checkbox,
            checked && styles.checked,
            !!error && styles.errorBorder,
          ]}
        >
          {checked && (
            <AppIcon
              name="check"
              size={16}
              color={colors.white}
              strokeWidth={3}
            />
          )}
        </View>

        <View style={styles.labelContainer}>
          <AppText size="md">
            {label}
          </AppText>
        </View>
      </Pressable>

      {!!error && (
        <AppText
          size="sm"
          color="#DC2626"
          style={styles.errorText}
        >
          {error}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: spacing.base,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.inputBorder,
    borderRadius: radius.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checked: {
    backgroundColor: colors.step,
    borderColor: colors.step,
  },

  labelContainer: {
    flex: 1,
    marginLeft: spacing.md,
  },

  disabled: {
    opacity: 0.5,
  },

  errorBorder: {
    borderColor: '#DC2626',
  },

  errorText: {
    marginTop: spacing.xs,
  },
});