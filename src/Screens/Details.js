import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CartContext } from "../Context/CartContext";

export default function Details({ navigation, route }) {


    const { addToCart } = useContext(CartContext);

    // const SendData = async  () => {
    //     try {
    //         const dish = { name: item.name, price: item.price }
    //         console.log(dish)
    //         const ItemRef = collection(db, 'item');
    //         await addDoc(ItemRef, dish);
    //         alert( item.name + ' added to cart succesfully')
    //     }
    //     catch (error) {
    //         const errorMessage = error.message;
    //         console.log(errorMessage);
    //     }


    // }

    // const SendData=( name, price)=>{
    //         return firestore().collection('Item').doc().set({
    //             name , price,
    //             alert(name,price)
    //         })

    // }
    const item = route.params;


    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={navigation.goBack} style={{ marginLeft: 3, marginRight: '2%' }}>
                    <FontAwesome5 name='angle-left' size={25} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.txt}>Details</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={item.img} style={styles.img} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: '5%' }}>
                <FontAwesome5 name='star' solid size={20} color={'#ffdd42'} style={{ marginLeft: 5 }} />
                <FontAwesome5 name='star' solid size={20} color={'#ffdd42'} style={{ marginLeft: 5 }} />
                <FontAwesome5 name='star' solid size={20} color={'#ffdd42'} style={{ marginLeft: 5 }} />
                <FontAwesome5 name='star' solid size={20} color={'#ffdd42'} style={{ marginLeft: 5 }} />
                <FontAwesome5 name='star' solid size={20} color={'#ffdd42'} style={{ marginLeft: 5 }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>{item.name} </Text>
                <Text style={styles.name}> Rs. {item.price} </Text>
                <Text style={styles.name}> Quantity {item.quantity} </Text>

                <Text style={styles.detailstext}>
                    The yummiest dish that everyone loves. You will also like it its our 100% guarantee , your favorite food with
                    the delicious and unbeatable taste at your doorstep in few minutes . So order now and ,
                    Enjoy your Meal !
                </Text>

                <View style={styles.styler}>
                    <TouchableOpacity style={styles.btn} onPress={() => addToCart(item, alert(item.name + ' added to cart'))} >
                        <Text style={styles.btntxt}>ADD TO CART</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    },
    txt: {
        fontSize: 20,
        color: 'black',
        marginBottom: '5%',
        marginRight: '70%',
        fontWeight: 'bold',

    },

    img: {
        width: '60%',
        height: 200,
        resizeMode: 'stretch'

    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 60,
        backgroundColor: '#FF6C44',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: '5%'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },
    detailstext: {
        margin: 15,
        lineHeight: 20,
        fontSize: 16,
        color: 'white'
    },
    styler: {
        marginTop: '3%',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 60,
        width: '60%',
        justifyContent: 'center'
    },
    btntxt: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5,
        color: '#FF1717'
    },
});


