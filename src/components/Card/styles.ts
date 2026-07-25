import { tokens } from '@/tokens';
import { StyleSheet } from 'react-native';

const {
  fontFamily,
  fontSize,
  spacing,
  boxShadow,
  borderRadius,
  lineHeight,
  colors,
} = tokens;

export const cardStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.neutral[0],
    paddingHorizontal: spacing['3xl'],
    paddingVertical: spacing['xl'],
    borderRadius: borderRadius.sm,
    boxShadow: `${boxShadow.sm.x}px ${boxShadow.sm.y}px ${boxShadow.sm.blur}px ${boxShadow.sm.color}`,
  },
  header: {
    display: 'flex',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fontFamily.mainTitle,
    fontSize: fontSize['7xl'],
    lineHeight: lineHeight['xl'],
    color: colors.brand.secondary[900],
  },
  paragraph: {
    fontFamily: fontFamily.body['400'],
    fontSize: fontSize['sm'],
    lineHeight: lineHeight['sm'],
    color: colors.brand.secondary[900],
  },
});
