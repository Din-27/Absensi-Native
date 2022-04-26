import React from "react";
import Splash from '../pages/Splash';
import MainApp from '../pages/SignUp';
import TabNav from '../components/TabNav'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="MainApp" component={MainApp}/>
        <Stack.Screen name="TabNav" component={TabNav}/>
      </Stack.Navigator>
    );
  };

export default Router