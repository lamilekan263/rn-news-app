import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../../infracstruture/theme';

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('screen').height / 2.3,
    width: '100%',
  },
  newsContainer: {
    borderRadius: 20,
    marginTop: -15,
    backgroundColor: 'white',
    height: '100%',
    padding: theme.spacing.xl,
  },
  newsContentContainer: {
    marginVertical: theme.spacing.xl,
  },
  dateContainer: {
    marginTop: theme.spacing.sm,
  },
  date: {
    marginTop: theme.spacing.sm,
    fontFamily: theme.font.fontFamilyLight,
  },
  newsTitle: {
    fontFamily: theme.font.fontFamilyBold,
    fontSize: theme.spacing.xl,
  },
  newsContent: {
    fontFamily: theme.font.fontFamilyRegular,
    lineHeight: theme.spacing.xl,
  },
});

export default styles;
