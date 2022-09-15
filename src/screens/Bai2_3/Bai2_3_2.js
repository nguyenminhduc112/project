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
  Image,
} from 'react-native';
import React, {useState} from 'react';

import PHONE from '../../images/Circle-icons-phone.svg.png'
import NOTE from '../../images/2438239.png'
const DATA = [
  {
    id: '1',
    name: 'Nguyễn Minh Đức',
    phone: '0385539722',
  },
];

const Item = ({name, phone}) => (
  <View style={[styles.item, {marginTop: 10}]}>
    <Text style={[styles.textName, {}]}>{name}</Text>
    <Text style={[styles.textPhone, {}]}>{phone}</Text>
    <View style={styles.blockImage}>
      <Image source={PHONE} style={styles.image} />
      <Image source={NOTE} style={styles.image} />
    </View>
  </View>
);
const Bai2_3_2 = () => {
  const renderItem = ({item}) => <Item name={item.name} phone={item.phone} />;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ScrollView> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Thực Hành Custom ListView</Text>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
      {/* </ScrollView> */}
    </TouchableWithoutFeedback>
  );
};

export default Bai2_3_2;
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
  blockImage:{
    flexDirection:'row'
  },
  image:{
    width:40,
    height:40,
    marginRight:5
  }
});
