import React, { useState , useContext} from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import { AuthContext } from "../Context/AuthContext";

export default function Register({ navigation }) {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const {register} =useContext(AuthContext)

  const Register = async () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created !');
        navigation.navigate('WelcomeScreen')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  return (

    <View style={styles.container}>
      <Image source={require('../assests/Images/ppo.jpg')} style={styles.img} />

      <View style={styles.inputs}>
        <View style={styles.inp1}>
          <FontAwesome5 name='user' size={30} color={'grey'} solid style={styles.icon} />
          <TextInput placeholder="Enter name" style={styles.inputtxt}
            value={name}
            onChangeText={(e) => setname(e)} />
        </View>
        <View style={styles.inp1}>
          <FontAwesome5 name='envelope' size={30} color={'grey'} solid style={styles.icon} />
          <TextInput placeholder="Enter email" style={styles.inputtxt}
            value={email}
            onChangeText={(e) => setemail(e)} />
        </View>
        <View style={styles.inp1}>
          <FontAwesome5 name='key' size={30} color={'grey'} solid style={styles.icon} />
          <TextInput placeholder="Enter password" style={styles.inputtxt}
            value={password}
            onChangeText={(e) => setpassword(e)} />
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.btn} onPress={()=> register(email,password,name)}>
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
    alignItems: 'center',
    marginTop: 50
  },
  inp1: {
    height: 55,
    borderRadius: 10,
    width: '80%',
    margin: '3%',
    flexDirection: 'row',
    backgroundColor: '#C0C0C0',
    textAlign: 'center'
  },
  inputtxt: {
    fontSize: 18,
    padding: 6,
    marginLeft: 10,
    width: '80%'
  },

  btn: {
    backgroundColor: '#FF1717',
    borderRadius: 5,
    marginTop: '10%',
    height: 50,
    width: '80%',
    justifyContent: 'center'

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
    fontSize: 18,
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


