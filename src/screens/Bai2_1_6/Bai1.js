import { KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Text, TextInput, View, Button, Keyboard, Platform } from 'react-native'
import React, { useState } from 'react'

const Bai1 = ({ navigation }) => {

    // State
    const [age, setAge] = useState(0)
    const [year, setYear] = useState(0)


    const customAge = () => {
        let d = new Date();
        let yearCurrent = d.getFullYear();
        if (year != 0) {
            let Age = yearCurrent - year;
            setAge(Age);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >

                <View style={styles.header}>
                    <Text style={styles.textHeader}>Xử Lý Sự Kiện</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Chương trình tính tuổi</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập số tuổi vào đây"
                    keyboardType="numeric"
                    onChangeText={setYear}
                    value={year}
                    // autoFocus={true}
                />
                <Button
                    title="TÍNH TUỔI NÀO"
                    color="#841584"
                    onPress={customAge}
                />

                <Text style={styles.textAge}>{age == 0 ? 'Tuổi sẽ hiện ở đây' : age}</Text>

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default Bai1

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 100,
        backgroundColor: 'blue',
        justifyContent: 'center',
        paddingLeft: 10
    },
    textHeader: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    title: {
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'pink',
        height: 50,
        marginLeft: 5,
        marginRight: 10,
        marginBottom: 15
    },
    textAge: {
        fontSize: 30,
        marginTop: 10
    }
})