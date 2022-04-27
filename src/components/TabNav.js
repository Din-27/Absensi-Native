import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import HomeNav from '../pages/HomeNav';
import Cuti from '../pages/Cuti';
import ScanQR from '../pages/ScanQR';
import AkunUser from '../pages/AkunUser';
import BroadCast from '../pages/BroadCast';
import AllChoose from './AllChoose';
import TopTab from './TopTab';
import { useNavigation } from '@react-navigation/native';
import Onboarding from '../pages/BroadCast';





const Tab = createBottomTabNavigator()

export const CustomTabBarButton = ({children, onPress}) => {


    return <TouchableOpacity 
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            }}
            onPress={onPress}>
        <View style={{
            width: 55,
            height: 55,
            borderRadius: 35,
            backgroundColor: '#0052A7'
        }}>
            {children}
        </View>
    </TouchableOpacity>
}

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Group screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: -25,
                // left: 20,
                // right: 20,
                // elevations: 0,
                backgroundColor: '#ffffff',
                // borderRadius: 15,
                height: 90
              }
            }}>
      <Tab.Screen
        name="Home" 
        component={HomeNav}
        options={{tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image 
                source={require('./../assets/icon-home.png')}
                resizeMode='contain'
                style={{
                    top: -10,
                    // width: 25,
                    // height: 25,
                    tintColor: focused ? '#0052A7' : '#636363'
                }}/>
                <Text style={{color: focused ? '#0052A7' : '#636363', top: -10, fontSize: 12}}>Home</Text>
            </View>
        )}}/>
      <Tab.Screen
        name="Cuti"
        component={Cuti}
        options={{tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image 
                source={require('./../assets/icon-event-grey.png')}
                resizeMode='contain'
                style={{
                    top: -10,
                    // width: 25,
                    // height: 25,
                    tintColor: focused ? '#0052A7' : '#636363'
                }}/>
                <Text style={{color: focused ? '#0052A7' : '#636363', top: -10, fontSize: 12}}>Cuti</Text>
            </View>
        )}}/>
      <Tab.Screen
        name="ScanQR"
        component={ScanQR}
        options={{
            tabBarIcon: ({focused}) => (
                <Image
                source={require('./../assets/icon-scan.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: '#ffff'
                }}/>
            ),
            tabBarButton: (props) => (
                <CustomTabBarButton {...props}/>
            )
        }}/>
      </Tab.Group>
      <Tab.Group screenOptions={{
            headerShown: true,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: -25,
                // left: 20,
                // right: 20,
                // elevations: 0,
                backgroundColor: '#ffffff',
                // borderRadius: 15,
                height: 90
              }
            }}>
      <Tab.Screen
        name="Broadcast"
        component={TopTab}
        options={{tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image 
                    source={require('./../assets/icon-broad.png')}
                    resizeMode='contain'
                    style={{
                        top: -10,
                        // width: 25,
                        // height: 25,
                        tintColor: focused ? '#0052A7' : '#636363'
                }}/>
                <Text style={{color: focused ? '#0052A7' : '#636363', top: -10, fontSize: 12}}>Broadcast</Text>
            </View>
        )}}/>
      </Tab.Group>
      <Tab.Group screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: -25,
                // left: 20,
                // right: 20,
                // elevations: 0,
                backgroundColor: '#ffffff',
                // borderRadius: 15,
                height: 90
              }
            }}>
        <Tab.Screen
            name="AkunUser"
            component={AkunUser}
            options={{tabBarIcon: ({focused}) =>(
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image 
                    source={require('./../assets/icon-akun.png')}
                    resizeMode='contain'
                    style={{
                        top: -10,
                        // width: 25,
                        // height: 25,
                        tintColor: focused ? '#0052A7' : '#636363'
                    }}/>
                    <Text style={{color: focused ? '#0052A7' : '#636363', top: -10, fontSize: 12}}>Akun</Text>
                </View>
            )}}/>
      </Tab.Group>
    </Tab.Navigator>
  )
}

// const Router = () => {
//     return (
//       <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
//         <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
//         {/* <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/> */}
//       </Stack.Navigator>
//     );
//   };

export default TabNav