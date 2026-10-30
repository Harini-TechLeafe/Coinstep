
import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  colors,
  radius,
  typography,
} from '../../theme';

import AppIcon from './AppIcon';

interface AppAvatarProps {
  name?: string;
  image?: ImageSourcePropType;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  showWalletIcon?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function AppAvatar({
  name = '',
  image,
  size = 48,
  backgroundColor = colors.lightBackground,
  textColor = colors.primaryText,
  showWalletIcon = false,
  style,
}: AppAvatarProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word.charAt(0).toUpperCase())
    .join('');

  const fontSize = size * 0.35;

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: radius.round,
          backgroundColor,
        },
        style,
      ]}
    >
      {image ? (
        <Image
          source={image}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
          }}
          resizeMode="cover"
        />
      ) : showWalletIcon ? (
        <AppIcon
          name="wallet"
          size={size * 0.5}
          color={textColor}
        />
      ) : initials ? (
        <Text
          style={[
            styles.initials,
            {
              fontSize,
              color: textColor,
            },
          ]}
        >
          {initials}
        </Text>
      ) : (
        <AppIcon
          name="wallet"
          size={size * 0.5}
          color={textColor}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  initials: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
});
