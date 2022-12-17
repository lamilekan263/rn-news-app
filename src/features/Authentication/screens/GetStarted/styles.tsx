import { StyleSheet } from 'react-native';
import { theme } from '../../../../infracstruture/theme';
export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    fontSize: theme.spacing.xxl,
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  image: {
    position: 'absolute',
    top: 200,
    height: 272,
    width: '100%',
  },
  onboardDescription: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: theme.spacing.xxl,
    fontFamily: theme.font.fontFamilyBold,
    marginVertical: 15,
  },
  textSubHeading: {
    fontSize: theme.spacing.md,
    fontFamily: theme.font.fontFamilyLight,
    color: theme.colors.greyDarker,
  },
  getStartedDetailsContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 100,
  },
  buttonContainer: {
    marginHorizontal: theme.spacing.xl,
    marginTop: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontFamily: theme.font.fontFamilyRegular,
    fontSize: theme.spacing.xl,
  },
});
