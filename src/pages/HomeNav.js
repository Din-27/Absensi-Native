import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import OnBoarding from '../components/OnBoarding'
import Events from '../components/Events'
import Jumbotron from '../components/Jumbotron'
import Choose from '../components/Choose'
import WorkCalender from '../components/WorkCalender'


const HomeNav = () => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
      <Jumbotron/>
      <Choose/>
      <WorkCalender/>
      <OnBoarding/>
      <Events/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeNav