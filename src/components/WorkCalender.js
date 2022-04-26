import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const WorkCalender = () => {
  return (
    <>
      <View style={{
          backgroundColor: '#ffff',
          //  borderRightColor: 'grey',
          //  borderWidth: 1,
          top: -10,
          boxShadow: 1,
          padding: 20,
          width: 320,
          left:20,
          display: 'flex',
          borderRadius: 10,
          textAlign: 'center'
        }}>
          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image 
              style={{width: 40, height: 40, bottom: -5}}
              source={
                require('./../assets/icon-saldo-cal.png')
              }/>
              <View style={{flexDirection: 'column', paddingRight: 10, left: 2, borderRightWidth: 1, padding: 2, borderRightColor: 'grey'}}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>Saldo Cuti</Text>
                <Text style={{color: '#9E9E9E'}}>Cuti Tahunan</Text>
            </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image 
            style={{width: 40, height: 40, left: 11, bottom: -2}}
            source={require('./../assets/icon-libur.png')}/>
            <View style={{flexDirection: 'column', paddingRight: 10, left: 14}}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>Idul Fitri 1440 H</Text>
                <Text style={{color: '#9E9E9E'}}>Libur Selanjutnya</Text>
            </View>
              </TouchableOpacity>
          </View>
        </View>
    </>
  )
}

export default WorkCalender