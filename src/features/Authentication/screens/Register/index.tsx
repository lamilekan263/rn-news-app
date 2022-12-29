import { View, Text, Pressable, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../../infracstruture/Redux/slice/authSlice';
import { RootState } from '../../../../infracstruture/Redux/store';

const Register = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return console.log('missing parameter');
    }
    if (password !== confirmPassword) {
      return console.log('password doesnt match');
    }

    dispatch(
      registerUser({
        firstName,
        lastName,
        email,
        password,
      }),
    );
  };

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
      <View>
        {/* firstName */}
        <TextInput
          style={styles.textInput}
          placeholder="first Name"
          onChangeText={e => setFirstName(e)}
          value={firstName}
        />
        {/* lastName */}
        <TextInput
          style={styles.textInput}
          placeholder="last Name"
          onChangeText={e => setLastName(e)}
          value={lastName}
        />
        {/* email */}
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          onChangeText={e => setEmail(e)}
          value={email}
        />
        {/* password */}
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={e => setPassword(e)}
          secureTextEntry={true}
          value={password}
        />
        {/* confirm password */}
        <TextInput
          style={styles.textInput}
          placeholder="Repeat Password"
          onChangeText={e => setConfirmPassword(e)}
          secureTextEntry={true}
          value={confirmPassword}
        />
        {/* sign up button */}
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            {loading ? 'Loading' : 'Sign Up'}
          </Text>
        </Pressable>
      </View>
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
