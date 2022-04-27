import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const AllChoose = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1, top: 20}}>
      <TouchableOpacity onPress={()=>navigation.navigate('TabNav')}>
        <View style={{margin: 20}}>
          <View style={{borderTopWidth: 5, borderTopColor: '#C4C4C4', width: 30, left: 140, borderRadius: 10}}/>
        </View>
      </TouchableOpacity>
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image 
              source={require('./../assets/icon-profile.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,}}/>
              <Text style={{color: '#636363', fontSize: 12, top: 20}}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image 
            source={require('./../assets/Group.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Cuti</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity> 
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image 
            source={require('./../assets/icon-clock-blue.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Absensi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image 
            source={require('./../assets/icon-lembur.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Lembur</Text>
          </View>
        </TouchableOpacity>
      </View>
    <View style={{display: 'flex', top: 40, flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10, left: 6}}>
            <Image 
              source={require('./../assets/icon-event.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,}}/>
              <Text style={{color: '#636363', fontSize: 12, top: 20}}>Event</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10, left: 17}}>
          <Image 
            source={require('./../assets/icon-klaim.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Klaim</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity> 
        <View style={{alignItems: 'center', justifyContent: 'center', top: 1, left: 20}}>
          <Image 
            source={require('./../assets/icon-reimburse.png')}
            resizeMode='contain'
            style={{
              width: 35,
              height: 35,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Reimburse</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image 
            source={require('./../assets/icon-cash.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Cash Advance</Text>
          </View>
        </TouchableOpacity>
      </View>
    <View style={{display: 'flex', flexDirection: 'row', top: 80, justifyContent: 'space-around'}}>
        <TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image 
              source={require('./../assets/icon-gaji-blue.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,}}/>
              <Text style={{color: '#636363', fontSize: 12, top: 20}}>Gaji</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image 
            source={require('./../assets/icon-berkas.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Berkas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity> 
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image 
            source={require('./../assets/icon-inventaris.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Inventaris</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image 
            source={require('./../assets/icon-directory.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Directori</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{display: 'flex', left: 5, top: 120, flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={{left: -50}}>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image 
            source={require('./../assets/icon-aktivitas.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Aktivitas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{left: -155}}>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10, left: 7}}>
          <Image 
            source={require('./../assets/icon-setting.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Pengaturan</Text>
          </View>
            </TouchableOpacity>
      </View>
  </SafeAreaView>
  )
}

export default AllChoose