import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import PostScreen from '../screens/PostScreen';
import Welcome from '../screens/Welcome';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ListingScreen from '../screens/ListingScreen';
import AcountScreen from '../screens/AcountScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SellerProfile from '../screens/SellerProfile';

import colors from '../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="AppNav"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function RegisterNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AppNav" component={AppNavigator} />
    </Stack.Navigator>
  );
}

function DetailsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle:{ backgroundColor: 'transparent' },
        headerShown: false,
       }}>
      <Stack.Screen name="List" component={ListingScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={DetailsNavigator}
        options={{
          headerStyle:{ backgroundColor: 'transparent' },
          headerTintColor: '#ffffff',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={40}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AcountScreen}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: colors.secondary },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function GlobalNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerStyle: { backgroundColor: colors.primary },
      }}>
      <Stack.Screen
        name="Home"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={MainNavigator} />
      <Stack.Screen name="Register" component={RegisterNavigator} />
    </Stack.Navigator>
  );
}
