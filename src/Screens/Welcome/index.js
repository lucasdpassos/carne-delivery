import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import 'react-native-gesture-handler';



const image = { uri: "https://i.ibb.co/1mSQzBQ/Fundo-App.jpg" }


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    <View style={styles.menuHolder}>
      <Image source={require("../../assets/carnedelivery-icon.png")} style={styles.deliveryLogo} />
      <Pressable styles={styles.pedirAgora}><Text>Peça Já!</Text></Pressable>
    </View>

      <Image source={require("../../assets/carneIcons.png")} style={styles.carneIcons} />
     
    </ImageBackground>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:-1
  },
  image: {
    width: '100%',
    flex: 1,
    justifyContent: "center"
  },
  carneIcons: {
    width:'100%',
    maxHeight:700,    
    bottom:-300
    
  },
  deliveryLogo : {
    width:130,
    height:130
    
  },
  menuHolder: {
    display: 'flex',
    flexDirection: 'column',
    height:370,
    alignItems: 'center',
    justifyContent:'center',   
    top:240
  },
  pedirAgora: {
    backgroundColor: 'azure',
    height: 70,
    width: 120
  }
});
