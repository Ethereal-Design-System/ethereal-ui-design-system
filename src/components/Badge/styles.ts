import { StyleSheet } from 'react-native';
import { tokens } from '@/tokens';

const { spacing, borderRadius, fontSize, fontFamily } = tokens;

export const badgeStyles = StyleSheet.create({
  root: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  label: {
    fontFamily: fontFamily.body['700'],
    fontSize: fontSize.base,
  },
});
