import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

import Home from '@/components/Home';
import Login from '@/components/Login';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Courgette: require('../assets/fonts/Courgette-Regular.ttf'),
    Roboto: require('@/assets/fonts/Roboto-Medium.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
    <View style={{backgroundColor: "#fafafa"}}>
      {/* <Home/> */}
      <Login/>
    </View>
    </>
  );
}
