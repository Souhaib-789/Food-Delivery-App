import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';



export default function Orders({ navigation }) {


    const [myOrders, setmyOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);


    //Fetching Orders
    const fetchOrders = async () => {
        await firestore().collection("Order").get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    console.log('User ID: ', doc.id, doc.data());
                    let userObj = doc.data();
                    console.log('Aya hwa Order', userObj)
                    setmyOrders(userObj)
                });
            });
    }

    const myOrdersx = {
        total: '2783',
        name: 'snmnmbd'
    }
    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={navigation.goBack} style={{ margin: 10 }}>
                        <FontAwesome5 name='angle-left' size={25} color={'black'} />
                    </TouchableOpacity>
                    <Text style={styles.txt}>Your Orders</Text>
                </View>


                <View style={styles.minidiv}>
                    <View>
                        <Text style={styles.txtes}>Order ID : {myOrders.userId} </Text>
                        <Text>-----------------------------------------------------------------------</Text>
                        <FlatList
                            data={myOrders.Items}
                            renderItem={({ item, index }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: '3%' }}>
                                    <Text style={styles.txtes}>{item.name}</Text>
                                    <Text style={styles.txtes}> {item.quantity}</Text>
                                </View>
                            )} />
                        <Text>-----------------------------------------------------------------------</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txtes}>Address :</Text>
                            <Text style={styles.txtes}>{myOrders.address} </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.txtes, { fontWeight: 'bold', marginTop: '5%' }]}>Total</Text>
                            <Text style={[styles.txtes, { fontWeight: 'bold', marginTop: '5%' }]}> Rs. {myOrders.total} </Text>
                        </View>

                    </View>
                </View>

            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        padding: 10

    },
    txt: {
        fontSize: 20,
        color: 'black',
        margin: 8,
        fontWeight: 'bold',

    },
    minidiv: {
        backgroundColor: '#F5F5F5',
        height: '50%',
        margin: '5%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    txtes: {
        fontSize: 18,
        color: 'black'
    }
})


