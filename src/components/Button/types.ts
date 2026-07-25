import { PressableProps, TextStyle, ViewStyle } from 'react-native';

export type TButtonStyleProps = {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  color: string;
  outlineColor?: string;
  outlineWidth?: number;
  outlineOffset?: number;
  textDecorationLine?:
    | 'underline'
    | 'none'
    | 'line-through'
    | 'underline line-through'
    | undefined;
  opacity?: number;
  boxShadow?: string;
  cursor?: any;
};

export type TButtonStates = {
  default: TButtonStyleProps;
  hover: TButtonStyleProps;
  focus: TButtonStyleProps;
  disabled: TButtonStyleProps;
};

export type TButtonVariants = {
  filled: TButtonStates;
  outlined: TButtonStates;
  link: TButtonStates;
};
export interface IButton extends PressableProps {
  variant?: 'filled' | 'outlined' | 'link';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text?: string;
  isActive?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}
