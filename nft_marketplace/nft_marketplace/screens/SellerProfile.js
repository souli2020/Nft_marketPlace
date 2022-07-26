import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import ScreensWrapper from '../components/ScreensWrapper';
import colors from '../constants/colors';
import Icon from '../components/Icon';

export default function SellerProfile({ title, subtitle, source }) {
  return (
    <ScreensWrapper>
      <View style={styles.profileWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/imgProfile.jfif')}
        />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View>
        <Icon iconName="percent" text="statistics" />
        <Icon iconName="apps" text="Listings" />
         <Icon iconName="send" text="Send message" />
      </View>
    </ScreensWrapper>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    overflow: 'hidden',
    flex: 0.3,
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
