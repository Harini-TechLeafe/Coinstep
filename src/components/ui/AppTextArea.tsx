import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';

import {
  colors,
  typography,
  spacing,
  radius,
} from '../../theme';

interface AppTextAreaProps extends TextInputProps {
  label?: string;
  error?: string;
  maxLength?: number;
  showCharacterCount?: boolean;
}

export default function AppTextArea({
  label,
  error,
  maxLength,
  showCharacterCount = false,
  value,
  style,
  onFocus,
  onBlur,
  ...props
}: AppTextAreaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}

      <TextInput
        {...props}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        value={value}
        maxLength={maxLength}
        placeholderTextColor={colors.inputIcon}
        onFocus={event => {
          setFocused(true);
          onFocus?.(event);
        }}
        onBlur={event => {
          setFocused(false);
          onBlur?.(event);
        }}
        style={[
          styles.input,
          focused && styles.focused,
          !!error && styles.errorBorder,
          style,
        ]}
      />

      {showCharacterCount && maxLength !== undefined && (
        <Text style={styles.characterCount}>
          {value?.length ?? 0}/{maxLength}
        </Text>
      )}

      {!!error && (
        <Text style={styles.errorText}>{error}</Text>
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

  input: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: radius.base,
    backgroundColor: colors.white,
    padding: spacing.base,
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.base,
    color: colors.primaryText,
  },

  focused: {
    borderColor: colors.step,
    borderWidth: 2,
  },

  errorBorder: {
    borderColor: '#DC2626',
  },

  characterCount: {
    textAlign: 'right',
    color: colors.primaryText,
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
  },

  errorText: {
    color: '#DC2626',
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
  },
});