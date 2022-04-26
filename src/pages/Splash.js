import { View, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('MainApp')
        }, 3000)
    },[navigation])

  return (
    <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./../assets/icon-company.png')}/>
    </View>
  )
}

export default Splash