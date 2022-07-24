import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableHighlight, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingCart from "./ShoppingCart";
import { Categories } from "../assests/Categories";
import { Foods } from "../assests/Foods";
import Profile from "./Profile";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { AuthContext } from "../Context/AuthContext";

const Tab = createBottomTabNavigator();


export default function Main() {
  return (

    <Tab.Navigator screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? "home"
              : 'home';
          } else if (route.name === 'ShoppingCart') {
            iconName = focused ? 'cart-arrow-down' : 'cart-arrow-down';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }


          return <FontAwesome5 name={iconName} size={size} color={color} solid />;
        },
        tabBarActiveTintColor: '#FF6C44',
        tabBarInactiveTintColor: 'grey',
      })
    }

    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

    </Tab.Navigator>
  );
}

function Home({ navigation }) {


  const [selectedCategory, setselectedCategory] = useState(null);
  const [Dishes, setDishes] = useState(Foods);

  const [categories, setcategories] = useState();
  const [masterDataSource, setMasterDataSource] = useState();
  const [search, setSearch] = useState('');
  const [shortImg, setshortImg] = useState();


  const [namex, setnamex] = useState('');
  const { user } = useContext(AuthContext)

  useEffect(() => {
    setcategories(Categories);
    setMasterDataSource(Categories);
    fetchUsername();
  }, []);

  //FUnction fetching username
  const fetchUsername = async () => {
    await firestore().collection('Users').where(firestore.FieldPath.documentId(), 'in', [user.uid])
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          let userObj = documentSnapshot.data();
          console.log(userObj)
          setnamex(userObj.naam)
          setshortImg(userObj.userImg)
        });
      });
  }


  //Filtering category
  const onSelectCategory = (category) => {
    let Dish = Foods.filter(a => a.categories.includes(category.id))
    setDishes(Dish)
    console.log(category)
    setselectedCategory(category)

  }


  //Input Searching Function
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setcategories(newData);
      setSearch(text);
    } else {
      setcategories(masterDataSource);
      setSearch(text);
    }
  };



  // Categories
  const ListCategories = () => {
    return (
      <View>
        <FlatList
          data={categories}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View >
              <TouchableOpacity
                key={index}
                style={[styles.CCard, { backgroundColor: (selectedCategory?.id == item.id) ? '#FF6C44' : '#ff9966' }]}
                onPress={() => onSelectCategory(item)}
              >
                <Image source={item.img} style={styles.Cimg} />
                <Text style={styles.Cname}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )} />
      </View>)
  }
  return (


    <View style={{ backgroundColor: '#fff', padding: 10 }}>
      <View style={styles.View1}>
        <View>
          <View style={styles.heading}>
            <Text style={styles.h1}>Hello </Text>
            <Text style={styles.h2}>{namex}</Text>
          </View>
          <Text style={styles.h3}>What do you want today ?</Text>
        </View>

        <Image source={{uri: shortImg}} style={styles.headerimg} />
      </View>

      <View style={styles.View2}>
        <View style={styles.input}>
          <Text style={styles.icon}> <FontAwesome5 name='search' size={25} color={'black'} solid /></Text>
          <TextInput
            placeholder="Search for food"
            style={styles.inputtxt}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
          />
        </View>

      </View>

      <ListCategories />

      <View style={styles.View3}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Dishes}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              underlayColor={'white'}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Details', item)}>
              <View style={styles.FoodCard}>
                <Image source={item.img} style={styles.FoodCardImg} />
                <Text style={styles.FoodCardName}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    flexDirection: 'row'
  },
  h1: {
    fontSize: 20,
    color: 'black'
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'

  },
  h3: {
    fontSize: 18,
    color: 'grey'
  },
  headerimg: {
    width: 70,
    height: 70,
    borderRadius: 75,
  },
  cart: {
    marginRight: 10,
    marginTop: 10
  },
  View3: {
    marginBottom: '150%',

  },
  input: {
    height: 50,
    borderRadius: 10,
    width: '70%',
    marginLeft: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    elevation: 10
  },
  inputtxt: {
    fontSize: 18,
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
    width: 155,
    height: 60,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FF6C44',
    margin: 10,
    flexDirection: 'row'
  },
  CCardxx: {
    width: 155,
    height: 60,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#pink',
    margin: 10,
    flexDirection: 'row'
  },
  CCardx: {
    flexDirection: 'row',
  },
  Cimg: {
    width: 50,
    height: 35,
    borderRadius: 30,
    marginLeft: 10,
  },
  Cname: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginLeft: 4
  },
  FoodCard: {
    width: 160,
    height: 240,
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '15%',
    marginHorizontal: '2%',
    elevation: 15,
  },
  FoodCardImg: {
    height: 100,
    width: 130,
    borderRadius: 70,
    margin: '10%',
    resizeMode: 'contain'
  },
  FoodCardName: {
    alignItems: 'center',
    fontSize: 18,
    color: 'black',
  },
  price: {
    marginRight: '10%',
    marginTop: '10%',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },


});


