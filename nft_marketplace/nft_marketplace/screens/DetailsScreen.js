import React from 'react';

import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import AppText from '../components/AppText';
import Card from '../components/Card';
import ScreensWrapper from '../components/ScreensWrapper';

import colors from '../constants/colors';

export default function DetailsScreen({ route, navigation }) {
  const { card } = route.params;
  return (
    <>
      <View style={styles.container}>
        <Card
          style={{ height: '50%' }}
          source={card.nft}
          verified={card.verified}
        />
        <View style={styles.info}>
          <AppText>Price: {card.price}</AppText>
          <AppText>Owner: {card.owner}</AppText>
          <AppText>Minted: {card.minted}</AppText>
          <AppText>Network: {card.network}</AppText>
        </View>
        <TouchableHighlight onPress={() => navigation.navigate('Seller')}>
          <Image style={styles.image} source={card.profile} />
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  info: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 50,
    left: '50%',
  },
});
