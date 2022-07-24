import React from "react";
import App from "./App";
import { AuthProvider } from "./src/Context/AuthContext";
import CartState from "./src/Context/CartContext";




export default function Hub() {
   
    
    return (
        <AuthProvider>
        <CartState>
       <App/>
        </CartState>
      </AuthProvider>


    );

            }





