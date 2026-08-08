import { tokens } from '@/tokens';

const { colors } = tokens;

export const loadingCircleVariants = {
  olive: {
    bg: colors.brand.primary[200],
    progress: colors.brand.primary[500],
  },
  cappuccino: {
    bg: colors.neutral[0],
    progress: colors.neutral[300],
  },
  cherry: {
    bg: colors.neutral[0],
    progress: colors.feedback.error.base,
  },
};

export type TLoadingCircleVariant = keyof typeof loadingCircleVariants;
