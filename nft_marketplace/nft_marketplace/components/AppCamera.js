import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import colors from '../constants/colors';

export default function ImageInput({ imageUri, onChangeImage }) {
  const getPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) Alert.alert('u need to give the permision');
  };

  useEffect(() => {
    getPermission();
  }, []);
  function handlePress() {
    if (!imageUri) selectImage();
    else
      Alert.alert('Alert ', 'Do you really want to delete the image?', [
        {
          text: 'No',
        },
        { text: 'Yes', onPress: () => onChangeImage(imageUri) },
      ]);
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
      <View style={[styles.container, {marginLeft:!imageUri? 100:10}]}>
        {!imageUri && (
          <MaterialIcons style={styles.cameraIcon} name="camera" color={colors.white} size={40} />
        )}
        {imageUri && (
          <Image resizeMode="contain" style={styles.image} source={imageUri} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 100,
    width: 100,
    borderRadius: 15,
    overflow: 'hidden',
    //  marginLeft: Platform.OS ==="ios"? 20:20
  },
  image: {
    height: '100%',
    width: '100%',
  } 
});


