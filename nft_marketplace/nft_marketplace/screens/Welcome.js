import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import AppButton from '../components/AppButton';

export default function Welcome({ navigation }) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/bfx-leaf.jpg')}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/btfnxLogo.jfif')}
        />
        <Text style={styles.text}> Every moment is an NFT </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color="rgba(19,69,76, 0.71)"
          title="LOGIN"
          onPress={() => navigation.navigate('Login')}
        />
        <AppButton
          color="rgba(19,69,76, 0.71)"
          title="REGISTER"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    position: 'absolute',
    top: 120,
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: '100%',
    borderRadius: 55,
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
  },
  text: {
    textAlign: 'center',
    color: 'rgba(19,69,76, 0.91)',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'upperCase',
  },
});
