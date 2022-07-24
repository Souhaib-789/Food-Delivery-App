import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from 'react-native-swiper'


export default function WelcomeScreen({ navigation }) {
  return (

    <Swiper  showsButtons={false}
    >
      <SafeAreaView >
        <View style={styles.container}>
          <Image source={require('../assests/Images/ju.jpg')} style={styles.logo} />
          <View >
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.txt}>Delicious Food</Text>
              <Text>Delicious and your favorite food at your doorstep</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <SafeAreaView >
        <View style={styles.container}>
          <Image source={require('../assests/Images/ppo.jpg')} style={styles.logo} />
          <View >
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.txt}>Fast Delivery</Text>
              <Text>Delicious and your favorite food at your doorstep</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.btntxt}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Swiper>




  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    height: '100%'

  },
  txt: {
    fontWeight: "bold",
    fontSize: 30,
    color: 'black',
    fontFamily: 'Rubik-Italic'
  },
  btn: {
    backgroundColor: '#FF1717',
    borderRadius: 25,
    marginTop: 60,
    height: 50,
    justifyContent: 'center'
  },
  btntxt: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    color: '#fff'
  },
  logo: {
    resizeMode: 'contain'
  },
 });


