import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

import {
  colors,
  typography,
  spacing,
  radius,
} from '../../theme';

export interface DropdownOption {
  label: string;
  value: string;
}

interface AppDropdownProps {
  label?: string;
  placeholder?: string;
  value?: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

export default function AppDropdown({
  label,
  placeholder = 'Select an option',
  value,
  options,
  onChange,
  disabled = false,
  error,
}: AppDropdownProps) {
  const [visible, setVisible] = useState(false);

  const selectedOption = options.find(
    option => option.value === value,
  );

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Pressable
        style={[
          styles.dropdown,
          disabled && styles.disabled,
          !!error && styles.errorBorder,
        ]}
        onPress={() => setVisible(true)}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={label || placeholder}
        accessibilityState={{ disabled, expanded: visible }}
      >
        <Text
          style={[
            styles.selectedText,
            !selectedOption && styles.placeholder,
          ]}
        >
          {selectedOption?.label || placeholder}
        </Text>

        <Text style={styles.arrow}>⌄</Text>
      </Pressable>

      {!!error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {label || 'Select an option'}
            </Text>

            <FlatList
              data={options}
              keyExtractor={item => item.value}
              style={styles.list}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.option}
                  onPress={() => handleSelect(item.value)}
                  accessibilityRole="button"
                  accessibilityState={{
                    selected: item.value === value,
                  }}
                >
                  <Text style={styles.optionText}>
                    {item.label}
                  </Text>

                  {item.value === value && (
                    <Text style={styles.check}>✓</Text>
                  )}
                </Pressable>
              )}
            />

            <Pressable
              style={styles.cancelButton}
              onPress={() => setVisible(false)}
              accessibilityRole="button"
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

  dropdown: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: radius.base,
    paddingHorizontal: spacing.base,
  },

  selectedText: {
    flex: 1,
    color: colors.primaryText,
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily.primary,
  },

  placeholder: {
    color: colors.inputIcon,
  },

  arrow: {
    fontSize: 22,
    color: colors.step,
  },

  disabled: {
    opacity: 0.5,
  },

  errorBorder: {
    borderColor: '#DC2626',
  },

  errorText: {
    color: '#DC2626',
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    padding: spacing.xl,
  },

  modalContent: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.base,
    maxHeight: '70%',
  },

  modalTitle: {
    fontSize: typography.fontSize.lg,
    color: colors.primaryText,
    fontFamily: typography.fontFamily.primary,
    marginBottom: spacing.md,
  },

  list: {
    flexGrow: 0,
  },

  option: {
    paddingVertical: spacing.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBackground,
  },

  optionText: {
    fontSize: typography.fontSize.base,
    color: colors.primaryText,
  },

  check: {
    color: colors.step,
    fontSize: 18,
  },

  cancelButton: {
    padding: spacing.md,
    alignItems: 'center',
  },

  cancelText: {
    color: colors.secondaryButtonText,
    fontSize: typography.fontSize.base,
  },
});