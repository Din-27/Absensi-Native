import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeNav = () => {
  return (
    <View style={{display: 'flex'}}>
     <View>
      <Image 
          source={require('./../assets/top-bar.png')}/>
        <Text style={{
          top: -130,
          color: 'white',
          marginLeft: 15}}>
            24, February 2022
        </Text>
        <Text style={{
          color: 'white',
          fontSize : 20,
          top: -130,
          marginLeft: 15}}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            }}>Hi,
          </Text>
            Denny Rachmat Mustofa
          </Text>
        <TouchableOpacity>
          <Text style={{
            color: 'white',
            backgroundColor: '#BED600',
            fontSize: 10,
            top: -130,
            marginLeft: 15,
            width: 60,
            borderRadius: 20,
            marginTop: 3,
            padding: 2,
            textAlign: 'center'
            }}>
              Karyawan
          </Text>
        </TouchableOpacity>
     </View>
     <View>
        <TouchableOpacity>
          <Image
            style={{
              left: 310, 
              top: -170,
            }}
            source={require('./../assets/icon-bell.png')}
          />
        </TouchableOpacity>
     </View>
     <View style={{
       backgroundColor: '#BED600',
       padding: 20,
       width: 300,
       left: 30,
       top: -120,
       display: 'flex',
       borderRadius: 10,
       textAlign: 'center'
     }}>
       <View style={{flexDirection: 'row'}}>
          <Image 
          style={{width: 30, height: 30, bottom: -5}}
          source={
            require('./../assets/icon-scan.png')
          }/>
          <View style={{flexDirection: 'column', paddingRight: 10, left: 2, borderRightWidth: 2, padding: 2, borderRightColor: 'white'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Scan Qr Code</Text>
            <Text>Masuk kantor ?</Text>
        </View>
        <Image 
        style={{width: 30, height: 30, left: 11, bottom: -2}}
        source={require('./../assets/icon-clock.png')}/>
        <View style={{flexDirection: 'column', paddingRight: 10, left: 14}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Clock in</Text>
            <Text>Lapangan . WFH</Text>
        </View>
       </View>
     </View>
     <View style={{display: 'flex', top: -100, flexDirection: 'row', justifyContent: 'space-around'}}>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        <Image 
          source={require('./../assets/icon-profile.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,}}/>
          <Text style={{color: '#636363', fontSize: 12, top: 20}}>Profile</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        <Image 
          source={require('./../assets/Group.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,}}/>
          <Text style={{color: '#636363', fontSize: 12, top: 20}}>Cuti</Text>
        </View>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        <Image 
          source={require('./../assets/icon-clock-blue.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,}}/>
          <Text style={{color: '#636363', fontSize: 12, top: 20}}>Absensi</Text>
        </View>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        <Image 
          source={require('./../assets/icon-lembur.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,}}/>
          <Text style={{color: '#636363', fontSize: 12, top: 20}}>Lembur</Text>
        </View>
     </View>
     <View style={{display: 'flex', left: 5, top: -50, flexDirection: 'row', justifyContent: 'space-around'}}>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        <Image 
          source={require('./../assets/icon-event.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,}}/>
          <Text style={{color: '#636363', fontSize: 12, top: 20}}>Event</Text>
        </View>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 10, left: 7}}>
        <Image 
          source={require('./../assets/icon-klaim.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,}}/>
          <Text style={{color: '#636363', fontSize: 12, top: 20}}>Klaim</Text>
        </View>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 10, left: 1}}>
        <Image 
          source={require('./../assets/icon-cash.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,}}/>
          <Text style={{color: '#636363', fontSize: 12, top: 20}}>Cash Advance</Text>
        </View>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 10, right: 8}}>
        <Image 
          source={require('./../assets/icon-dll.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,}}/>
          <Text style={{color: '#636363', fontSize: 12, top: 20}}>Lainnya</Text>
        </View>
     </View>
     <View style={{
       backgroundColor: '#F4F4F4',
       borderWidth: 1,
       padding: 20,
       width: 320,
       left:20,
       display: 'flex',
       borderRadius: 10,
       textAlign: 'center'
     }}>
       <View style={{flexDirection: 'row'}}>
          <Image 
          style={{width: 40, height: 40, bottom: -5}}
          source={
            require('./../assets/icon-saldo-cal.png')
          }/>
          <View style={{flexDirection: 'column', paddingRight: 10, left: 2, borderRightWidth: 1, padding: 2, borderRightColor: 'grey'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>Saldo Cuti</Text>
            <Text style={{color: '#9E9E9E'}}>Cuti Tahunan</Text>
        </View>
        <Image 
        style={{width: 40, height: 40, left: 11, bottom: -2}}
        source={require('./../assets/icon-libur.png')}/>
        <View style={{flexDirection: 'column', paddingRight: 10, left: 14}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>Idul Fitri 1440 H</Text>
            <Text style={{color: '#9E9E9E'}}>Libur Selanjutnya</Text>
        </View>
       </View>
     </View>
    </View>
  )
}

export default HomeNav