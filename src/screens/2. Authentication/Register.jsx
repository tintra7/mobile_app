import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

import { Colors } from '../../../assets/themes/Theme';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async () => {
    try {
      // Call your authentication API endpoint with email and password
      const requestData = {
        email: email,
        password: password,
      };
      console.log(requestData)
      // Navigate to the HomeScreen upon successful login 
      navigation.navigate('HomeScreen');
    } catch (error) {
      // Handle errors such as incorrect credentials, network issues, etc.
      console.error('Register failed:', error.message);
    }
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      
      <View style={styles.header}>
        {/* Logo, App Name & Slogan */}
        <Image source={require('../../../assets/images/Logo.png')} style={styles.logo} />

        <Text style={styles.appName}>Omurice</Text>
      </View>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitleTxt}>Welcome!</Text>
        <Text style={styles.welcomeContentTxt}>Please enter your account here</Text>
      </View>

      <View style={styles.registerContainer}>
        <View style={styles.txtInputContainer}>
          <FontAwesomeIcon icon={faEnvelope} color={Colors.INFO_SECONDARY} />
          <TextInput
            style={styles.inputText}
            placeholder="Email or phone number"
            placeholderTextColor={Colors.INFO_SECONDARY}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.txtInputContainer}>
          <FontAwesomeIcon icon={faLock} color={Colors.INFO_SECONDARY} />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor={Colors.INFO_SECONDARY}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
          <Text style={styles.loginBtnTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: "5%",
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: "8%",
  },
  appName: {
    color: Colors.PRIMARY_MAIN,
    marginTop: "-5%",
    fontFamily: "Pacifico",
    fontSize: 24,
  },
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: "15%",
  },
  welcomeTitleTxt: {
    color: Colors.INFO_MAIN,
    fontFamily: "MulishBold",
    fontSize: 22,
  },
  welcomeContentTxt: {
    color: Colors.INFO_SECONDARY,
    marginTop: "2%",
    fontFamily: "MulishMedium",
    fontSize: 14,
  },
  registerContainer: {
    flex: 3,
    width: "100%",
    // marginTop: "10%",
  },
  txtInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: "5%",
    paddingVertical: "3%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.INFO_SECONDARY,
    marginBottom: "4%",
  },
  inputText: {
    flex: 1,
    marginLeft: "4%",
    color: '#9FA5C0',
    fontFamily: "MulishMedium",
  },
  loginBtn: {
    backgroundColor: Colors.PRIMARY_MAIN,
    marginTop: "8%",
    padding: "5%",
    borderRadius: 50,
  },
  loginBtnTxt: {
    color: "white",
    textAlign: "center",
    fontFamily: "MulishBold",
    fontSize: 16,
  },
});

export default RegisterScreen;
