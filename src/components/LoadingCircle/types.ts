import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { loadingCircleVariants } from './variants';

export type TLoadingCircleVariant = keyof typeof loadingCircleVariants;

export interface ILoadingCircle extends ViewProps {
  variant?: TLoadingCircleVariant;
  size?: number;
  strokeWidth?: number;
  duration?: number;
  testID?: string;
  style?: StyleProp<ViewStyle>;
}
