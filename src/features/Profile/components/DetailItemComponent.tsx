import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { theme } from '../../../infracstruture/theme';

type DetailItemComponentType = {
  header: string;
  subHeader: string;
};

export default function DetailItemComponent({
  header,
  subHeader,
}: DetailItemComponentType) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.header}>{header}:</Text>
      <Text style={styles.subHeader}>{subHeader}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.sm,
  },
  header: {
    fontSize: theme.spacing.lg,
    fontFamily: theme.font.fontFamilyBold,
  },
  subHeader: {
    fontSize: theme.spacing.lg,
    fontFamily: theme.font.fontFamilyLight,
  },
});
