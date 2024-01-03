import React from 'react';
import { StatusBar, SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import { Colors } from '../../../assets/themes/Theme';

const PasswordRecoveryScreen = ({ navigation }) => {
  navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      
      <View style={styles.header}>
        {/* Logo, App Name & Slogan */}
        <Image source={require('../../../assets/images/Logo.png')} style={styles.logo} />

        <Text style={styles.appName}>Omurice</Text>
      </View>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitleTxt}>Password Recovery</Text>
        <Text style={styles.welcomeContentTxt}>Enter your email to recover your password</Text>
      </View>

      <View style={styles.recoveryContainer}>
        <View style={styles.txtInputContainer}>
          <FontAwesomeIcon icon={faEnvelope} color={Colors.INFO_SECONDARY} />
          <TextInput
            style={styles.inputText}
            placeholder="Email or phone number"
            placeholderTextColor={Colors.INFO_SECONDARY}
          />
        </View>
        
        <TouchableOpacity onPress={() => {navigation.navigate("PasswordVerificationScreen")}} style={styles.submitBtn}>
          <Text style={styles.submitBtnTxt}>Submit</Text>
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
  recoveryContainer: {
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
  submitBtn: {
    backgroundColor: Colors.PRIMARY_MAIN,
    marginTop: "5%",
    padding: "5%",
    borderRadius: 50,
  },
  submitBtnTxt: {
    color: "white",
    textAlign: "center",
    fontFamily: "MulishBold",
    fontSize: 16,
  },
});

export default PasswordRecoveryScreen;
