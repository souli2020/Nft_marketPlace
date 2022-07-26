import React from 'react';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import colors from '../constants/colors';

export default function ScreensWrapper({ children, style }) {
  return (
    <SafeAreaView style={[styles.wrapper, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    margin: Platform.OS === 'web' ? 0 : 5,
    backgroundColor: colors.secondary,
  },
});
