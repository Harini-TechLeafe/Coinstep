import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  Pressable,
  StyleSheet,
} from 'react-native';

import {
  colors,
  typography,
  spacing,
  radius,
} from '../../theme';

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  isPassword?: boolean;
}

export default function AppInput({
  label,
  error,
  isPassword = false,
  style,
  ...props
}: AppInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focused,
          !!error && styles.errorBorder,
        ]}
      >
        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholderTextColor={colors.inputIcon}
          secureTextEntry={isPassword && !showPassword}
          onFocus={(event) => {
            setIsFocused(true);
            props.onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            props.onBlur?.(event);
          }}
        />

        {isPassword && (
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            accessibilityRole="button"
            accessibilityLabel={
              showPassword ? 'Hide password' : 'Show password'
            }
          >
            <Text style={styles.toggleText}>
              {showPassword ? 'Hide' : 'Show'}
            </Text>
          </Pressable>
        )}
      </View>

      {!!error && (
        <Text style={styles.errorText}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: spacing.base,
  },

  label: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.md,
    color: colors.primaryText,
    marginBottom: spacing.sm,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: radius.base,
    paddingHorizontal: spacing.base,
    backgroundColor: colors.white,
  },

  input: {
    flex: 1,
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.base,
    color: colors.primaryText,
    paddingVertical: spacing.md,
  },

  focused: {
    borderColor: colors.step,
    borderWidth: 2,
  },

  errorBorder: {
    borderColor: '#DC2626',
  },

  errorText: {
    color: '#DC2626',
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
  },

  toggleText: {
    color: colors.step,
    fontSize: typography.fontSize.sm,
    paddingLeft: spacing.sm,
  },
});