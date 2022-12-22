import { StyleSheet } from 'react-native';
import { theme } from '../../../../infracstruture/theme';

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: theme.spacing.xl,
    backgroundColor: theme.colors.greyLighter,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.spacing.sm,
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.md,
  },
  input: {
    flex: 1,
    width: '100%',
  },
});

export default styles;