import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';





export default function App({ navigation }) {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
            <TextInput style={{width:300, top:160, borderBottomColor:'#e42320', borderBottomWidth:3, fontSize:28, fontWeight:'bold', margin:20}} placeholder="Email" placeholderTextColor={'#e42320'}  />
            <TextInput style={{width:300, top:160, borderBottomColor:'#e42320', borderBottomWidth:3, fontSize:28, fontWeight:'bold', margin:20}} placeholder="Senha" placeholderTextColor={'#e42320'}  />

            <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          color='#e42320'
        />
        <Text style={styles.label}>Permanecer conectado</Text>
      </View>

        <View style={{width:250, justifyContent:'center', alignItems:'center', marginLeft:50, height:200}}>
            <TouchableOpacity onPress={() => navigation.navigate('Franchisee')} style={styles.logInButton}><Text style={{color:'azure', fontSize:22}}>Entrar</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{color:'#e42320', marginTop:10}}>Esqueci minha senha</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}><Text style={{color:'#e42320', marginTop:10}}>Voltar</Text></TouchableOpacity>
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
      backgroundColor:'#e42320',
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
