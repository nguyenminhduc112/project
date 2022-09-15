import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Platform,
  ScrollView,
  Image
} from 'react-native';
import React, { useState } from 'react'
import { CheckBox } from "@rneui/themed";

// Image
import HinhDuc from '../../images/minh-duc.jpg'
import HinhHung from '../../images/phi-hung.jpg'
const Bai2_2_3 = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Thực Hành Image</Text>
          </View>
          <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Hiển thị phi hùng"
            checked={check1}
            onPress={() => {
              setCheck1(true)
              setCheck2(false)
            }}
          />
          <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Hiển thị minh đức"
            checked={check2}
            onPress={() => {
              setCheck2(true)
              setCheck1(false)
            }}
          />
          <Image
            style={[styles.image,{display:check2?'flex':'none'}]}
            source={HinhDuc}
          />
          <Image
            style={[styles.image ,{display:check1?'flex':'none'}]}
            source={HinhHung}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Bai2_2_3

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
  image:{
    width:'100%',
    height:400
  }
});