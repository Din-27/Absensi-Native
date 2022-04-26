import { View, Text } from 'react-native'
import React from 'react'

const AllChoose = () => {
  return (
    <>
    <View style={{display: 'flex', top: -100, flexDirection: 'row', justifyContent: 'space-around'}}>
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
      <View style={{display: 'flex', left: 5, top: -50, flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
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
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10, left: 7}}>
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
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10, left: 1}}>
          <Image 
            source={require('./../assets/icon-cash.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Cash Advance</Text>
          </View>
            </TouchableOpacity>
            <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center', top: 10, right: 8}}>
          <Image 
            source={require('./../assets/icon-dll.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,}}/>
            <Text style={{color: '#636363', fontSize: 12, top: 20}}>Lainnya</Text>
          </View>
            </TouchableOpacity>
      </View>
  </>
  )
}

export default AllChoose