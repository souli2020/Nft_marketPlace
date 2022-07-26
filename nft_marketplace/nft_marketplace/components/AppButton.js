import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../constants/colors';

export default function AppButton({ title, color = colors.primary, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity> 
  );
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.primary,
    width: '80%',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'upperCase',
  },
});
