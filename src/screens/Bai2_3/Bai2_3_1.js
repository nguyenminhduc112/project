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
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import uuid from 'react-native-uuid';
const DATA = [];

const Item = ({title}) => (
  <View
    style={[styles.title,{marginTop:10}]}>
    <Text style={[styles.textTitle, {}]}>{title}</Text>
  </View>
);
const Bai2_3_1 = () => {
  const [fullname, setFullname] = useState('');
  const renderItem = ({item}) => <Item title={item.title} />;

  const addList = () => {
    const data = {
      title: fullname,
      id: uuid.v4(),
    };
    if (fullname == '') {
      alert('Bạn chưa nhập tên');
    } else {
      DATA.push(data);
      console.log('Add completed')
      setFullname('')
    
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ScrollView> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Thực Hành ListView</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Nhập họ tên đầy đủ của bạn nè</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên đầy đủ nè"
          // keyboardType="numeric"
          onChangeText={setFullname}
          value={fullname}
          // autoFocus={true}
        />
       <TouchableOpacity style={[styles.btn, { width: '100%'}]} onPress={addList}>
          <Text style={styles.textBtn}>Lưu</Text>
        </TouchableOpacity>
        
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

export default Bai2_3_1;

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
    textAlign: 'center',
  },
  textTitle: {
    color: 'black',
    fontSize: 21,
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
  btn: {
    width: 180,
    height: 50,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textBtn: {
    color: '#ffff',
 
  },
});
