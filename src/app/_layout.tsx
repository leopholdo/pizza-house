import * as SplashScreen from 'expo-splash-screen';
import { Slot, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { store, persistor } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { 
  lightColors, 
  createTheme, 
  darkColors, 
  ThemeProvider  
} from '@rneui/themed';

import { 
  lightColors as LColors,  
  darkColors as DColors
} from '@/theme/colors';

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

const theme = createTheme({
  lightColors: LColors,
  darkColors: DColors,  
  mode: 'light',
});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  })

  if (!fontsLoaded) {
    return;
  }
 
  SplashScreen.hideAsync();

  return (
    <>
      <StatusBar />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Slot />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
