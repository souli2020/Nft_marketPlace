import React, { useContext } from 'react';
import { Context } from '../hooks/Context';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppCamerList from '../components/AppCamerList';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import ScreensWrapper from '../components/ScreensWrapper';

import { Formik } from 'formik';
import { schemaPost } from '../validation/yupValidator';
import colors from '../constants/colors';

export default function PostScreen({ navigation }) {
  const { show, logOut, logIn } = useContext(Context);
  return (
    <ScreensWrapper>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Formik
            initialValues={{
              title: '',
              price: '',
              description: '',
              images: [],
            }}
            onSubmit={(values) => alert(JSON.stringify(values))}
            validationSchema={schemaPost}>
            {({
              handleChange,
              handleSubmit,
              setFieldTouched,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <AppCamerList
                  onBlur={() => setFieldTouched('images')}
                  onAddImage={(item) =>
                    setFieldValue('images', [...values['images'], item])
                  }
                  onRemoveImage={(uri) =>
                    setFieldValue(
                      'images',
                      values['images'].filter((item) => item !== uri)
                    )
                  }
                  imageUris={values['images']}
                />
                {touched.images && (
                  <Text style={{ color: 'red' }}> {errors.images}</Text>
                )}

                <AppTextInput
                  onBlur={() => setFieldTouched('title')}
                  onChangeText={handleChange('title')}
                  name="title"
                  placeholder="title"
                />
                {touched.title && (
                  <Text style={{ color: 'red' }}> {errors.title}</Text>
                )}

                <AppTextInput
                  onBlur={() => setFieldTouched('price')}
                  onChangeText={handleChange('price')}
                  name="price"
                  placeholder="price"
                  keyboardType='numeric'
                />
                {touched.price && (
                  <Text style={{ color: 'red' }}> {errors.price}</Text>
                )}

                <AppTextInput
                  onBlur={() => setFieldTouched('description')}
                  onChangeText={handleChange('description')}
                  name="description"
                  placeholder="description"
                  multiline
                  numberOfLines={10}
                />
                {touched.description && (
                  <Text style={{ color: 'red' }}> {errors.description}</Text>
                )}

                <AppButton
                  title="post"
                  onPress={() => {
                    logOut();
                    setTimeout(() => {
                      navigation.navigate('Feed');
                      logIn();
                    }, 3000);
                  }}
                />
              </>
            )}
          </Formik>
          {show && (
            <>
              <ActivityIndicator size="large" color={colors.primary} />
              <AppText>
                We are miniting your NFT and it will be posted soon!
              </AppText>
            </>
          )}
        </View>
      </ScrollView>
    </ScreensWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
