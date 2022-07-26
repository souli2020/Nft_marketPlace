import React from 'react';

import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import ScreensWrapper from '../components/ScreensWrapper';

import Constants from 'expo-constants';
import data from '../data/data.js';
import colors from '../constants/colors'; 
 

export default function ListingScreen({ navigation }) {
  
  let cards = data.map((card) => (
    <Card
      onPress={() => navigation.navigate('Details', { card })}
      key={card.id.toString()}
      source={card.nft}
      verified={card.verified}
      profile={card.profile}
    />
  ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        {cards}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.primary,
  },
});
