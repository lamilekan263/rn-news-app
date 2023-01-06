import { View, Text, Pressable, TextInput, SafeAreaView } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../infracstruture/Redux/slice/authSlice';
import { RootState } from '../../../../infracstruture/Redux/store';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back 👋</Text>
          <Text style={styles.welcomeTextGreeting}>
            I am happy to see you again. You can continue where you left off by
            logging in
          </Text>
        </View>
        {/* form cotainer */}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await dispatch(loginUser(values));
            // resetForm();
          }}>
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
            values,
          }) => (
            <>
              {/* email */}
              <TextInput
                style={styles.textInput}
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                onBlur={() => setFieldTouched('email')}
                value={values.email}
              />
              {touched.email && (
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              )}

              {/* password */}
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                onChangeText={handleChange('password')}
                secureTextEntry={true}
                onBlur={() => setFieldTouched('password')}
                value={values.password}
              />
              {touched.password && (
                <Text style={{ color: 'red' }}>{errors.password}</Text>
              )}
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                  {loading ? 'Loading' : 'Sign In'}
                </Text>
              </Pressable>

              <View style={styles.askingSection}>
                <Text>Dont have an account Yet?</Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                  <Text>Sign in</Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;
