import { tokens } from '@/tokens';

const { colors } = tokens;

export const inputVariants = {
  unfocused: {
    default: {
      borderColor: colors.neutral[900],
    },
    error: {
      borderColor: colors.feedback.error.base,
    },
  },
  focused: {
    default: {
      outline: `${'solid'} 2px ${colors.neutral[300]}`,
      borderColor: colors.neutral[300],
    },
    error: {
      outline: `${'solid'} 3px ${tokens.colors.feedback.error.medium}`,
      borderColor: colors.feedback.error.base,
    },
  },
  disabled: {
    cursor: 'not-allowed',
    outline: 'none',
    backgroundColor: colors.neutral[50],
    color: colors.neutral[500],
  },
};
