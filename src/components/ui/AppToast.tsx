
import React, { useEffect, useRef } from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';

import {
  colors,
  spacing,
  radius,
} from '../../theme';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface AppToastProps {
  visible: boolean;
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
  onHide: () => void;
}

const toastColors = {
  success: '#16A34A',
  error: '#DC2626',
  warning: '#D97706',
  info: '#038EE3',
};

export default function AppToast({
  visible,
  type = 'info',
  title,
  message,
  duration = 3000,
  onHide,
}: AppToastProps) {
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (!visible) {
      translateY.setValue(-100);
      return;
    }

    Animated.timing(translateY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      onHide();
    }, duration);

    return () => clearTimeout(timer);
  }, [visible, duration, onHide, translateY]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderLeftColor: toastColors[type],
          transform: [{ translateY }],
        },
      ]}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
    >
      <View style={styles.content}>
        {title && (
          <Text
            style={[
              styles.title,
              { color: toastColors[type] },
            ]}
          >
            {title}
          </Text>
        )}

        <Text style={styles.message}>
          {message}
        </Text>
      </View>

      <Pressable
        onPress={onHide}
        accessibilityRole="button"
        accessibilityLabel="Dismiss notification"
        hitSlop={10}
        style={styles.closeButton}
      >
        <Text style={styles.closeText}>×</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: spacing.base,
    left: spacing.base,
    right: spacing.base,
    zIndex: 999,
    elevation: 10,

    backgroundColor: colors.white,
    borderLeftWidth: 4,
    borderRadius: radius.base,

    flexDirection: 'row',
    alignItems: 'center',

    padding: spacing.base,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  message: {
    fontSize: 14,
    color: colors.primaryText,
  },

  closeButton: {
    paddingLeft: spacing.md,
    justifyContent: 'center',
  },

  closeText: {
    fontSize: 24,
    color: colors.primaryText,
  },
});
