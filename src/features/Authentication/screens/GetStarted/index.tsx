import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/ac5c/c9b4/818f20fac9774fe8a2a76eba01e72fcb?Expires=1672012800&Signature=jKemRph3893GomE-AXbZbjK-PXgxUzmaQdqejRAXUuGm9xXM45uvTffn-33j9lgksCOhd0SBC~yGVaEtHkjNfsTXMHL83y7NtDjrjSlIM48ST6y3WgDkx9RP4aUUTHaPbNLQYctN7AqsO7GV7GqgyoWQsZvm6zoOq90gWPpux~jTmHE8vFAKlW9dLfl2nN16-6Uacjb7~DEBoAC680QrbBYeu7vQKDrZebDHj57gKW0~MHVVX1DODHac7e2RYEOkgtGA-AaqyGZB~aPOkP1eFs~OFbTUz934pSIMlxxcg1RztYyhQQ1eTdlj9cfLghu~H-taxNTKUk8XMNreX1yA-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        }}
        style={styles.image}
      />
      <View style={styles.getStartedDetailsContainer}>
        <View style={styles.onboardDescription}>
          <Text style={styles.textHeader}>Nuntium</Text>
          <Text style={styles.textSubHeading}>
            All news in one place, be the first to know last news
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={(): void => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GetStarted;
