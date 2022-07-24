import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Thankyou({navigation}){
  return(

    <View style={styles.container}>
       <View style={styles.circle}>       
      <FontAwesome5 name='check' size={65} color={'white'} solid style={styles.icon} />
      </View>
      <View style={{margin: 40}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>Thank You </Text>
      </View>
      <View>
          <Text style={{fontSize: 20,textAlign: 'center',fontStyle: 'italic', color: 'black'}}>Your order has been placed succcessfully!</Text>
      </View>

      <View style={{marginTop: 50}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <Text style={{fontSize: 18, }}>Continue Shopping   <FontAwesome5 name='arrow-right' size={18} color={'#FF1717'} solid style={styles.icon} />
</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
   alignItems: "center",
   justifyContent: "center",
   flex: 1,
   backgroundColor: '#fff'
  
 },
 circle:{
backgroundColor: '#FF1717',
width: 170,
height: 170,
borderRadius: 100,
alignItems: 'center',
justifyContent: 'center'
 },
 txt:{
  fontWeight: "bold",
  fontSize: 30
 }
});


