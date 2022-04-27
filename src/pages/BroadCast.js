import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const OnBoarding = ({item}) => {

  const d = new Date();
  let nD = d.toString().split(" ").slice(0, 5).join(" ")
   const ANIMAL_NAMES = [
    {
      id: 1,
      title: 'HR - General Meeting',
      date: nD,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusit amet, consectetur adipiscing elit....',
    },
    {
      id: 2,
      title: 'HR - General Meeting',
      date: nD,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusit amet, consectetur adipiscing elit....',
    },
    {
      id: 3,
      title: 'HR - General Meeting',
      date: nD,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusit amet, consectetur adipiscing elit....',
    },
    {
      id: 4,
      title: 'HR - General Meeting',
      date: nD,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusit amet, consectetur adipiscing elit....',
    },
    {
      id: 5,
      title: 'HR - General Meeting',
      date: nD,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusit amet, consectetur adipiscing elit....',
    },
    {
      id: 6,
      title: 'HR - General Meeting',
      date: nD,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusit amet, consectetur adipiscing elit....',
    },
    {
      id: 7,
      title: 'HR - General Meeting',
      date: nD,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusit amet, consectetur adipiscing elit....',
    }
 
  ];

const ItemRender = ({body, title, date}) => (
  <TouchableOpacity>
  <View style={{backgroundColor: '#E6EEF6', borderRadius: 10, padding: 20, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{flexDirection: 'row', right: 40}}>
      <Image style={{top: -6}} source={require('./../assets/icon-mail-notif.png')}/>
      <Text style={{color: 'black', fontWeight: 'bold'}}>{title}</Text>
      <Text style={{color: '#A3A3A3', left: 3, fontSize: 10, top: 4}}>{date}</Text>
    </View>
    <Text style={{color: 'black', textAlign: 'left'}}>{body}</Text>
  </View>
  </TouchableOpacity>
)

return (
  <SafeAreaView style={{flex : 1}}>
      <FlatList
        data={ANIMAL_NAMES}
        renderItem={({item})=> <ItemRender body={item.body} title={item.title} date={item.date}/>}
        keyExtractor={item => item.id}
        horizontal={false}
      />
  </SafeAreaView>
)
}

export default OnBoarding