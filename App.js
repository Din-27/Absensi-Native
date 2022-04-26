/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme  } from 'native-base';
import React from 'react';
// import Router from './src/components/TabNav'
import Router from './src/router/Router';




const App = () => {

  const theme = extendTheme({
    colors: {
      lime : {
        600: '#65a30d' 
      },
      singletons: {
        white: '#FFFFFF',
        black: '#000000'
      },
      warmGray : {
        400: '#a8a29e'
      },
      primary: {
        50: '#ecfeff',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      amber: {
        400: '#d97706',
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Router/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
