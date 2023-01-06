import { View, Text, Pressable, TextInput } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../../infracstruture/Redux/slice/authSlice';
import { RootState } from '../../../../infracstruture/Redux/store';

const validationSchema = Yup.object({
  firstName: Yup.string().required().min(4).label('First Name'),
  lastName: Yup.string().required().min(4).label('Last Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')])
    .label('Confirm Password'),
});

const Register = () => {
  const navigation = useNavigation();

  const { loading, userToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Welcome to Nuntium 👋</Text>
        <Text style={styles.welcomeTextGreeting}>
          Hello, I guess you are new around here. You can start using the
          application after sign up.
        </Text>
      </View>
      {/* form cotainer */}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(registerUser(values));
          if (userToken) {
            resetForm();
          }
        }}>
        {({
          handleSubmit,
          handleChange,
          setFieldTouched,
          touched,
          errors,
          values,
        }) => (
          <>
            <View>
              {/* firstName */}
              <TextInput
                style={styles.textInput}
                placeholder="first Name"
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
                value={values.firstName}
              />
              {touched.firstName ? (
                <Text style={{ color: 'red' }}>{errors.firstName}</Text>
              ) : null}
              {/* lastName */}
              <TextInput
                style={styles.textInput}
                placeholder="last Name"
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
                value={values.lastName}
              />
              {touched.lastName ? (
                <Text style={{ color: 'red' }}>{errors.lastName}</Text>
              ) : null}
              {/* email */}
              <TextInput
                style={styles.textInput}
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={values.email}
              />
              {touched.email ? (
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              ) : null}
              {/* password */}
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={true}
                value={values.password}
              />
              {touched.password ? (
                <Text style={{ color: 'red' }}>{errors.password}</Text>
              ) : null}
              {/* confirm password */}
              <TextInput
                style={styles.textInput}
                placeholder="Repeat Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                secureTextEntry={true}
                value={values.confirmPassword}
              />
              {touched.confirmPassword ? (
                <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
              ) : null}
              {/* sign up button */}
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                  {loading ? 'Loading' : 'Sign Up'}
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
      <View style={styles.askingSection}>
        <Text>Dont have an account Yet?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text> Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
