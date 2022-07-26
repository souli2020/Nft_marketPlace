import React from 'react'

import {View, Text, StyleSheet, ScrollView} from 'react-native'
import ScreensWrapper from '../components/ScreensWrapper'
import ProfileComponent from '../components/ProfileComponent'
import dataMessages  from '../data/dataMessages'
import Constants from 'expo-constants';


export default function MessageScreen(){
  let messages = dataMessages.map(msg => (
    <ProfileComponent style={styles.msg} source={msg.profile} subtitle={msg.text}/>
  ))
  return(
        <View style={styles.container}>

    <ScrollView contentContainerStyle={{ height: '100%' }}>
     {messages}
    </ScrollView>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  msg:{
    width:50,
    height:50,


  }
});