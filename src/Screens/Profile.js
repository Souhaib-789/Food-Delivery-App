import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Profile({navigation}) {
  return (

    <View style={styles.container}>
      <Text style={styles.head}>Profile</Text>
      <Image source={require('../assests/Images/men.jpg')} style={styles.img} />
      <View style={styles.subdiv}>
        <Text style={styles.txt}>Souhaib</Text>
        <Text style={styles.txtx}> <FontAwesome5 name='envelope' size={18} color={'black'} solid /> souhaib@gmail.com</Text>
      </View>

      <View style={styles.subdiv2}>
        <TouchableOpacity onPress={()=> navigation.navigate('Orders')} >
          <Text style={styles.links}><FontAwesome5 name='folder' size={20} color={'grey'} solid /> Your Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> alert('Poor network connection')}>
          <Text style={styles.links}><FontAwesome5 name='phone' size={20} color={'grey'} solid /> Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.links}><FontAwesome5 name='arrow-up' size={20} color={'grey'} solid /> LogOut</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  head: {
    fontSize: 25,
    color: 'black',
   position: 'absolute',
   right: '75%',
   bottom:'90%',
    fontWeight: 'bold',

  },
  container: {
    alignItems: "center",
    justifyContent: "center",
   height: '100%',
    backgroundColor: '#fff',
marginBottom: '20%',
  },
  img: {
    width: 180,
    height: 170,
    borderRadius: 90

  },
  txt: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 2,
    color: '#FF1717'
  },
  txtx: {
    textDecorationStyle: "solid",
    fontSize: 25,
    margin: 2,
    color: '#FF1717'
  },
  subdiv: {
    alignItems: 'center',
    margin: 20
  },
  subdiv2: {
    marginTop: 50,
    marginRight: "50%"
  },
  links: {
    color: 'grey',
    fontSize: 20,
    margin: 7,

  }
});


