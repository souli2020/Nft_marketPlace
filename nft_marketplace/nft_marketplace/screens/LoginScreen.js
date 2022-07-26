import React from 'react';
import { View, Text } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import ScreensWrapper from '../components/ScreensWrapper';

import { Formik } from 'formik';
import { schemaLogin } from '../validation/yupValidator';
import colors from '../constants/colors';

export default function LoginScreen({ navigation }) {
  return (
    <ScreensWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => alert(JSON.stringify(values))}
        validationSchema={schemaLogin}>
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              name="email"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="email"
              iconName="email"
            />
            {touched.email && (
              <Text style={{ color: 'red' }}> {errors.email}</Text>
            )}

            <AppTextInput
              name="password"
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              placeholder="password"
              iconName="lock"
              secureTextEntry
            />
            {touched.password && (
              <Text style={{ color: 'red' }}> {errors.password}</Text>
            )}
            <AppButton
              title="Login"
              onPress={() => {
                navigation.navigate('AppNav');
              }}
            />
          </>
        )}
      </Formik>
    </ScreensWrapper>
  );
}
