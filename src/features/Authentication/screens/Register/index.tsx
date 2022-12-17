import { View, Text, Pressable, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
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
        {/* username */}
        <TextInput style={styles.textInput} placeholder="User Name" />
        {/* email */}
        <TextInput style={styles.textInput} placeholder="Email Address" />
        {/* password */}
        <TextInput style={styles.textInput} placeholder="Password" />
        {/* confirm password */}
        <TextInput style={styles.textInput} placeholder="Repeat Password" />
        {/* sign up button */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.askingSection}>
        <Text>Dont have an account Yet?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
