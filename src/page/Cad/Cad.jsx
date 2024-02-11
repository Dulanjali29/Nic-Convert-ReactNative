import { View, Text, StyleSheet } from 'react-native'
import InputText from '../InputText/InputText'
import React from 'react'
import {Avatar, Card } from 'react-native-paper'
import { useState } from 'react'
import MyButton from '../MyButton/MyButton'


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function Cad() {

    const [nic,setNic]= useState("")
    const [bday,setBday]= useState("")
    const [gender,setGender]= useState("")
   
    const getDetail=()=>{
        const lankaNIC = require("lanka-nic");
        let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(nic);
        setBday(dateOfBirth.toDateString());
        setGender(gender);
    }
    const clear=()=>{
    setNic("")
    setBday("")
    setGender("")
    }
    return (
        <Card>
            <Card.Title title=" NIC Converter " style={styles.title}  />
            <View>
            <InputText value={nic} placeholder={"Your NIC Number"} onChangeText={(val)=>setNic(val)}/>
            </View>

        
            <View>
              <MyButton style={styles.btn} text={"Submit"} buttonColor={"green"} onPress={getDetail}/>  
              <MyButton text={"Clear"} buttonColor={"blue"} onPress={clear}/>  
            </View>

            <View style={styles.view}>
                <Text style={styles.text}>Birthday : {bday}</Text>
                <Text style={styles.text}>Gender   : {gender}</Text>
               
            </View>
        </Card>

    )
}
const styles=StyleSheet.create({
    view:{
        padding:20,
    },
   text: {
        color:'black',
        fontSize:20,
        marginBottom:10
    },
    btn:{
        marginTop:20,
        marginBottom:20,
    },
    title:{
       fontSize:30,
       marginLeft:130,
       padding:20
       
    }
    
})