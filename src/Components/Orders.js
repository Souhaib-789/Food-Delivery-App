import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Orders({ navigation }) {
    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={navigation.goBack} style={{ margin: 10 }}>
                    <FontAwesome5 name='angle-left' size={25} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.txt}>Your Orders</Text>
            </View>

            <View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff'

    },
    txt: {
        fontSize: 25,
        color: 'black',
        margin: 8,
        fontWeight: 'bold',

    },
})


