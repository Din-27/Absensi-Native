/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNav from './src/components/TabNav';



const App = () => {
  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer>
  );
};

export default App;
