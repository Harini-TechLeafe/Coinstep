import React from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
} from 'react-native';

import {
  colors,
  spacing,
  radius,
  shadows,
} from '../../theme';

import AppText from './AppText';
import AppButton from './AppButton';

interface AppModalProps {
  visible: boolean;
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
  loading?: boolean;
  children?: React.ReactNode;
}

export default function AppModal({
  visible,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onClose,
  loading = false,
  children,
}: AppModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={onClose}
          accessibilityLabel="Close dialog"
        />

        <View style={styles.modalContainer}>
          <AppText
            size="xl"
            weight="bold"
            align="center"
          >
            {title}
          </AppText>

          {message && (
            <AppText
              size="base"
              align="center"
              style={styles.message}
            >
              {message}
            </AppText>
          )}

          {children}

          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <AppButton
                title={cancelText}
                variant="secondary"
                onPress={onClose}
                disabled={loading}
              />
            </View>

            <View style={styles.buttonWrapper}>
              <AppButton
                title={confirmText}
                onPress={onConfirm}
                loading={loading}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: spacing.xl,
  },

  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    ...shadows.lg,
  },

  message: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.lg,
  },

  buttonWrapper: {
    flex: 1,
  },
});