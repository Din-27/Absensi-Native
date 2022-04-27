import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from 'native-base';


const MainApp = ({navigation: {navigate}}) => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        const data = {
            email : email,
            password: password
        }
        // navigate('TabNav')
        console.log(data)
        if(data.email === ""){
            alert('email kosong')
        }else if(data.password === ""){
            alert('password kosong')
        }else{
            navigate('TabNav')
        }
    }

    const handleClick = () => {
        setShow(!show)
    };

  return (
    <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center'}}>
        <Image 
        style={{width: 150, height: 150, top: 150}}
        source={require('./../assets/icon-company.png')}/>
        <Text style={{color: '#323F4B', top: 175, left: -130, fontSize: 20}}>Email</Text>
        <View style={{top: 180, flexDirection: 'row', borderColor: '#E6EEF6', borderWidth: 0.5, width: 300, alignItems: 'center', borderRadius: 7}}>
            <Input type="email" style={styles.input} value={email} onChangeText={(value)=> setEmail(value)} InputLeftElement={<Image
            style={{left: 10}}
            source={require('./../assets/mail.png')}/>} placeholder="name@email.com" />
        </View>
        <Text style={{color: '#323F4B', top: 195, left: -110, fontSize: 20}}>Password</Text>
        <View style={{top: 200, flexDirection: 'row', borderColor: '#E6EEF6', borderWidth: 0.5, width: 300, alignItems: 'center', borderRadius: 7}}>
            <Input type={show ? "text" : "password"} value={password} onChangeText={(value)=>setPassword(value)} style={styles.input} InputLeftElement={<Image
            style={{left: 10}}
                source={require('./../assets/default.png')}/>} InputRightElement={<TouchableOpacity onPress={handleClick}><Image style={{right: 5}} source={require('./../assets/visible.png')}/></TouchableOpacity>} placeholder="Password" />
        </View>
        <Text style={{top: 205, left: 100, color: '#0052A7', fontSize: 16}}>Lupa Password</Text>
        <Button onPress={handleSubmit} bg='lime.600' style={{width: 300, top: 225, fontSize: 16}}>Login</Button>
        <Button bg='singletons.white' _text={{color: 'singletons.black'}} style={{width: 300, top: 235, fontSize: 16, borderWidth: 0.2, borderColor: 'grey'}}>Lupa Email</Button>
        <Text style={{top: 290, color: 'black', fontSize: 16}}>v1.01</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        left: 15,
        paddingVertical: 8,
        color: 'black',
    },
});

export default MainApp