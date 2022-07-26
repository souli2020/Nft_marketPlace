import React, { useContext } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

import ScreensWrapper from '../components/ScreensWrapper';
import ProfileComponent from '../components/ProfileComponent';
import Icon from '../components/Icon';
import Welcome from '../screens/Welcome';

import colors from '../constants/colors';

export default function AccountScreen({ navigation }) {
  return (
    <>
      <ScreensWrapper style={[styles.profile]}>
        <ProfileComponent
          title="mimoune soulimani"
          subtitle="soulim@gmail.com"
        />
        <View style={styles.iconWrapper}>
          <Icon iconName="message" text="Messages" />
          <Icon iconName="apps" text="Listings" />
          <Icon iconName="account-settings" text="Settings" />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon iconName="logout" text="Log Out" />
          </TouchableOpacity>
        </View>
      </ScreensWrapper>
    </>
  );
}
const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.secondary,
  },
});
