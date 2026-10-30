import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { colors, spacing } from '../../theme';

interface KeyboardScreenProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  keyboardVerticalOffset?: number;
}

export default function KeyboardScreen({
  children,
  style,
  keyboardVerticalOffset = 0,
}: KeyboardScreenProps) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView
        contentContainerStyle={[styles.content, style]}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          onPress={Keyboard.dismiss}
          accessible={false}
          style={styles.contentWrapper}
        >
          {children}
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flexGrow: 1,
    padding: spacing.base,
  },

  contentWrapper: {
    flexGrow: 1,
  },
});