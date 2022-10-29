import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text 
      style={{
        color:"brown",
        fontWeight:"800",
        fontSize:30,
        paddingLeft:300,
        paddingTop:30

      }}>f</Text>

      <Text 
      style={{
        color:"brown",
        fontWeight:"bold",
        fontSize:50,
        fontFamily:"Times New Roman"
      }}>livio</Text>

      <Text
      style={{
        color:"#fff",
        fontSize:14,
        fontWeight:200,
      
       
      }}>New here? Sign up.</Text>

      <View style={styles.Box}>
      <Text 
      style={{
        color:"#fff",
        fontSize:20,
        fontWeight:"400",

      }}>Email:</Text>

      <TextInput style={styles.Input}/>

      <Text 
      style={{
        color:"#fff",
        fontSize:20,
        fontWeight:"400",
        marginTop:20

      }}>password:</Text>

      <TextInput style={styles.Input}/>

      <TouchableOpacity style={styles.button}>Log in</TouchableOpacity>

      <Text
      style={{
        fontSize:14,
        color:"#fff",
        marginTop:20,
        marginLeft:90      
      }}>Forgotten password?</Text>






      
      </View>


        


   
      
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent:"flex-start",
    alignItems:"center"

    
  },
  Box:{
    paddingTop:70,

  },
  Input:{
    
    borderColor:"brown",
    color:"#fff",
    borderWidth:2,
    width:300,
   marginTop:10,
   
  },

  button:{
    width: 300,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 20,
    color: "brown",
    height: 50,
    justifyContent: "center",
    marginTop:50,
  
    fontFamily: "Calibri",
  },
  
 
 
});
