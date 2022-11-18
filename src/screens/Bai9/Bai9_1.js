import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import postConnect from './postConnect'

const Bai9_1 = () => {
    const [posts,setPosts] = useState();
    const listPost = postConnect.get('/posts',[]).then((result) =>{
      setPosts(result.data);
    })
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={posts}
          renderItem={({item})=>{
            return <Text style={styles.item}>{item.title}</Text>
          }}
        />
      </SafeAreaView>
    )
}

export default Bai9_1

const styles = StyleSheet.create({
    container:{
      padding:30,
    },
    item:{
      width:'100%',
      padding:10,
      backgroundColor:'red',
      color:"#ffff",
      marginBottom:15,
      borderRadius:15,
    }
  })