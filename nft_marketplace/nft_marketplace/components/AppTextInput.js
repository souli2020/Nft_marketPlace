import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../constants/colors';

export default function AppTextInput({
  placeholder,
  iconName,
  multiline,
  numberOfLines,
  iconColor,
  onChangeText,
  secureTextEntry,
  keyboardType,
  ...props
}) {
  return (
    <View syle={[styles.inputContainer]}>
      {iconName && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={iconName}
          size={24}
          color={colors.primary}
        />
      )}
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoComplete={false}
        autoCapitalize={false}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.textInput}
        keyboardType={keyboardType}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  textInput: {
    borderColor: colors.primary,
    paddingHorizontal: 10,

    borderWidth: 1,
    margin: 20,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.secondary,
    fontSize: 16,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
});
