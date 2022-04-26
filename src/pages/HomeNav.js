import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import OnBoarding from '../components/OnBoarding'
import Events from '../components/Events'
import Jumbotron from '../components/Jumbotron'
import Choose from '../components/Choose'
import WorkCalender from '../components/WorkCalender'

const HomeNav = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Jumbotron/>
        <Choose/>
        <WorkCalender/>
          <View style={{flexDirection: 'row'}}>
            <OnBoarding/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Events/>
          </View>
      </ScrollView>
    </View>
  )
}

export default HomeNav