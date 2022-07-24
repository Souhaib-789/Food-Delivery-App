import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { CartContext } from "../Context/CartContext";


export default function ShoppingCart({ navigation }) {

  const { cartItems, removeItem } = useContext(CartContext);


  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.main}>
        <Text style={styles.maintxt}>Shopping Cart</Text>
      </View>

      {cartItems.length == 0 ? (
        <View style={styles.kl}>
          <Image source={require('../assests/Images/empty.png')} style={styles.imge} />
          <Text style={styles.otxt}> Shopping Cart is empty !</Text>
        </View>
      ) :
        (<>
          <FlatList
            data={cartItems}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.container}>
                <Image source={item.img} style={styles.img} />
                <View style={styles.subView}>
                  <Text style={styles.txt}> {item.name}</Text>
                  <Text style={styles.txt}> Rs. {item.price}</Text>
                </View>
                {/* <View style={styles.subView2}>
                <Text style={styles.txt}>{item.quantity}</Text>
                <View style={styles.incdec}>
                  <TouchableOpacity>
                    <FontAwesome5 name='minus' size={15} color={'white'} solid style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> removeItem(item.id)}>
                    <FontAwesome5 name='plus' size={15} color={'white'} solid style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View> */}
                <TouchableOpacity onPress={() => removeItem(item.id)} style={{ margin: '5%' }}>
                  <Entypo name='circle-with-cross' size={20} color={'#FF1717'} solid style={styles.icon} />
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.containerXY}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OrderNow')} >
              <Text style={styles.btntxt}>CHECK OUT </Text>
            </TouchableOpacity>
          </View>
        </>)}

    </View>

  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20
  },
  maintxt: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row'

  },
  img: {
    height: 55,
    width: 95,
    resizeMode: 'contain'
  },
  subView: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1
  },
  txt: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 2,
    color: 'black'
  },
  subView2: {
    marginRight: 20,
    alignItems: 'center'
  },
  incdec: {
    width: 80,
    height: 30,
    backgroundColor: '#FF6C44',
    paddingHorizontal: 5,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  icon: {
    margin: 5,
    fontWeight: 'bold'
  },
  containerX: {
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20
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
  address: {
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#fdd5b1',
    margin: '5%',
    borderRadius: 5
  },
  addressx: {
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#fdd5b1',
    margin: '5%',
    marginTop: 0,
    borderRadius: 5
  },
  kl: {
    marginHorizontal: '20%',
    marginVertical: '20%',
    alignItems: 'center'
  },
  otxt: {
    fontSize: 20,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  img: {
    height: 50,
    width: 60,
    resizeMode: 'contain'
  },

});


