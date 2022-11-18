import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NetInfo from "@react-native-community/netinfo";
import { useState } from 'react';
import { useEffect } from 'react';




const Bai8 = () => {
    const [isConnect, setIsConnect] = useState(false)
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnect(state.isConnected)
        });
        return()=>{
            unsubscribe()
        }
    })

    return (
        <View style={{flex:1}}>
            <Text style={{fontWeight:'bold',color:'black',fontSize:42,textAlign:'center'}}>KIỂM TRẢ KẾT NỐI INTERNET THIẾT BỊ</Text>
            <View style={{
                position:'absolute',
                bottom:0,
                height:50,
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:isConnect?'green':'black',
            }}>
                <Text style={{color:"white"}}>{isConnect?'Online':"Offline"}</Text>
            </View>
        </View>
    )
}

export default Bai8

const styles = StyleSheet.create({})