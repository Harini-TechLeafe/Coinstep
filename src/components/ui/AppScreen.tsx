import React from 'react';

import {
  View,
  ScrollView,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';

import {
  colors,
  spacing,
} from '../../theme';

interface AppScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
  padded?: boolean;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  edges?: Edge[];
}

export default function AppScreen({
  children,
  scrollable = false,
  padded = true,
  backgroundColor = colors.background,
  style,
  contentStyle,
  edges = ['top', 'bottom'],
}: AppScreenProps) {
  const contentPadding = padded
    ? { padding: spacing.base }
    : undefined;

  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.container,
        { backgroundColor },
        style,
      ]}
    >
      {scrollable ? (
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            contentPadding,
            contentStyle,
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            styles.content,
            contentPadding,
            contentStyle,
          ]}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },
});