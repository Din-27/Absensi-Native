import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BroadCast from '../pages/BroadCast';


const Event = () => {
  return (
    <View>
      <Text>Event</Text>
    </View>
  )
}

const Chat = () => {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  )
}

function MyTabs() {

  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#BED600',
        lableStyle: {fontSize: 12},
        style: {backgroundColor: 'white'}
      }}
      >
      <Tab.Screen 
      name="Onboarding" 
      component={BroadCast} 
      options={{tabBarLabel: 'Onboarding'}}
      />
      <Tab.Screen 
      name="Event" 
      component={Event} 
      options={{tabBarLabel: 'Event'}}
      />
      <Tab.Screen 
      name="Chat" 
      component={Chat} 
      options={{tabBarLabel: 'Chat'}}
      />
    </Tab.Navigator>
  );
}



export default function TopTab(){
    return <MyTabs/>
}