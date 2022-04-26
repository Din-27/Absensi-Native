import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Jumbotron = () => {
  return (
    <>
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
          Herdiyana Firmansyah
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
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Image 
                style={{width: 30, height: 30, bottom: -5}}
                source={
                  require('./../assets/icon-scan.png')
                }/>
                <View style={{flexDirection: 'column', paddingRight: 10, left: 2, borderRightWidth: 2, padding: 2, borderRightColor: 'white'}}>
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Scan Qr Code</Text>
                  <Text>Masuk kantor ?</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image 
              style={{width: 30, height: 30, left: 11, bottom: -2}}
              source={require('./../assets/icon-clock.png')}/>
              <View style={{flexDirection: 'column', paddingRight: 10, left: 14}}>
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Clock in</Text>
                  <Text>Lapangan . WFH</Text>
              </View>
            </TouchableOpacity>
          </View>
    </View>
    </>
  )
}

export default Jumbotron