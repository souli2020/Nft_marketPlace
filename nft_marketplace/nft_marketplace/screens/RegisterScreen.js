import React from 'react';
import { View, Text } from 'react-native';
import colors from '../constants/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import ScreensWrapper from '../components/ScreensWrapper';

import { Formik } from 'formik';
import { schemaRegister } from '../validation/yupValidator';

export default function RegisterScreen({ navigation }) {
  return (
    <ScreensWrapper>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={(values) => alert(JSON.stringify(values))}
        validationSchema={schemaRegister}>
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View>
            <AppTextInput
              onBlur={() => setFieldTouched('name')}
              onChangeText={handleChange('name')}
              placeholder="Name"
              iconName="account"
            />
            {touched.name && (
              <Text style={{ color: 'red' }}> {errors.name}</Text>
            )}

            <AppTextInput
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              placeholder="email"
              iconName="email"
            />
            {touched.email && (
              <Text style={{ color: 'red' }}> {errors.email}</Text>
            )}

            <AppTextInput
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              name="password"
              placeholder="password"
              iconName="lock"
              secureTextEntry
            />
            {touched.password && (
              <Text style={{ color: 'red' }}> {errors.password}</Text>
            )}

            <AppButton
              title="Register"
              onPress={() => {
                navigation.navigate('AppNav');
              }}
            />
          </View>
        )}
      </Formik>
    </ScreensWrapper>
  );
}
