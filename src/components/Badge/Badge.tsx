import React, { useState } from 'react';
import { View, Text, ViewProps } from 'react-native';
import { badgeStyles } from './styles';
import { badgeVariant } from './variants';

export interface BadgeProps extends ViewProps {
  label: string;
  variant?: 'olive';
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'olive',
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const variantStyle = badgeVariant[variant][isHovered ? 'hovered' : 'default'];

  return (
    <View
      testID="badge-root"
      style={[
        badgeStyles.root,
        { backgroundColor: variantStyle.backgroundColor },
        style,
      ]}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      {...props}
    >
      <Text
        testID="badge-label"
        style={[badgeStyles.label, { color: variantStyle.color }]}
      >
        {label}
      </Text>
    </View>
  );
};
