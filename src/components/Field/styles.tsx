import { tokens } from '@/tokens';
import { StyleSheet } from 'react-native';

const { spacing, fontFamily, fontSize, lineHeight, colors } = tokens;

export const fieldStyles = StyleSheet.create({
  root: {
    display: 'flex',
    gap: spacing.sm,
    width: '100%',
  },
  text: {
    color: colors.brand.secondary[900],
    fontSize: fontSize.base,
    lineHeight: lineHeight.base,
  },
  label: {
    fontFamily: fontFamily.body[500],
  },
  message: {
    fontFamily: fontFamily.body[400],
  },
});
