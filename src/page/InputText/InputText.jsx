import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';
import React from 'react'

export default function InputText({lable,value,onChangeText,placeholder}) {
  return (
    <View style={StyleSheet.View}>
      <TextInput
        placeholder={placeholder}
        lable={lable}
        value={value}
        onChangeText={onChangeText}
        mode="contained"
       
      />
    </View>
  )
}
const styles=StyleSheet.create({
    view:{
        padding:10,
    }
})