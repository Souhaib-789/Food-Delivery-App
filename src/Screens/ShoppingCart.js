import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ShoppingCart({ navigation }) {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>


      <View style={styles.main}>

        <Text style={styles.maintxt}>Shopping Cart</Text>
      </View>
      <View style={styles.container}>
        <Image source={require('../assests/Images/burger.jpg')} style={styles.img} />
        <View style={styles.subView}>
          <Text style={styles.txt}> Burger</Text>
          <Text style={styles.txt}> Rs. 300</Text>
        </View>
        <View style={styles.subView2}>
          <Text style={styles.txt}>1</Text>
          <View style={styles.incdec}>
            <TouchableOpacity>
              <FontAwesome5 name='minus' size={15} color={'white'} solid style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name='plus' size={15} color={'white'} solid style={styles.icon} />

            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Image source={require('../assests/Images/burger.jpg')} style={styles.img} />
        <View style={styles.subView}>
          <Text style={styles.txt}> Burger</Text>
          <Text style={styles.txt}> Rs. 300</Text>
        </View>
        <View style={styles.subView2}>
          <Text style={styles.txt}>1</Text>
          <View style={styles.incdec}>
            <TouchableOpacity>
              <FontAwesome5 name='minus' size={15} color={'white'} solid style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name='plus' size={15} color={'white'} solid style={styles.icon} />

            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View style={styles.containerX}>
        <Text style={styles.ttl}>Total Price :</Text>
        <Text style={styles.ttl}>Rs. 878</Text>
      </View>
      <View style={styles.address}>
        <TextInput placeholder="Enter your address" style={{ fontSize: 18 }} />
      </View>
      <View style={styles.addressx}>
        <TextInput placeholder="Enter your phone no." style={{ fontSize: 18 }} />
      </View>
      <View style={styles.containerXY}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Thankyou')} >
          <Text style={styles.btntxt}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 20
  },
  maintxt: {
    fontSize: 22,
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
    height: 80,
    width: 100
  },
  subView: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1
  },
  txt: {
    fontWeight: "bold",
    fontSize: 18,
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

    marginBottom: 10,
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#FF1717',
    borderRadius: 25,
    marginTop: 20,
    height: 60,
    width: '70%',
    justifyContent: 'center'
  },
  btntxt: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
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
  }

});


