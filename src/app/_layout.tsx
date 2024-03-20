import * as SplashScreen from 'expo-splash-screen';
import { Slot } from "expo-router"

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar"

import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins"

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  })

  if (!fontsLoaded) {
    return
  }

  SplashScreen.hideAsync()

  return (
    <>
      <StatusBar style="dark" />
      <Slot />
    </>
  )
}
