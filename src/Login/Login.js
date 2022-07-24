import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import { AuthContext } from "../Context/AuthContext";


export default function Login({ navigation }) {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');


  const {login} =useContext(AuthContext)


  const Login = async () => {

    auth()
      .signInWithEmailAndPassword(email,password)
      .then(() => {
        console.log('User signed in ');
        navigation.navigate('WelcomeScreen')
        console.log()
      })
      .catch(error => {
        if (error) {
          console.log(error.message);
          alert('email or passwword invalid!')
        }

        console.error(error);
      });}

    //  const storeData = async () => {
    //    try {
    //      await AsyncStorage.setItem('NAME', name)
    //      console.log(name)
    //      console.log('Data gya')
    //    } catch (e) {
    //      // saving error
    //    }
    //  }


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
            <FontAwesome5 name='lock' size={30} color={'grey'} solid style={styles.icon} />
            <TextInput placeholder="Enter password" style={styles.inputtxt}
              value={password}
              onChangeText={(e) => setpassword(e)} />
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.btn} onPress={()=> login(email,password)}>
            <Text style={styles.btntxt}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={styles.OR}>OR</Text>
          <TouchableOpacity style={styles.btnx} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btntxt}>SIGN UP</Text>
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
    txt: {
      fontWeight: "bold",
      fontSize: 20
    },
    btn: {
      backgroundColor: '#FF1717',
      borderRadius: 5,
      marginTop: '8%',
      height: 50,
      width: '80%',
      justifyContent: 'center'
    },
    btntxt: {
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 18,
      padding: 5,
      color: '#fff'
    },
    btnx: {
      backgroundColor: '#FF1717',
      borderRadius: 5,
      marginTop: '3%',
      height: 50,
      width: '80%',
      justifyContent: 'center'
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


