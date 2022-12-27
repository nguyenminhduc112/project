import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OptionsMenu from "react-native-option-menu";
import MoreIcon from "../../images/more.png"
const Bai6_2 = () => {
  const [color1,setColor1] = useState('white')
  const [color2,setColor2] = useState('white')
  const [color3,setColor3] = useState('white')
  const [font1,setFont1] = useState('400')
  const [font2,setFont2] = useState('400')
  const [font3,setFont3] = useState('400')
  const [hidden1,setHidden1] = useState('flex')
  const [hidden2,setHidden2] = useState('flex')
  const [hidden3,setHidden3] = useState('flex')

  const fontBold1 = () =>{
    setFont1('bold')
  }
  const colorRed1 = () =>{
    setColor1('red')
  }
  const remove1 = () =>{
    setHidden1('none')
  }
  const fontBold2 = () =>{
    setFont2('bold')
  }
  const colorRed2 = () =>{
    setColor2('red')
  }
  const remove2 = () =>{
    setHidden2('none')
  }
  const fontBold3 = () =>{
    setFont3('bold')
  }
  const colorRed3 = () =>{
    setColor3('red')
  }
  const remove3 = () =>{
    setHidden3('none')
  }
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 21, marginLeft: 5, fontWeight: 'bold' }}>Options Menu</Text>

      </View>
      <View style={{ flex: 3 }}>
        <TouchableOpacity style={{height:50,backgroundColor:"blue",justifyContent:'center',alignItems:'center', marginTop:10,display:hidden1}}>
          <OptionsMenu
            button="oke"
            buttonStyle={{ width: 50, margin: 7.5, resizeMode: "contain",opacity: 0, height: 0}}
            destructiveIndex={1}
            options={["In đậm chữ", "In chữ đỏ", "Xóa", "..."]}
            actions={[fontBold1,colorRed1,remove1]} />
            <Text style={{color:color1,fontWeight:font1}}>Lập Trình Web</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,backgroundColor:"blue",justifyContent:'center',alignItems:'center', marginTop:10,display:hidden2}}>
          <OptionsMenu
            button="oke"
            buttonStyle={{ width: 50, margin: 7.5, resizeMode: "contain",opacity: 0, height: 0}}
            destructiveIndex={1}
            options={["In đậm chữ", "In chữ đỏ", "Xóa", "..."]}
            actions={[fontBold2,colorRed2,remove2]} />
            <Text style={{color:color2,fontWeight:font2}}>Lập Trình Ứng Dụng Di Động</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,backgroundColor:"blue",justifyContent:'center',alignItems:'center', marginTop:10,display:hidden3}}>
          <OptionsMenu
            button="oke"
            buttonStyle={{ width: 50, margin: 7.5, resizeMode: "contain",opacity: 0, height: 0}}
            destructiveIndex={1}
            options={["In đậm chữ", "In chữ đỏ", "Xóa", "..."]}
            actions={[fontBold3,colorRed3,remove3]} />
            <Text style={{color:color3,fontWeight:font3}}>Tiếng Anh</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Bai6_2

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})