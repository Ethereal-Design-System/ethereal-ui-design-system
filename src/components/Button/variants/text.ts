import { Platform, TextStyle } from 'react-native';
import { TButtonVariants } from '../types';
import { tokens } from '@/tokens';

const { fontFamily, fontSize, fontWeight, colors } = tokens;

export const buttonTextBaseStyles = {
  fontSize: Platform.OS === 'web' ? fontSize.base : fontSize.sm,
  fontWeight: fontWeight.semibold as TextStyle['fontWeight'],
  fontFamily: fontFamily.body[500],
};

export const buttonTextStyles: TButtonVariants = {
  filled: {
    default: {
      color: colors.neutral[0],
    },
    hover: {
      color: colors.neutral[0],
    },
    focus: {
      color: colors.neutral[0],
    },
    disabled: {
      color: colors.neutral[700],
    },
  },
  outlined: {
    default: {
      color: colors.brand.primary[500],
    },
    hover: {
      color: colors.neutral[0],
    },
    focus: {
      color: colors.brand.primary[500],
    },
    disabled: {
      color: colors.neutral[700],
    },
  },

  link: {
    default: {
      color: colors.brand.primary[700],
    },
    hover: {
      color: colors.brand.primary[500],
    },
    focus: {
      color: colors.brand.primary[700],
      textDecorationLine: 'underline',
    },
    disabled: {
      color: colors.neutral[700],
    },
  },
};
