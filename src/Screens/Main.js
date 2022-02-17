import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList, TouchableHighlight, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingCart from "./ShoppingCart";
import { Categories } from "../assests/Categories";
import { Foods } from "../assests/Foods";
import Profile from "./Profile";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const Tab = createBottomTabNavigator();


export default function Main() {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }
      // ({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;
      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? "home"
      //         : 'home';
      //     } else if (route.name === 'ShoppingCart') {
      //       iconName = focused ? 'cart-arrow-down' : 'cart-arrow-down';
      //     }else if (route.name === 'Profile') {
      //       iconName = focused ? 'user' : 'user';
      //     }


      //     return <FontAwesome5 name={iconName} size={size} color={color} solid />;
      //   },
      //   tabBarActiveTintColor: '#FF6C44',
      //   tabBarInactiveTintColor: 'grey',
      // })
    }

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}

function Home({ navigation }) {

  // Categories
  const ListCategories = () => {
    return (
      <View>
        <FlatList
          data={Categories}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View >
              <TouchableOpacity
                key={index}
                style={styles.CCard}
                onPress={() => alert('Added ' + item.name)}>
                <Image source={item.img} style={styles.Cimg} />
                <Text style={styles.Cname}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )} />
      </View>)
  }
  return (


    <View style={{ backgroundColor: '#fff' }}>
      <View style={styles.View1}>
        <View style={styles.heading}>
          <Text style={styles.h1}>Hello </Text>
          <Text style={styles.h2}>Souhaib</Text>
        </View>
        <Text style={styles.h3}>What do you want today?</Text>
        <Image source={require('../assests/Images/man.jpg')} style={styles.headerimg} />
      </View>

      <View style={styles.View2}>
        <View style={styles.input}>
          <Text style={styles.icon}> <FontAwesome5 name='search' size={30} color={'black'} solid /></Text>
          <TextInput placeholder="Search (for food)" style={styles.inputtxt} />
        </View>

      </View>

      <ListCategories />

      <View style={styles.View3}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Foods}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              underlayColor={'white'}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Details', item)}            >
              <View style={styles.FoodCard}>
                <Image source={item.img} style={styles.FoodCardImg} />
                <Text style={styles.FoodCardName}>{item.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.price} >Rs.{item.price}</Text>
                  <TouchableOpacity >
                    <FontAwesome5 name='plus-circle' size={30} color={'#FF1717'} style={styles.cart} />
                  </TouchableOpacity>
                </View>

              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  View1: {
    margin: '6%',

  },
  heading: {
    flexDirection: 'row'
  },
  h1: {
    fontSize: 25,
    color: 'black'
  },
  h2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'

  },
  h3: {
    fontSize: 19,
    color: 'grey'
  },
  headerimg: {
    width: 70,
    height: 70,
    borderRadius: 75,
    position: "absolute",
    left: "80%",

  },
  cart: {
    marginRight: 10,
    marginTop: 10
  },
  View3: {
    marginBottom: '160%'
  },
  input: {
    height: 50,
    borderRadius: 10,
    width: '70%',
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
  icon: {
    margin: 10
  },
  CList: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Cbtn: {
    width: 120,
    height: 45,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row'
  },
  CCard: {
    width: 210,
    height: 70,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#FF6C44',
    margin: 13,
    flexDirection: 'row'
  },
  CCardx: {
    flexDirection: 'row',
  },
  Cimg: {
    width: 90,
    height: 60,
    borderRadius: 30,
    marginLeft: 10
  },
  Cname: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginLeft: 4
  },
  FoodCard: {
    width: 170,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
    marginHorizontal: 10,
    elevation: 15,
  },
  FoodCardImg: {
    height: 120,
    width: 150,
    borderRadius: 70,
    margin: 40

  },
  FoodCardName: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  price: {
    marginRight: 20,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },


});


