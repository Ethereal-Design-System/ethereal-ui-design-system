import { formFontSizeVariants } from '@/common/variants';
import { tokens } from '@/tokens';
import { StyleSheet, TextStyle } from 'react-native';

const { fontFamily, spacing, borderRadius, colors } = tokens;

export const inputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    ...formFontSizeVariants,
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
    fontFamily: fontFamily.body[400],
    backgroundColor: colors.neutral[0],
    color: colors.brand.secondary[900],
  } as TextStyle,
});
