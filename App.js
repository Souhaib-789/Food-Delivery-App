import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./src/Screens/Main";
import ShoppingCart from "./src/Screens/ShoppingCart";
import WelcomeScreen from "./src/Components/WelcomeScreen";
import Details from "./src/Screens/Details";
import Profile from "./src/Screens/Profile";
import Login from "./src/Login/Login";
import Register from "./src/Login/Register";
import Thankyou from "./src/Components/Thankyou";
import Orders from "./src/Components/Orders";
import OrderNow from "./src/Screens/OrderNow";
import auth from '@react-native-firebase/auth';
// import CartState from "./src/Context/CartContext";
import { AuthContext } from "./src/Context/AuthContext";


const Stack = createNativeStackNavigator();


export default function App() {

    const { user, setUser } = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true);


    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        console.log(user)
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;

    }, []);

    if (initializing) return null;

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >

                {user ?
                    <>
                        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                        <Stack.Screen name="Main" component={Main} />
                        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name="Thankyou" component={Thankyou} />
                        <Stack.Screen name="Details" component={Details} />
                        <Stack.Screen name="Orders" component={Orders} />
                        <Stack.Screen name="OrderNow" component={OrderNow} />
                    </>
                    :
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </>
                }

            </Stack.Navigator>
        </NavigationContainer>

    );
}





