import designTokens from '@ethereal-design/ui-design-tokens';
import { useLoadFonts } from '@/hooks/useLoadFonts';
export const tokens = {
  ...designTokens,
  fontFamily: {
    ...designTokens.fontFamily.platforms.expo,
  },
};
