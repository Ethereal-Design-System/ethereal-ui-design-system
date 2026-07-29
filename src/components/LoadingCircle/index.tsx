import React, { useEffect, useMemo, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { IS_WEB_PLATFORM } from '@/common/constants';
import {
  ELoadingCircleAnimation,
  ELoadingCircleDefaults,
  ELoadingCircleMath,
  ELoadingCircleRotation,
} from './enums';
import { loadingCircleVariants } from './variants';
import { loadingCircleStyles } from './styles';
import { ILoadingCircle } from './types';

export const LoadingCircle: React.FC<ILoadingCircle> = ({
  variant = 'olive',
  size = ELoadingCircleDefaults.SIZE,
  strokeWidth = ELoadingCircleDefaults.STROKE_WIDTH,
  duration = ELoadingCircleDefaults.DURATION_MS,
  testID = 'loading-circle',
  style,
  accessibilityRole = 'progressbar',
  accessibilityLabel = 'Carregando...',
  ...props
}) => {
  const [animatedValue] = useState(
    () => new Animated.Value(ELoadingCircleAnimation.START_VALUE),
  );

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: ELoadingCircleAnimation.END_VALUE,
        duration,
        easing: Easing.linear,
        useNativeDriver: !IS_WEB_PLATFORM,
      }),
    );
    animation.start();

    return () => {
      animation.stop();
    };
  }, [animatedValue, duration]);

  const spin = useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: [
          ELoadingCircleAnimation.START_VALUE,
          ELoadingCircleAnimation.END_VALUE,
        ],
        outputRange: [ELoadingCircleRotation.START, ELoadingCircleRotation.END],
      }),
    [animatedValue],
  );

  const selectedVariant =
    loadingCircleVariants[variant] || loadingCircleVariants.olive;
  const radius = Math.max(
    ELoadingCircleMath.MIN_RADIUS,
    (size - strokeWidth) / ELoadingCircleMath.DIVISOR_HALF,
  );
  const circumference = ELoadingCircleMath.DIVISOR_HALF * Math.PI * radius;
  const strokeDashoffset = circumference * ELoadingCircleMath.GAP_RATIO;
  const centerPosition = size / ELoadingCircleMath.DIVISOR_HALF;

  return (
    <View
      testID={testID}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      style={[loadingCircleStyles.container, style]}
      {...props}
    >
      <Animated.View
        style={{
          width: size,
          height: size,
          transform: [{ rotate: spin }],
        }}
      >
        <Svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          testID="loading-circle-svg"
        >
          <Circle
            cx={centerPosition}
            cy={centerPosition}
            r={radius}
            stroke={selectedVariant.bg}
            strokeWidth={strokeWidth}
            fill="transparent"
            testID="loading-circle-bg"
          />
          <Circle
            cx={centerPosition}
            cy={centerPosition}
            r={radius}
            stroke={selectedVariant.progress}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            testID="loading-circle-progress"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

LoadingCircle.displayName = 'LoadingCircle';
