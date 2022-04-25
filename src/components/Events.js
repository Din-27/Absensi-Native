import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const Events = () => {
  return (
    <SafeAreaView style={{flex : 1, top: -15}}>
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'left', padding: 12}}>
        Event
      </Text>
      <TouchableOpacity>
        <Text style={{left: 215, color: '#0052A7', fontSize: 12, fontWeight: 'bold', padding: 12}}>
          Lihat Semua
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity>
    <View style={{backgroundColor: '#E6EEF6', marginLeft: 5, borderRadius: 10, padding: 14, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', right: 3}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Quranization</Text>
        <View>
            <Image
                source={require('./../assets/icon-timer.png')}
            />
            <Text style={{color: '#A3A3A3', left: 3, fontSize: 10, top: 4}}>30 Hari lagi</Text>
        </View>
      </View>
      <Text style={{color: 'black', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaadipiscing elit, sed do eiusmod...</Text>
    </View>
    </TouchableOpacity>
  </SafeAreaView>
  )
}

export default Events