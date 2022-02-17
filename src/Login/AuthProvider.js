// import React, { createContext, useState } from "react";
// import auth from '@react-native-firebase/auth';

// export const AuthContext = createContext();


// export const AuthProvider = ({children}) => {
//     const [user, setuser] = useState(null);

//     return(
//         <AuthContext.Provider
        
//         value={{
//             user,
//             setuser,

//             Login : async (email,password) =>{
//                 try{
//                    await auth().signInWithEmailAndPassword(email, password)
//                 } catch(err) {
//                     console.log(err)
//                 }
//             },

//             Register : async (email, password) => {
//                 try{
//                     await auth().createUserWithEmailAndPassword(email, password);
//                 } catch(err) {
//                     console.log(err)
//                 }
//             },

//             SignOut : async () => {
//                 try{
//                     await auth().signOut();
//                 } catch(err){
//                     console.log(err)
//                 }
//             }

//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }