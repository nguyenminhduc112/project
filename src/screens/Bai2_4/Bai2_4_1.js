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
import SelectDropdown from 'react-native-select-dropdown'

const Dates = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]
const Bai2_4_1 = () => {
    const [name, setName] = useState('')
    const [dateStart, setDateStart] = useState('')
    const [dateCount, setDateCount] = useState(0)
    const [confirm, setConfirm] = useState(false)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textHeader}>Spinner App</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                            <Text style={[styles.lable, { marginRight: 5, marginTop: 10 }]}>Tên Nhân Viên</Text>
                            <TextInput style={[styles.input, styles.inputNhanVien]} onChangeText={setName} value={name} />
                        </View>
                        <View>
                            <Text style={styles.lable}>Chọn thứ bắt đầu đi công tác</Text>
                            <SelectDropdown buttonStyle={{ borderBottomWidth: 2, borderBottomColor: 'red', width: '100%', marginBottom: 30 }
                            }
                                buttonTextStyle={{
                                    color: '#000000'
                                }}
                                data={Dates}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    setDateStart(selectedItem)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                        </View>
                        <View>
                            <Text style={styles.lable}>Nhập số ngày đi công tác dự kiến</Text>
                            <TextInput style={[styles.input, styles.inputSoNgay]} keyboardType='numeric' onChangeText={setDateCount} value={dateCount} />
                        </View>
                        <TouchableOpacity style={[styles.btn, { width: '100%' }]} onPress={()=>{
                            setConfirm(true)
                        }}>
                            <Text style={styles.textBtn}>Xác nhận</Text>
                        </TouchableOpacity>

                        <View style={{ marginTop: 30,display:confirm== false ||name == '' || dateStart == '' || dateCount == 0 ? 'none' : 'flex' }}>
                            <Text style={styles.textResult}>Nhân viên {name}</Text>
                            <Text style={styles.textResult}>Bắt đầu đi công tác vào {dateStart}</Text>
                            <Text style={styles.textResult}>Dự kiến số ngày là {dateCount} ngày</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default Bai2_4_1

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
    input: {
        height: 50,
        fontSize: 18
    },
    inputNhanVien: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'pink'

    },
    inputSoNgay: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue'
    },
    lable: {
        fontSize: 18,
        color: '#000000'
    },
    btn: {
        marginTop: 30,
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
    textResult:{
        fontSize:18,
        marginBottom:10
    }
});