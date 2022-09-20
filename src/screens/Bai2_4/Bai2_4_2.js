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
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { SafeAreaView } from 'react-native-safe-area-context';
const Bai2_4_2 = () => {
    const [selectedCoures, setSelectedCoures] = useState([])
    const [name, setName] = useState('')
    const [placeOfBirth, setPlaceOfBirth] = useState('')
    const [course, setCourse] = useState('')
    const [confirm, setConfirm] = useState(false)
    function onMultiChange() {
        return (item) => setSelectedCoures(xorBy(selectedCoures, [item], 'id'))
    }


    const dataPlaces = [
        { id: '1', item: 'Bình Thuận' },
        { id: '2', item: 'Hà Nội' },
        { id: '3', item: 'Hồ Chí Minh' },
        { id: '4', item: 'Đồng Nai' },
        { id: '5', item: 'Đà Lạt' },
    ];
    const dataCourse = [
        { id: '1', item: 'React' },
        { id: '2', item: 'Javascirpt' },
        { id: '3', item: 'NodeJs' },
        { id: '4', item: 'Android' },
    ]
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView nestedScrollEnabled={true} style={{ width: '100%' }}>
                <SafeAreaView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textHeader}>Demo Auto-Multi</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.lable}>Nhập tên</Text>
                            <TextInput style={styles.input} placeholder='Nhập tên vào đây nè' value={name} onChangeText={setName} />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.lable}>Nơi sinh</Text>
                            <TextInput style={styles.input} placeholder='Nhập năm sinh vào đây nè' value={placeOfBirth} onChangeText={setPlaceOfBirth} />
                        </View><View style={styles.inputGroup}>
                            <Text style={styles.lable}>Nhập môn học</Text>
                            <View style={{flex:1}}>
                                <SelectBox
                                    listOptionProps={{ nestedScrollEnabled: true }}
                                    label=""
                                    options={dataCourse}
                                    selectedValues={selectedCoures}
                                    onMultiSelect={onMultiChange()}
                                    onTapClose={onMultiChange()}
                                    hideInputFilter={true}
                                    isMulti
                                    
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.btn, { width: '100%' }]} onPress={() => {
                            setConfirm(true)
                        }}>
                            <Text style={styles.textBtn}>Xác nhận</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 30, display: confirm == false || name == '' || placeOfBirth == '' || course == '' ? 'none' : 'flex' }}>
                            <Text style={styles.textResult}>Nhân viên {name}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default Bai2_4_2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 100
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
    inputGroup: {
        marginBottom: 30,
    },
    lable: {
        fontSize: 21,
        color: '#FBA2D0',
        fontWeight: 'bold'
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: 'pink'
    },
    btn: {
        width: 180,
        height: 50,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    textBtn: {
        color: '#020202',
        fontSize: 18
    },
});