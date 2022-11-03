import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

const Bai5_1 = () => {
  const [font,setFont] = useState('');
  return (
    <View >
      <Text style={{fontFamily:font,fontSize:30,marginTop:10,textAlign:'center'}}>Tiêu Đề</Text>
      <TouchableOpacity  style={[styles.button]} onPress={()=>{
        setFont('Roboto Mono')
      }}>
        <Text style={[styles.textButton,{fontFamily:font == ''?'Arial':font}]}>Fuzzy Bubbles</Text>
      </TouchableOpacity>
    </View>
  )

}

export default Bai5_1

const styles = StyleSheet.create({

  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10
  },
  textButton: {
    color: '#ffff',
    fontWeight: 'bold'
  }
})