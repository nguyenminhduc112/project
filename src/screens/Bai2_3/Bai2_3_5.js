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
import React, { useState } from 'react';
import Co_Viet_Nam from '../../images/quoc-ky-viet-nam.jpeg'
import Co_Nuoc_My from '../../images/285px-Flag_of_the_United_States_(Pantone).svg.png'
import Co_Nuoc_Anh from '../../images/Flag_of_England.svg.png'
import Co_Canada from '../../images/quoc-ky-canada.jpeg'

const DATA = [
  {
    id: '1',
    currency: 'VND',
    buyTM: 1000,
    sellTM: 1000,
    buyCK: 1000,
    sellCK: 1000,
    urlImage: Co_Viet_Nam
  },
  {
    id: '2',
    currency: 'USD',
    buyTM: 2000,
    sellTM: 2000,
    buyCK: 2000,
    sellCK: 2000,
    urlImage: Co_Nuoc_My
  },
  {
    id: '3',
    currency: 'GBP',
    buyTM: 3000,
    sellTM: 3000,
    buyCK: 3000,
    sellCK: 3000,
    urlImage: Co_Nuoc_Anh
  },
  {
    id: '4',
    currency: 'CAD',
    buyTM: 4000,
    sellTM: 4000,
    buyCK: 4000,
    sellCK: 4000,
    urlImage: Co_Canada
  },
];

const Item = ({ urlImage = '', currency, buyTM,sellTM,buyCK,sellCK}) => (
  <TouchableOpacity style={[styles.item, { marginTop: 10 }]} onPress={()=>{
    alert("Bạn đã chọn "+ currency)
  }}>
    <View >
      <Image source={urlImage} style={styles.image} />
    </View>
    <View style={{padding:20}}>
      <Text style={{ color: 'red',fontSize:18,textAlign:'right' }}>{currency}</Text>
      <Text>Mua TM: <Text style={{ color: '#264653' }}>{buyTM}</Text></Text>
      <Text>Ban TM: <Text style={{ color: '#2A9D8F' }}>{sellTM}</Text></Text>
      <Text>Mua CK: <Text style={{ color: '#E9C46A' }}>{buyCK}</Text></Text>
      <Text>Ban CK: <Text style={{ color: '#F4A261' }}>{sellCK}</Text></Text>
    </View>
  </TouchableOpacity>
);

const Bai2_3_5 = () => {
  const renderItem = ({ item }) => <Item urlImage={item.urlImage} currency={item.currency} buyTM={item.buyTM} buyCK={item.buyCK} sellTM={item.sellTM} sellCK={item.sellCK}/>;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ScrollView> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Các quốc gia</Text>
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
}

export default Bai2_3_5

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
  item: {
    flexDirection: 'row', borderBottomWidth: 1,
    borderBottomColor: 'green',
    padding:5
  },
  textName: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000'
  },
  blockImage: {
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginTop: 10,
  }
});