import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import colors from '../constants/colors';

export default function AppText({ children, ...otherProps }) {
  return (
    <Text style={styles.text} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.white,

    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
