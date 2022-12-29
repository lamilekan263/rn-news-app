import { StyleSheet } from 'react-native';
import { theme } from '../../infracstruture/theme';

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
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 10,
  },
  nameField: {
    fontFamily: theme.font.fontFamilyBold,
    fontSize: theme.spacing.xxl,
  },
  emailField: {
    fontFamily: theme.font.fontFamilyLight,
    fontSize: theme.spacing.xl,
  },
  logoutBtn: {
    marginTop: theme.spacing.lg,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: theme.spacing.lg,
  },
  logoutBtnText: {
    fontFamily: theme.font.fontFamilyMedium,
    fontSize: theme.spacing.lg,
  },
  versionInfoContainer: {
    marginTop: theme.spacing.lg,
    backgroundColor: theme.colors.white,
    borderRadius: 5,

    padding: theme.spacing.lg,
  },

  infoHeader: {
    textAlign: 'center',
    fontSize: theme.spacing.xxl,
    fontFamily: theme.font.fontFamilyBold,
  },
});

export default styles;
