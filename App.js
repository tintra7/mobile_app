import React from 'react';
import { useFonts } from 'expo-font';
import AppNavigator from './src/components/navigation/AppNavigator';

const App = () => {
  const [fontsLoaded] = useFonts({
    "MulishBold": require("./assets/fonts/Mulish-Bold.ttf"),
    "MulishMedium": require("./assets/fonts/Mulish-Medium.ttf"),
    "MulishLight": require("./assets/fonts/Mulish-Light.ttf"),
    "Pacifico": require("./assets/fonts/Pacifico-Regular.ttf")
  });

  return <AppNavigator />;
};

export default App;
