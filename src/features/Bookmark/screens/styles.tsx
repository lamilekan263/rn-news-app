import { StyleSheet } from 'react-native';
import { theme } from '../../../infracstruture/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    flex: 1,
  },
  headingBox: {
    marginBottom: theme.spacing.lg,
  },
  heading: {
    fontFamily: theme.font.fontFamilyBold,
    fontSize: theme.spacing.xxl,
  },
  subHeading: {
    fontFamily: theme.font.fontFamilyLight,
    fontSize: theme.spacing.xl,
  },
});

export default styles;
