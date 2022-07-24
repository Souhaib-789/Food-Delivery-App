import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import { AuthContext } from "../Context/AuthContext";
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


export default function Profile({ navigation }) {

  const { user } = useContext(AuthContext)

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [img, setimg] = useState();

  useEffect(() => {
    fetchUsername();

  }, []);

  //Function to upload images to cloud storage
  const uploadImage = async () => {
    const uploadUri = img;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    let filenamex = name + Date.now() + '.' + extension;
    console.log(filenamex)
    const storageRef = storage().ref(`photos/${filenamex}`);
    console.log(storageRef)
    await storageRef.putFile(uploadUri);

    try {
      const url = await storage().ref(`photos/${filenamex}`).getDownloadURL();
      alert('Image uploaded!');
      console.log('UUUURRRRLLL=======>', url)
      await firestore()
        .collection('Users')
        .doc(user.uid)
        .update({
          userImg: url,
        })
      alert('Profile Updated!');
    } catch (e) {
      console.log(e.message);
      return null;
    }
  };



  //Function fetching username
  const fetchUsername = async () => {
    await firestore().collection('Users').where(firestore.FieldPath.documentId(), 'in', [user.uid])
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          let userObj = documentSnapshot.data();
          console.log(userObj)
          setname(userObj.naam)
          setemail(userObj.email)
          setimg(userObj.userImg)
        });
      });
  }



  //Logout function imported from authContxt
  const { logout } = useContext(AuthContext)


  //Function picks image and triggers upload function also
  const PickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setimg(image.path)
      uploadImage();
    });
  }

  return (

    <View style={styles.container}>
      <Text style={styles.head}>Profile</Text>
      <View style={styles.Viewmini}>
        <Image source={{ uri: img }} style={styles.img} />
        <View style={styles.cam}  >
          <FontAwesome name='camera' size={18} color={'white'} solid onPress={PickImage} />
        </View>
        <View style={styles.subdiv}>
          <Text style={styles.txt}>{name}</Text>
          <Text style={styles.txtx}> <FontAwesome5 name='envelope' size={18} color={'black'} solid />  {email}</Text>
        </View>

        <View style={styles.subdiv2}>
          <TouchableOpacity onPress={() => navigation.navigate('Orders')} >
            <Text style={styles.links}><FontAwesome5 name='folder' size={20} color={'grey'} solid />  Your Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('For query contact on you helpline no. 0333-0000000')} >
            <Text style={styles.links}><FontAwesome5 name='phone' size={20} color={'grey'} solid />  Help</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logout()}>
            <Text style={styles.links}>
              <FontAwesome5 name='arrow-up' size={20} color={'grey'} solid />  LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.links,{fontSize: 12}]}><FontAwesome5 name='github' size={10} color={'grey'} solid />  Developed by Souhaib-789</Text>

    </View>
  );
}
const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',

  },
  Viewmini: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: 90

  },
  txt: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 2,
    color: '#FF1717'
  },
  cam: {
    backgroundColor: '#FF1717',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 20,
    position: 'absolute',
    left: '60%',
    bottom: '65%'

  },
  txtx: {
    textDecorationStyle: "solid",
    fontSize: 20,
    margin: 2,
    color: '#FF1717'
  },
  subdiv: {
    alignItems: 'center',
    margin: 20
  },
  subdiv2: {
    marginTop: 50,
    marginRight: "50%"
  },
  links: {
    color: 'grey',
    fontSize: 18,
    margin: '7%',

  }
});


