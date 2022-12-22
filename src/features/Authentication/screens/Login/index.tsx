import { View, Text, Pressable, TextInput, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
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
          <TextInput style={styles.textInput} placeholder="Email Address" />

          {/* password */}
          <TextInput style={styles.textInput} placeholder="Password" />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
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
