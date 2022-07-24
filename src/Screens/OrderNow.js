import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';
import { CartContext } from "../Context/CartContext";
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from "../Context/AuthContext";


export default function OrderNow({ navigation }) {


  const { cartItems } = useContext(CartContext);
  const { user } = useContext(AuthContext)

  const [address, setaddress] = useState();
  const [phone, setphone] = useState();
  const [delivery, setdelivery] = useState();
  const [total, settotal] = useState();
  // const [loading, setloading] = useState(false);


  useEffect(() => {
    console.log('Final Orderrr===> ', cartItems)
    settotal(cartItems.reduce((acc, curr) => acc + Number(curr.price), 0))

  }, []);

  const OrderNow = async () => {
    await firestore()
      .collection('Order')
      .add(
        {
          userId: user.uid,
          Items: cartItems,
          address: address,
          postTime: firestore.Timestamp.fromDate(new Date()),
          phone: phone,
          total: total,
        })

      .then(() => {
        // setloading(true)
        console.log('Order Added!');
        navigation.navigate('Thankyou')
      })
      .catch((error) => {
        console.log('Something went wrong with order posting', error);
      });
  }



  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView>

        <View style={styles.main}>

          <TouchableOpacity onPress={navigation.goBack} style={{ marginLeft: 3, marginRight: '2%' }}>
            <FontAwesome5 name='angle-left' size={25} color={'black'} />
          </TouchableOpacity>
          <Text style={styles.maintxt}>Check Out</Text>
        </View>

        <View style={styles.containerX}>
          <Text style={styles.ttl}>Total Price :</Text>
          <Text style={styles.ttl}>Rs. {total}</Text>
        </View>

        <View style={[styles.inp1, { height: 80 }]}>
          <FontAwesome5 name='home' size={25} color={'black'} solid style={[styles.icon, { marginTop: '7%' }]} />
          <TextInput
            placeholder="Enter your address"
            style={styles.inputtxt}
            multiline={true}
            numberOfLines={3}
            maxLength={300}
            value={address}
            onChangeText={(e) => setaddress(e)}
          />
        </View>
        <View style={styles.inp1}>
          <FontAwesome5 name='phone' size={25} color={'black'} solid style={styles.icon} />
          <TextInput placeholder="Enter your phone no." style={styles.inputtxt}
            value={phone}
            onChangeText={(e) => setphone(e)}
          />
        </View>
        <Picker
          selectedValue={delivery}
          onValueChange={(val) =>
            setdelivery(val)
          }
          style={{ margin: '5%', fontSize: '18' }}>
          <Picker.Item label="Delivery Type" value="" />
          <Picker.Item label="Cash on delivery" value="Cash on delivery" />
        </Picker>
        {/* {
          loading == true ?
            (<ActivityIndicator size="large" color="#00ff00" />) : */}

            <View style={styles.containerXY}>
              <TouchableOpacity style={styles.btn} onPress={OrderNow} >
                <Text style={styles.btntxt}>ORDER NOW</Text>
              </TouchableOpacity>
            </View>

        {/* } */}

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    flexDirection: 'row'
  },
  maintxt: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  containerX: {
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: '5%',
    marginBottom: '10%'
  },
  ttl: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  containerXY: {
    marginBottom: '5%',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#FF1717',
    borderRadius: 5,
    marginTop: '5%',
    height: 60,
    width: '70%',
    justifyContent: 'center'
  },
  btntxt: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    color: '#fff'
  },
  inp1: {
    height: 50,
    borderRadius: 5,
    width: '85%',
    flexDirection: 'row',
    backgroundColor: '#fdd5b1',
    textAlign: 'center',
    marginHorizontal: '8%',
    marginVertical: '3%'
  },
  icon: {
    margin: 10
  },
  inputtxt: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%'
  },

});


