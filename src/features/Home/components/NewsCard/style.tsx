import { StyleSheet } from 'react-native';
import { theme } from '../../../../infracstruture/theme';

const styles = StyleSheet.create({
  imageBackground: {
    height: 230,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    marginBottom: theme.spacing.lg,
  },
  content: {
    justifyContent: 'space-between',
    height: '100%',
    padding: theme.spacing.xl,
    borderRadius: theme.spacing.xxl,
  },
  title: {
    color: 'white',
    fontSize: theme.spacing.lg,
    marginVertical: 10,
    fontFamily: theme.font.fontFamilyMedium,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: theme.spacing.xxl,
    fontFamily: theme.font.fontFamilyMedium,
  },
});

export default styles;
