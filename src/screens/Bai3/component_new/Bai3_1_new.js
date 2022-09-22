import {SafeAreaView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';

const Bai3_1_new = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={{textAlign:'center'}}>Hello Thầy Iu</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.textButton}>Quay Lại</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Bai3_1_new;

const styles = StyleSheet.create({
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
    fontSize:18
  },
});
