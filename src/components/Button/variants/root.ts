import { tokens } from '@/tokens';
import { TButtonVariants } from '../types';

const { colors, borderRadius, spacing, boxShadow } = tokens;

export const buttonRootBaseStyles = {
  borderRadius: borderRadius.sm,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.sm,
  transitionProperty: 'box-shadow, border-color, background-color',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-in-out',
};

export const buttonRootVariantsStyles: TButtonVariants = {
  filled: {
    default: {
      backgroundColor: colors.brand.primary[700],
      borderColor: colors.brand.primary[700],
      color: colors.neutral[0],
    },
    hover: {
      backgroundColor: colors.brand.primary[800],
      borderColor: colors.brand.primary[800],
      color: colors.neutral[0],
    },
    focus: {
      backgroundColor: colors.brand.primary[700],
      borderColor: colors.brand.primary[400],
      borderWidth: 2,
      color: colors.neutral[0],
      boxShadow: `${boxShadow.ring} ${colors.brand.primary[400]}`,
    },
    disabled: {
      backgroundColor: colors.neutral[50],
      color: colors.neutral[700],
      cursor: 'not-allowed',
    },
  },
  outlined: {
    default: {
      backgroundColor: colors.neutral[0],
      borderColor: colors.brand.primary[500],
      borderWidth: 2,
      color: colors.brand.primary[500],
    },
    hover: {
      backgroundColor: colors.brand.primary[800],
      borderColor: colors.brand.primary[800],
      borderWidth: 2,
      color: colors.neutral[0],
    },
    focus: {
      borderColor: colors.brand.primary[500],
      borderWidth: 2,

      backgroundColor: colors.neutral[0],
      color: colors.brand.primary[500],
      boxShadow: `${boxShadow.ring} ${colors.brand.primary[400]}`,
    },
    disabled: {
      backgroundColor: colors.neutral[50],
      borderColor: colors.neutral[700],
      borderWidth: 2,
      color: colors.neutral[700],
      cursor: 'not-allowed',
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
      cursor: 'not-allowed',
    },
  },
};
