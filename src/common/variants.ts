import { tokens } from '@/tokens';
import { Platform } from 'react-native';

const { fontSize, lineHeight } = tokens;

const isWebPlatform = Platform.OS === 'web';

export const formFontSizeVariants = isWebPlatform
  ? { fontSize: fontSize.base, lineHeight: lineHeight.base }
  : { fontSize: fontSize.sm, lineHeight: lineHeight.sm };
