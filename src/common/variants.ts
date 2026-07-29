import { tokens } from '@/tokens';
import { IS_WEB_PLATFORM } from './constants';

const { fontSize, lineHeight } = tokens;

export const formFontSizeVariants = IS_WEB_PLATFORM
  ? { fontSize: fontSize.base, lineHeight: lineHeight.base }
  : { fontSize: fontSize.sm, lineHeight: lineHeight.sm };
