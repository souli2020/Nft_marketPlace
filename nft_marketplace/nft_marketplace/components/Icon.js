import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ScreensWrapper from '../components/ScreensWrapper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../constants/colors';

export default function Icon({ iconName, text }) {
  return (
    <View style={styles.iconWrapper}>
      <MaterialCommunityIcons
        name={iconName}
        size={40}
        color={colors.primary}
      />
      <Text style={styles.text}> {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    flexDirection: 'row',
    height: 70,
    margin: 10,
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 15,
  },
  text: {
    fontSize: 25,
    color: colors.primary,
    marginLeft: 20,
  },
});
