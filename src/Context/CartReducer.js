
export const Reducer =(state,action)=>{
   switch(action.type){
       case 'ADD_TO_CART' :{
           return {
               ...state,
               cartItems: [...state.cartItems, action.payload]
           }
           
       }

       case 'REMOVE_ITEM':{
           return{
               ...state,
               cartItems: state.cartItems.filter(item => item.id !== action.payload)
           }
       }
       case 'INCREMENT': {
        return{
            ...state,
               cartItems: [...state.cartItems.quantity + 1, action.payload]
        }
       
    };
       default : 
       return state;
   }
}

