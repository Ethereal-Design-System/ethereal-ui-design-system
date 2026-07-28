import { formFontSizeVariants } from '@/common/variants';
import { tokens } from '@/tokens';
import { Platform, StyleSheet } from 'react-native';

const { spacing, fontFamily, colors, fontSize } = tokens;

const isWebPlatform = Platform.OS === 'web';

export const fieldStyles = StyleSheet.create({
  root: {
    display: 'flex',
    gap: spacing.sm,
    width: '100%',
  },
  text: {
    color: colors.brand.secondary[900],
    ...formFontSizeVariants,
  },
  label: {
    fontFamily: fontFamily.body[500],
  },
  message: {
    fontFamily: fontFamily.body[isWebPlatform ? 400 : 500],
    fontSize: isWebPlatform ? fontSize.xs : fontSize.base,
  },
});
