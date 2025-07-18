import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>

      
      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate('SignUp')}
      >
          <Text style={{color:'white'}}>sign in</Text>
      </TouchableOpacity>

      <View style={styles.image}>
         <Image
        source={require("../assets/welcomee.png")}
        style={styles.logo}
      />
      </View>

      <View style={styles.footer}>
        
        <Text style={{fontSize:20,fontWeight:500,color:'white'}}>Take control of your spending,</Text>
        <Text style={{fontSize:18,fontWeight:300, color:'white'}}>save smarter</Text>

      
          
      </View>

     
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('Login')}
      >
          <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  signUp:{
    position: 'absolute',
    top: 20,
    right: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "white"
  },
  logo: {
    width: 100,
    height: 300,
    marginBottom: 30,
    resizeMode: 'contain',
    aspectRatio: 1
  },
    

     login: {
      position: 'absolute',
        bottom: 3,
        width: '130%',
        padding: 12,
        alignItems: 'center',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 8,
      overflow: 'hidden',
      width: "100%"
      
    },
    buttonText:{
      fontSize: 20,
      color:"white",
      fontWeight: 900, 
      
      

      
    }
});