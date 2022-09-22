import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Bai3_1_new from './component_new/Bai3_1_new';
const Bai3_1 = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ScrollView> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Thực Hành Navigation</Text>
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.textButton}>MỞ MÀNG HÌNH NHỎ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Bài 3_1_new');
            }}>
            <Text style={styles.textButton}>MỞ TOÀN BỘ MÀNG HÌNH</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'grey',
            opacity: 0.4,
          }}>
          <View>
            <Text>Hello Thầy Iu</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={styles.textButton}>Quay Lại</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      {/* </ScrollView> */}
    </TouchableWithoutFeedback>
  );
};

export default Bai3_1;

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
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textButton: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
