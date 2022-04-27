import React from "react";
import Splash from '../pages/Splash';
import MainApp from '../pages/SignUp';
import TabNav from '../components/TabNav'
import BroadCast from "../pages/BroadCast";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllChoose from "../components/AllChoose";
import { NavigationContainer } from "@react-navigation/native";




const Stack = createNativeStackNavigator();

const Router = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="MainApp" component={MainApp}/>
            <Stack.Screen name="TabNav" component={TabNav}/>
            <Stack.Screen name="Choose" component={AllChoose}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default Router