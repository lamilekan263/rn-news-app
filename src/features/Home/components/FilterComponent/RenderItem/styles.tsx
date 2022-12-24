import { StyleSheet } from 'react-native';
import { theme } from '../../../../../infracstruture/theme';

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: theme.spacing.sm,
    marginRight: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontFamily: theme.font.fontFamilyLight,
    textTransform: 'capitalize',
  },
});

export default styles;
