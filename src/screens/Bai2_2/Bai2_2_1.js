import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Keyboard,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from "@rneui/themed";
const Bai2_2_1 = ({ navigation }) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [checkAll,setCheckAll] = useState(false)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Thực Hành CheckBox</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.textTitle}>
              Bạn thích lập trình di động trên nền tảng nào?
            </Text>
          </View>
          <CheckBox

            title="Lập trình android"
            checked={check1}
            onPress={() => {
              setCheck1(!check1)
              setCheckAll(false)
            } }
          />

          <CheckBox
            title="Lập trình ios"
            checked={check2}
            onPress={() => {
              setCheck2(!check2)
              setCheckAll(false)
            }}
          />
          <CheckBox

            title="Lập trình window phone"
            checked={check3}
            onPress={() =>{
              setCheck3(!check3)
              setCheckAll(false)
            }}
          />
          <View style={{alignItems:'center',marginTop:10}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center', width: 200, height: 50, backgroundColor: 'black' }} onPress={()=>{
              setCheckAll(true)
            }}>
              <Text style={{color:'#ffff',fontSize:18}}>Chọn</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop:10,justifyContent:'center',alignItems:'center',backgroundColor:'grey',height:100,display:checkAll && (check1 || check2 || check3) ? 'flex':'none'}}>
            <Text style={[styles.textResult,{display:checkAll && check1?'flex':'none'}]}>Lập trình android</Text>
            <Text style={[styles.textResult,{display:checkAll && check2?'flex':'none'}]}>Lập trình ios</Text>
            <Text style={[styles.textResult,{display:checkAll && check3?'flex':'none'}]}>Lập trình window phone</Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Bai2_2_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: '#2B2D42',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textHeader: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    height: 50,
    backgroundColor: '#8D99AE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'pink',
    height: 50,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 15,
  },
  textAge: {
    fontSize: 30,
    marginTop: 10,
  },
  textResult:{
    color:'#ffff',
    fontSize:18
  },
});
