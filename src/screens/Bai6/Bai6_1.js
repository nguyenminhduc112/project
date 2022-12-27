import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OptionsMenu from "react-native-option-menu";
import MoreIcon from "../../images/more.png"
const Bai6_1 = () => {
  const [color,setColor] = useState('white')
  const changeRed = () => {
    setColor("red")
  }
  const changeYellow = () => {
    setColor("yellow")
  }
  
  const changeWhite = () => {
    setColor("white")
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.header}>
        <Text style={{fontSize:21,marginLeft:5,fontWeight:'bold'}}>Options Menu</Text>
        <OptionsMenu
          button={MoreIcon}
          buttonStyle={{ width: 50, height: 20, margin: 7.5, resizeMode: "contain" }}
          destructiveIndex={1}
          options={["To Red", "To Yellow", "To White","..."]}
          actions={[changeRed,changeYellow,changeWhite]} />
      </View>
      <View style={{flex:3,backgroundColor:color}}>
        <Text style={{fontSize:21,textAlign:'center'}}>Hello Word</Text>
      </View>
    </SafeAreaView>
  )
}

export default Bai6_1

const styles = StyleSheet.create({
  header:{

    height:80,
    backgroundColor:'green',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
})