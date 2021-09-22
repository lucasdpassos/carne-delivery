import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import 'react-native-gesture-handler';





export default function App() {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
            <TextInput style={{width:300, top:160, borderBottomColor:'red', borderBottomWidth:3, fontSize:28, fontWeight:'bold', margin:20}} placeholder="Email" placeholderTextColor={'red'}  />
            <TextInput style={{width:300, top:160, borderBottomColor:'red', borderBottomWidth:3, fontSize:28, fontWeight:'bold', margin:20}} placeholder="Senha" placeholderTextColor={'red'}  />

            <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          color='red'
        />
        <Text style={styles.label}>Permanecer conectado</Text>
      </View>

        <View style={{width:250, justifyContent:'center', alignItems:'center', marginLeft:50, height:200}}>
            <TouchableOpacity style={styles.logInButton}><Text style={{color:'azure', fontSize:22}}>Entrar</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{color:'red', marginTop:10}}>Esqueci minha senha</Text></TouchableOpacity>
        </View>

        </View>

        <Image style={styles.loginImage} source={require("../../assets/animals.png")} />

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
  checkbox: {    
    alignSelf: "center",
    
  },
  label: {
    margin: 5,
    color: 'black'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop:160,
    marginLeft:15
  },
  logInButton: {
      backgroundColor:'tomato',
      color:'azure',
      justifyContent:'center',
      alignItems:'center',
      width:220,
      height:70,
      borderRadius:35
  },
  loginImage: {
      width: 390,
      height:270
  }
 
});
