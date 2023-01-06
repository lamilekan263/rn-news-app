import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../../../infracstruture/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 50,
    paddingHorizontal: theme.spacing.xl,
    position: 'relative',
  },
  welcomeText: {
    fontFamily: theme.font.fontFamilyBold,
    fontSize: theme.spacing.xxl,
    marginVertical: theme.spacing.lg,
  },
  welcomeTextGreeting: {
    fontFamily: theme.font.fontFamilyLight,
    fontSize: theme.spacing.lg,
    marginVertical: theme.spacing.md,
    color: theme.colors.greyPrimary,
  },
  textInput: {
    height: 55,
    backgroundColor: theme.colors.white,
    marginVertical: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  button: {
    marginVertical: theme.spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.sm,
  },
  buttonText: {
    color: theme.colors.white,
    fontFamily: theme.font.fontFamilyBold,
    fontSize: theme.spacing.xl,
  },
  askingSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
