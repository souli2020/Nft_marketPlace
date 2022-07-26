import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import ScreensWrapper from '../components/ScreensWrapper';
import colors from '../constants/colors';
import Icon from '../components/Icon';

export default function ProfileComponent({
  title,
  subtitle,
  style,
  source = require('../assets/imgProfile.jfif'),
}) {
  return (
    <ScreensWrapper style={styles.wrapper}>
      <View style={[styles.profileWrapper]}>
        <Image style={[styles.image, style]} source={source} />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </ScreensWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
  },
  profileWrapper: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: colors.primary,
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  text: {
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
  },
});
