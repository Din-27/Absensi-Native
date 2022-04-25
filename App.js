/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import TabNav from './src/components/TabNav';


const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNav/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
