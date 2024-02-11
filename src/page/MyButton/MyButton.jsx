import { View, Text, StyleSheet } from 'react-native'
import {Button } from 'react-native-paper';

import React from 'react'

export default function MyButton({style,onPress,text,buttonColor}) {
  return (
    <View>
      <Button style={style} buttonColor={buttonColor} mode="contained" onPress ={onPress}>
      <Text variant="headlineLarge">{text}</Text>
  </Button>
    </View>
  )
}
const styles=StyleSheet.create({

})