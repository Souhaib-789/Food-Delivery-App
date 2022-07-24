import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export  const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
console.log('ooooooooooooooooooooop=========>',user)
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            alert('Welcome!!')
          } catch (e) {
            console.log(e.message);
            alert('Error !' , e.message)

          }
        },
        register: async (email, password, name) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password, name)
            .then(() => {
                alert('User account created !!')
               firestore().collection('Users').doc(auth().currentUser.uid)
              .set({
                naam : name,
                 email: email,
                 createdAt: firestore.Timestamp.fromDate(new Date()),
                 userImg: null,
             })

              //ensure we catch any errors at this stage to advise us if something does go wrong
              .catch(error => {
                  console.log('Something went wrong with added user to firestore: ', error);
              })
            }) 
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });
          } catch (e) {
            console.log(e);
          }
        },
        
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};




