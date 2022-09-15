import { KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Text, TextInput, View, Keyboard, Platform,ScrollView, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'

const Bai2 = ({navigation}) => {
  const [age, setAge] = useState(0)
  const [year, setYear] = useState(0)
  //
  const [color, setColor] = useState('grey')
  const [foodLike, setFood] = useState(false)
  const [sportLike, setSport] = useState(false)
  const [hide, setHide] = useState(false)

  const changeColor = () => {
    if (color == 'grey') {
      setColor('green')
    } else {
      setColor('grey')
    }
  }
  const next = () => {
    navigation.navigate('Home');
  }

  const customAge = () => {
    let d = new Date();
    let yearCurrent = d.getFullYear();
    if (year != 0) {
      let Age = yearCurrent - year;
      setAge(Age);
    }
  }
  const statusFood = ()=>{
    if(foodLike){
      setFood(false)
    }else{
      setFood(true)
    }
  }
  const statusSport = ()=>{
    if(sportLike){
      setSport(false)
    }else{
      setSport(true)
    }
  }
  return (
    <ScrollView>
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >

        <View style={styles.header}>
          <Text style={styles.textHeader}>Xử Lý Sự Kiện</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Chương trình tính tuổi</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nhập số tuổi vào đây"
          keyboardType="numeric"
          onChangeText={setYear}
          value={year}
        // autoFocus={true}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={[styles.button, { marginRight: 5 }]} onPress={customAge}>
            <Text style={styles.textButton}>Tuổi</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.button} onPress={changeColor}>
            <Text style={styles.textButton}>Màu sắc</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
          <TouchableOpacity style={[styles.button, { marginRight: 5 }]} onPress={statusFood}>
            <Text style={styles.textButton}>Món</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.button} onPress={statusSport}>
            <Text style={styles.textButton}>Thể thao</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
          <TouchableOpacity style={[styles.button, { marginRight: 5,display:hide?'none':'flex' }]} onPress={()=>{
            setHide(true)
          }}>
            <Text style={styles.textButton}>Ẩn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{
            setHide(false)
          }}>
            <Text style={styles.textButton}>Hiện</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.button, { width: '100%', marginTop: 15 }]} onPress={next}>
          <Text style={styles.textButton}>Đổi màng hình mới</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{age == 0 ? 'Tuổi sẽ hiện ở đây' : age}</Text>
        <Text style={[styles.text, { color: color != 'grey' ? color : 'grey' }]}>Yêu màu xanh lá</Text>
        <Text style={styles.text}>{foodLike ?'Thích ăn bánh tráng trộn':'Món ăn yêu thích'}</Text>
        <Text style={styles.text}>{sportLike ?'Thích chơi đá banh':'Môn thể thao yêu thích'}</Text>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </ScrollView>
    
  )
}

export default Bai2

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    paddingLeft: 10
  },
  textHeader: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  title: {
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'pink',
    height: 50,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 15
  },
  text: {
    fontSize: 30,
    marginTop: 10,
    color: 'grey',
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: '#841584',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textButton: {
    color: '#ffff'
  }
})