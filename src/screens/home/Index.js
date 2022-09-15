import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

const Index = ({navigation}) => {
  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Bài 2_1_6')
            }}>
                <Text style={styles.textButton}>Bài 2.1.6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Bài 2_2')
            }}>
                <Text style={styles.textButton}>Bài 2.2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Bài 2_3')
            }}>
                <Text style={styles.textButton}>Bài 2.3</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </ScrollView>
  
  )
}

export default Index

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    button: {
        width: 180,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop:10
      },
      textButton: {
        color: '#ffff',
        fontWeight:'bold'
      }
})