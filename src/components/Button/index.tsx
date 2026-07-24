import React, { useCallback, useState } from 'react';
import { Platform, Pressable, Text } from 'react-native';
import { IButton, TButtonStates, TButtonStyleProps } from './types';
import {
  buttonRootBaseStyles,
  buttonRootVariantsStyles,
  buttonTextBaseStyles,
  buttonTextStyles,
} from './variants';

export const Button: React.FC<IButton> = ({
  children,
  variant = 'filled',
  disabled = false,
  onBlur,
  onFocus,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
  leftIcon,
  rightIcon,
  text,
  isActive = false,
  accessibilityRole = 'button',
  focusable = true,
  buttonStyle,
  textStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isWebPlatform = Platform.OS === 'web';
  const styleRootVariant = buttonRootVariantsStyles[variant];
  const styleTextVariant = buttonTextStyles[variant];

  const getResolvedStyle = useCallback(
    (styleVariant: TButtonStates): TButtonStyleProps => {
      if (disabled) {
        return styleVariant.disabled;
      }

      if (isPressed || isFocused || isActive) {
        return styleVariant.focus;
      }

      if (isHovered) {
        return styleVariant.hover;
      }

      return styleVariant.default;
    },
    [disabled, isActive, isFocused, isHovered, isPressed],
  );

  return (
    <Pressable
      disabled={disabled}
      style={[
        buttonRootBaseStyles,
        getResolvedStyle(styleRootVariant),
        buttonStyle,
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      accessibilityRole={accessibilityRole}
      accessibilityState={{
        disabled: disabled!,
        selected: isPressed || isActive,
      }}
      focusable={focusable}
      {...(isWebPlatform && {
        onHoverIn: (event) => {
          setIsHovered(true);
          onHoverIn?.(event);
        },
        onHoverOut: (event) => {
          setIsHovered(false);
          onHoverOut?.(event);
        },
        onFocus: (event) => {
          setIsFocused(true);
          onFocus?.(event);
        },
        onBlur: (event) => {
          setIsFocused(false);
          onBlur?.(event);
        },
      })}
      {...props}
    >
      {leftIcon}
      {text && (
        <Text
          style={[
            buttonTextBaseStyles,
            getResolvedStyle(styleTextVariant),
            textStyle,
          ]}
        >
          {text}
        </Text>
      )}
      {leftIcon}
    </Pressable>
  );
};

Button.displayName = 'Button';
