import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./src/Screens/Main";
import ShoppingCart from "./src/Screens/ShoppingCart";
import WelcomeScreen from "./src/Components/WelcomeScreen";
import Details from "./src/Screens/Details";
import WelcomeScreen2 from "./src/Components/WelcomeScreen2";
import Profile from "./src/Screens/Profile";
import Login from "./src/Login/Login";
import Register from "./src/Login/Register";
import Thankyou from "./src/Components/Thankyou";
import Orders from "./src/Components/Orders";
// import { AuthContext } from "./src/Login/AuthProvider";
// import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();


export default function App() {

// const {user, setuser} = useContext(AuthContext);
// const [initializing, setInitializing] = useState(true);

// const onAuthStateChanged =(user)=>{
//   setuser(user);
//   if (initializing) setInitializing(false);
// }

// useEffect(() => {
//   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   return subscriber; // unsubscribe on unmount
// }, []);

// if (initializing) return null;

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Orders" component={Orders} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

  },
  txt: {
    fontWeight: "bold",
    fontSize: 30
  }
});


