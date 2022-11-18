import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import WatingForYou from "../../images/watingForYou.jpg";
import movieConnect from './movieConnect';
const Bai9_2 = () => {
    const [movies, setMovies] = useState();
    const listMovies = movieConnect.get('/', []).then((result) => {
        setMovies(result.data.movies);
    })
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={movies}
                renderItem={({ item }) => {
                    return (
                        <View  style={styles.item}>
                            <Text style={styles.textTitle}>Tên Phim: {item.title}</Text>
                            <Text style={styles.textYear}>Năm sản xuất: {item.releaseYear}</Text>
                        </View>
                    )
                        
                }}
            />
        </SafeAreaView>
    )
}

export default Bai9_2

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 30,
        backgroundColor:'#ff4081'
    },
    item: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 15,
        borderRadius: 15,
    },
    textTitle:{
        color:'black',
        fontSize:24,
        fontWeight:'bold',
    },
    textYear:{
        fontSize:18,
    }
})