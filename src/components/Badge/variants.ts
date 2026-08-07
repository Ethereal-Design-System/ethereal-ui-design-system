import { tokens } from '@/tokens';

const { colors } = tokens;

export const badgeVariant = {
  olive: {
    default: {
      backgroundColor: colors.brand.primary[200],
      color: colors.brand.accent[800],
    },
    hovered: {
      backgroundColor: colors.brand.primary[300],
      color: colors.brand.accent[700],
    },
  },
};
