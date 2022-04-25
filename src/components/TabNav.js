import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import HomeNav from '../pages/HomeNav';
import Cuti from '../pages/Cuti';
import ScanQR from '../pages/ScanQR';
import AkunUser from '../pages/AkunUser';
import BroadCast from '../pages/BroadCast';
import { View } from 'native-base';



const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({children, onPress}) => {
    return <TouchableOpacity 
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
            }}
            onPress={onPress}>
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#0052A7'
        }}>
            {children}
        </View>
    </TouchableOpacity>
}

const TabNav = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 15,
                left: 20,
                right: 20,
                elevations: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90
              }
            }}>
      <Tab.Screen
        name="Home" 
        component={HomeNav}
        options={{tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image 
                source={require('./../assets/icon-home.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0052A7' : '#636363'
                }}/>
                <Text style={{color: focused ? '#0052A7' : '#636363', fontSize: 12}}>Home</Text>
            </View>
        )}}/>
      <Tab.Screen
        name="Cuti"
        component={Cuti}
        options={{tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image 
                source={require('./../assets/icon-event-grey.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0052A7' : '#636363'
                }}/>
                <Text style={{color: focused ? '#0052A7' : '#636363', fontSize: 12}}>Cuti</Text>
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
                    width: 30,
                    height: 30,
                    tintColor: '#ffff'
                }}/>
            ),
            tabBarButton: (props) => (
                <CustomTabBarButton {...props}/>
            )
        }}/>
      <Tab.Screen
        name="BroadCast"
        component={BroadCast}
        options={{tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image 
                source={require('./../assets/icon-broad.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0052A7' : '#636363'
                }}/>
                <Text style={{color: focused ? '#0052A7' : '#636363', fontSize: 12}}>Broadcast</Text>
            </View>
        )}}/>
      <Tab.Screen
        name="AkunUser"
        component={AkunUser}
        options={{tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image 
                source={require('./../assets/icon-akun.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0052A7' : '#636363'
                }}/>
                <Text style={{color: focused ? '#0052A7' : '#636363', fontSize: 12}}>Akun</Text>
            </View>
        )}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default TabNav