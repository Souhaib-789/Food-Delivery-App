import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Login({ navigation }) {
  return (

    <View style={styles.container}>
      <Image source={require('../assests/Images/ppo.jpg')} style={styles.img} />

      <View style={styles.inputs}>
        <View style={styles.inp1}>
          <FontAwesome5 name='envelope' size={30} color={'grey'} solid style={styles.icon} />
          <TextInput placeholder="Enter email" style={styles.inputtxt} />
        </View>
        <View style={styles.inp1}>
          <FontAwesome5 name='envelope' size={30} color={'grey'} solid style={styles.icon} />
          <TextInput placeholder="Enter password" style={styles.inputtxt} />
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('WelcomeScreen')}>
          <Text style={styles.btntxt}>REGISTER</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,

  },
  img: {
    width: 200,
    height: 120,
    marginLeft: 90,
    marginTop: 80

  },
  inputs: {
    // marginLeft: 60,
    alignItems: 'center',
    marginTop: 70
  },
  inp1: {
    height: 50,
    borderRadius: 10,
    width: '80%',
    margin: '5%',
    flexDirection: 'row',
    backgroundColor: '#C0C0C0',
    textAlign: 'center'
  },
  inputtxt: {
    fontSize: 20,
    padding: 6,
    marginLeft: 10
  },
  txt: {
    fontWeight: "bold",
    fontSize: 30
  },
  btn: {
    backgroundColor: '#FF1717',
    borderRadius: 10,
    marginTop: 60,
    height: 50,
    justifyContent: 'center',
    width: '80%'

  },
  btnx: {
    backgroundColor: '#FF1717',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    width: '80%'

  },
  btntxt: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    color: '#fff'
  },
  OR: {
    fontSize: 20,
    margin: 5,
    color: 'black'
  },
  icon: {
    margin: 10
  }
});


