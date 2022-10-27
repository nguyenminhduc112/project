import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet,PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
const Bai5_1 = () => {
  const [contactss,setContacts] = useState(null);
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to view your contacts.',
    buttonPositive: 'Please accept bare mortal',
  }).then(()=>{
    Contacts.getAll((err,contacts)=>{
      setContacts({contacts})
    })
  }
  );
  
  return (
    <View styles={styles.container}>
      <FlatList 
        data = {contactss}
        renderItem={({item})=>{
          <View styles={{backgroundColor:'gray',margin:2}}>
            <Text styles={styles.contact_detail}>{`${item.giveName}`}{item.familyName}</Text>
            {item.phoneNumber.map(phone => (
              <Text styles={styles.phones}>{phone.number}</Text>
            ))}
          </View>
        }}
        numColumns={1}
        keyExtraactor={(item,index)=>index}
      />
    </View>
  );
};

export default Bai5_1;

const styles = StyleSheet.create({
  
});
