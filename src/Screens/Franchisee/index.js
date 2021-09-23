import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity, TextInput, CheckBox, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';





export default function App() {

  

  return (
     
    <View style={styles.container}>

      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:170, marginTop:50, width:400}}>
       <View style={styles.helloHolder}>
       <Image style={styles.avatar} source={require("../../assets/patternpick.png")} />
       <View style={{flexDirection:'column'}}>
         <Text style={{color:'red', fontSize:18}}>Olá,</Text>
         <Text style={{color:'red', fontSize:18, fontWeight:'bold'}}>João da Silva</Text>
       </View>
       </View>
       <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginRight:25}}>
        <Text style={{color:'red'}}>Precisando de ajuda?</Text>
        <Text style={{color:'red', fontWeight:'bold', fontSize:16}}>📞 Fale Conosco</Text>
       </View>
       </View>

      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',    
    alignItems: 'center',    
    zIndex:-1
  },
  helloHolder: {
      width:200,
      height:70,
      backgroundColor:'#e3e3e5',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginRight:50,    
     
      borderRadius:40
  },
  avatar: {
      width:40,
      height:40,
      borderWidth:2,
      borderColor:'red',
      borderRadius:90,
      margin:7
  }
 
 
});
