import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { Colors } from '../../../assets/themes/Theme';

const PasswordVerificationScreen = ({ navigation }) => {
  navigation = useNavigation();

  const expiresTimeTxt = "03:12";

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      
      <View style={styles.header}>
        {/* Logo, App Name & Slogan */}
        <Image source={require('../../../assets/images/Logo.png')} style={styles.logo} />

        <Text style={styles.appName}>Omurice</Text>
      </View>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitleTxt}>Check your mail</Text>
        <Text style={styles.welcomeContentTxt}>Enter the code sent to your mail</Text>
      </View>

      <View style={styles.recoveryContainer}>
        <View style={styles.verifyCodeContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={4}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor/> : null)}
              </Text>
            )}
          />
        </View>
        
        <View style={styles.expiresContainer}>
          <Text style={styles.expiresTxt}>code expires in: </Text>
          <Text style={styles.expiresTime}>{expiresTimeTxt}</Text>
        </View>

        <TouchableOpacity onPress={() => {navigation.navigate("NewPasswordScreen")}} style={styles.verifyBtn}>
          <Text style={styles.verifyBtnTxt}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.sendAgainBtn}>
          <Text style={styles.sendAgainBtnTxt}>Send again</Text>
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
  verifyCodeContainer: {
    alignItems: "center",
  },
  expiresContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "5%",
  },
  cell: {
    marginHorizontal: "4%",
    marginBottom: "4%",
    width: 60,
    height: 60,
    lineHeight: 40,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.INFO_SECONDARY,
    color: Colors.INFO_MAIN,
    textAlign: 'center',
    textAlignVertical: "center",
  },
  focusCell: {
    borderColor: Colors.SUCCESS_MAIN,
  },
  expiresTxt: {
    color: Colors.INFO_MAIN,
    fontFamily: "MulishMedium",
  },
  expiresTime: {
    color: Colors.PRIMARY_MAIN,
    fontFamily: "MulishBold",
  },
  verifyBtn: {
    backgroundColor: Colors.PRIMARY_MAIN,
    marginTop: "5%",
    padding: "5%",
    borderRadius: 50,
  },
  verifyBtnTxt: {
    color: "white",
    textAlign: "center",
    fontFamily: "MulishBold",
    fontSize: 16,
  },
  sendAgainBtn: {
    marginTop: "5%",
    padding: "5%",
    borderRadius: 50,
    borderColor: Colors.GRAY_BORDER,
    borderWidth: 1,
  },
  sendAgainBtnTxt: {
    color: Colors.PRIMARY_MAIN,
    textAlign: "center",
    fontFamily: "MulishBold",
    fontSize: 16,
  },
});

export default PasswordVerificationScreen;
