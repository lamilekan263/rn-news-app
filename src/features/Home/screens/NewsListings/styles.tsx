import { StyleSheet } from 'react-native';
import { theme } from '../../../../infracstruture/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.spacing.xl,
  },
  heading: {
    fontSize: theme.spacing.xxl,
    fontFamily: theme.font.fontFamilyBold,
  },
  subHeading: {
    fontSize: theme.spacing.xxl,
    fontFamily: theme.font.fontFamilyLight,
    paddingTop: theme.spacing.md,
  },
});
