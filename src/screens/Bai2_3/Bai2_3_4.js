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
    countries: 'Nước Việt Nam',
    population: 1000,
    urlImage: Co_Viet_Nam
  },
  {
    id: '2',
    countries: 'Nước Mỹ',
    population: 2000,
    urlImage: Co_Nuoc_My
  },
  {
    id: '3',
    countries: 'Nước Anh',
    population: 3000,
    urlImage: Co_Nuoc_Anh
  },
  {
    id: '4',
    countries: 'Nước Canada',
    population: 4000,
    urlImage: Co_Canada
  },
];

const Item = ({ urlImage = '', countries, population }) => (
  <TouchableOpacity style={[styles.item, { marginTop: 10 }]} onPress={()=>{
    alert("Bạn đã chọn "+ countries)
  }}>
    <View >
      <Image source={urlImage} style={styles.image} />
    </View>
    <View style={{padding:20}}>
      <Text>Tên quốc gia: <Text style={{ color: 'green' }}>{countries}</Text></Text>
      <Text>Dân số: <Text style={{ color: 'green' }}>{population}</Text></Text>
    </View>
  </TouchableOpacity>
);

const Bai2_3_4 = () => {
  const renderItem = ({ item }) => <Item urlImage={item.urlImage} countries={item.countries} population={item.population} />;
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

export default Bai2_3_4

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