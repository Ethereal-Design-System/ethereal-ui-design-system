import { IS_WEB_PLATFORM } from '@/common/constants';
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
      borderColor: colors.neutral[IS_WEB_PLATFORM ? 300 : 400],
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
    borderColor: colors.neutral[200],
  },
};
