import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Onboarding1 from '../../screens/1. Onboardings/Onboarding1';
import Onboarding2 from '../../screens/1. Onboardings/Onboarding2';
import Onboarding3 from '../../screens/1. Onboardings/Onboarding3';
import LoginScreen from '../../screens/2. Authentication/Login';
import PasswordRecoveryScreen from '../../screens/2. Authentication/PasswordRecovery';
import PasswordVerificationScreen from '../../screens/2. Authentication/PasswordVerification';
import NewPasswordScreen from '../../screens/2. Authentication/NewPassword';
import RegisterScreen from '../../screens/2. Authentication/Register';
import HomeScreen from '../../screens/3. Home/HomeScreen';
import SearchScreen from '../../screens/4. Search/SearchScreen';
import DetailScreen from '../../screens/5. Detail/DetailScreen';
import UploadScreen1 from '../../screens/6. Upload/UploadScreen1';
import UploadScreen2 from '../../screens/6. Upload/UploadScreen2';
import CameraScreen from '../../screens/7. Camera/CameraScreen';
import ResultScreen from '../../screens/7. Camera/ResultScreen';
import NotiScreen from '../../screens/8. Notification/NotiScreen';
import ProfileScreen from '../../screens/9. Profile/ProfileScreen';
import SettingsScreen from '../../screens/9. Profile/SettingsScreen';
import AboutScreen from '../../screens/9. Profile/AboutScreen';
import UserProfileScreen from '../../screens/9. Profile/UserProfileScreen';


const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="PasswordRecoveryScreen" component={PasswordRecoveryScreen} />
        <Stack.Screen name="PasswordVerificationScreen" component={PasswordVerificationScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="UploadScreen1" component={UploadScreen1} />
        <Stack.Screen name="UploadScreen2" component={UploadScreen2} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="NotiScreen" component={NotiScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
