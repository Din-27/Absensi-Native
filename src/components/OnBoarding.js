import { TouchableOpacity, Text, View, SafeAreaView, FlatList } from 'react-native'
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
    <View style={{backgroundColor: '#E6EEF6', marginLeft: 5, borderRadius: 10, padding: 8, width: 250, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', right: 3}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{title}</Text>
        <Text style={{color: '#A3A3A3', left: 3, fontSize: 10, top: 4}}>{date}</Text>
      </View>
      <Text style={{color: 'black', textAlign: 'left'}}>{body}</Text>
    </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={{flex : 1, top: -15}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'left', padding: 12}}>
          Onboarding
        </Text>
        <TouchableOpacity>
          <Text style={{left: 180, color: '#0052A7', fontSize: 12, fontWeight: 'bold', padding: 12}}>
            Lihat Semua
          </Text>
        </TouchableOpacity>
      </View>
        <FlatList
          data={ANIMAL_NAMES}
          renderItem={({item})=> <ItemRender body={item.body} title={item.title} date={item.date}/>}
          keyExtractor={item => item.id}
          horizontal={true}
        />
    </SafeAreaView>
  )
}

export default OnBoarding