import React, { createContext,  useReducer } from 'react';
import { Reducer } from './CartReducer';
export const CartContext = createContext();

export default function CartState({children}){



const initialState ={

    showCart : false,
    cartItems: []
};




const [state,dispatch] = useReducer(Reducer,initialState);

const addToCart=(item)=>{
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
}

const removeItem=(id)=>{
    dispatch({
        type: 'REMOVE_ITEM',
        payload: id
    })
}

   const increment=(id)=>{
       return dispatch({
           type : 'INCREMENT',
           payload : id,
       })
   }
    

    return(

        <CartContext.Provider value ={ {
            showCart : state.showcart,
            cartItems : state.cartItems,
            addToCart,
            removeItem,
            increment
         }}>
             {children}
        </CartContext.Provider>
    );
}