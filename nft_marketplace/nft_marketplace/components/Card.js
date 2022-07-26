import React from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import ScreensWrapper from '../components/ScreensWrapper';
 
import colors from '../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Card({ source, profile, verified, onPress, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={{ flex: 'grow', height:'30%', backgroundColor: colors.primary }}>
      <View style={styles.card}>
        <Image style={styles.image} source={source} /> 
        <Image style={styles.imageOwner} source={profile} />
        {verified && (
          <MaterialIcons
            style={styles.icon}
            name="verified"
            size={24}
            color="blue"
          />
        )}
      </View>
    </View> 
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderRadius: 5,

    overflow: 'hidden',
    padding: 15,
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  imageOwner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
