import { View, Text, Pressable, TextInput, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../infracstruture/Redux/slice/authSlice';
import { RootState } from '../../../../infracstruture/Redux/store';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleLoginSubmit = () => {
    dispatch(
      loginUser({
        email,
        password,
      }),
    );
  };
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
        <View>
          {/* email */}
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            value={email}
            onChangeText={e => setEmail(e)}
          />

          {/* password */}
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={handleLoginSubmit}>
            <Text style={styles.buttonText}>
              {loading ? 'Loading' : 'Sign In'}
            </Text>
          </Pressable>
        </View>
        <View style={styles.askingSection}>
          <Text>Dont have an account Yet?</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
