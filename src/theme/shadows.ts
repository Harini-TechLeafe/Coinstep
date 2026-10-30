import { Platform, ViewStyle } from 'react-native';

type ShadowStyle = Pick<
  ViewStyle,
  | 'shadowColor'
  | 'shadowOffset'
  | 'shadowOpacity'
  | 'shadowRadius'
  | 'elevation'
>;

const createShadow = (
  elevation: number,
  opacity: number,
  radius: number,
  height: number,
): ShadowStyle => ({
  ...Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height,
      },
      shadowOpacity: opacity,
      shadowRadius: radius,
    },
    android: {
      elevation,
      shadowColor: '#000000',
    },
    default: {},
  }),
});

export const shadows = {
  none: createShadow(0, 0, 0, 0),

  sm: createShadow(2, 0.08, 3, 1),

  md: createShadow(4, 0.12, 6, 3),

  lg: createShadow(8, 0.16, 10, 5),

  xl: createShadow(12, 0.20, 16, 8),
};