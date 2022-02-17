import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Details({ navigation, route }) {

    const item = route.params;
    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={navigation.goBack} style={{ margin: 6 }}>
                    <FontAwesome5 name='angle-left' size={25} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.txt}>Details</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={item.img} style={styles.img} />
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>{item.name} </Text>
                <Text style={styles.detailstext}>
                    The yummiest dish that everyone loves. You will also like it its our 100% guarantee , your favorite food with
                    the delicious and unbeatable taste at your doorstep in few minutes . So order now and ,
                    Enjoy your Meal !</Text>

                <View style={styles.styler}>
                    <TouchableOpacity style={styles.btn} onPress={()=> alert(item.name + ' added to cart')} >
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
    },
    txt: {
        fontSize: 25,
        color: 'black',
        marginBottom: '5%',
        marginRight: '70%',
        fontWeight: 'bold',

    },
    View1: {

    },
    img: {
        width: 250,
        height: 180,

    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: '#FF6C44',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',

    },
    detailstext: {
        margin: 15,
        lineHeight: 25,
        fontSize: 16,
        color: 'white'
    },
    styler: {
        marginTop: 30,
        marginBottom: 40,
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#fff',
        borderRadius: 25,
        marginTop: 50,
        height: 60,
        width: '70%',
        justifyContent: 'center'
    },
    btntxt: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        color: '#FF1717'
    },
});


