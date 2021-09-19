import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';





export default function App() {
  return (
    <View style={styles.container}>
    
    <View style={styles.profileSquare}>
    <Image style={styles.profilePic} source={require("../../assets/patternpick.png")} />

    <View style={{display:'flex', flexDirection:'column', padding:15}}>
        <Text style={{color:'azure'}}>Vou receber meu pedido em</Text>
        <Text style={{color:'yellow'}}>-</Text>
    </View>

    </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#f2f2f2',
    alignItems: 'center',    
    zIndex:-1
  },
  profileSquare: {
      width: 400,
      height: 210,
      backgroundColor: '#e42320',
      borderBottomLeftRadius: 55,
      borderBottomRightRadius: 55,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
  },
  profilePic: {
      width: 55,
      height: 55,
      borderRadius: 90,
      borderWidth: 1,
      borderColor: 'yellow',
      marginLeft:20
  } 
});
