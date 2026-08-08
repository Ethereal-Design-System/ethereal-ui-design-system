import { tokens } from '@/tokens';
import { StyleSheet } from 'react-native';

const { colors, spacing, fontFamily, fontSize, lineHeight } = tokens;

export const timelineStyles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    position: 'relative',
    minHeight: 60,
  },
  pointContainer: {
    width: 24,
    alignItems: 'center',
    marginRight: spacing.md,
  },
  line: {
    position: 'absolute',
    top: 24,
    bottom: -8,
    width: 2,
    backgroundColor: colors.brand.primary[400],
    left: 11,
    zIndex: 0,
  },
  point: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.brand.accent[500],
    marginTop: 6,
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: spacing.xl,
  },
  title: {
    fontFamily: fontFamily.mainTitle,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.md,
    color: colors.brand.accent[500],
  },
  description: {
    fontFamily: fontFamily.body['400'],
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    color: colors.brand.accent[500],
  },
  subDescription: {
    fontFamily: fontFamily.body['400'],
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    color: colors.brand.accent[500],
    marginTop: spacing.sm,
  },
});
