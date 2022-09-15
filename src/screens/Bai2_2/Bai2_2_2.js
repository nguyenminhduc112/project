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
import React, { useState } from 'react'
import { CheckBox } from "@rneui/themed";
const Bai2_2_2 = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [checkAll, setCheckAll] = useState(false)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Thực Hành Radio</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.textTitle }>
              Tại sao bạn chọn học ngành công nghệ thông tin ?
            </Text>
          </View>
          <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Bố mẹ bắt buộc"
            checked={check1}
            onPress={() => {
              setCheck1(true)
              setCheck2(false)
              setCheck3(false)
              setCheck4(false)
              setCheckAll(false)
            }}
          />
           <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Vì đam mê"
            checked={check2}
            onPress={() => {
              setCheck2(true)
              setCheck1(false)
              setCheck3(false)
              setCheck4(false)
              setCheckAll(false)
            }}
          />
           <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Bạn bè xúi dục"
            checked={check3}
            onPress={() => {
              setCheck3(true)
              setCheck2(false)
              setCheck1(false)
              setCheck4(false)
              setCheckAll(false)
            }}
          />
          <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Chọn bừa"
            checked={check4}
            onPress={() => {
              setCheck4(true)
              setCheck3(false)
              setCheck2(false)
              setCheck1(false)
              setCheckAll(false)
            }}
          />

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 200, height: 50, backgroundColor: 'black' }} onPress={() => {
              setCheckAll(true)
            }}>
              <Text style={{ color: '#ffff', fontSize: 18 }}>Chọn</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', height: 100, display: checkAll && (check1 || check2 || check3||check4) ? 'flex' : 'none' }}>
            <Text style={[styles.textResult, { display: checkAll && check1 ? 'flex' : 'none' }]}>Bố mẹ bắt buộc</Text>
            <Text style={[styles.textResult, { display: checkAll && check2 ? 'flex' : 'none' }]}>Vì đam mê</Text>
            <Text style={[styles.textResult, { display: checkAll && check3 ? 'flex' : 'none' }]}>Bạn bè xúi dục</Text>
            <Text style={[styles.textResult, { display: checkAll && check4 ? 'flex' : 'none' }]}>Chọn bừa</Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Bai2_2_2

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
  textResult: {
    color: '#ffff',
    fontSize: 18
  },
});
