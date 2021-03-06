import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity, TextInput, CheckBox, SafeAreaView, Modal } from 'react-native';
import 'react-native-gesture-handler';
import {Cart} from '../../components/Cart/Cart'




export default function App({ navigation }) {


  
  

  const [newProduct, setNewProduct] = useState('')
  const [myProducts, setMyProducts] = useState([])

  const kits = [
    {
      id: 1,
      nome: 'Dia-a-Dia'
    },
    {
      nome: 'Frangão'
    },
    {
      nome: 'Churrasco'
    },
    {
      nome: 'Churrasco'
    },
    {
      nome: 'Suíno'
    },
  ]




  return (
     
    <View style={styles.container}>

      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:170, marginTop:50, width:400}}>
       <View style={styles.helloHolder}>
       <Image style={styles.avatar} source={require("../../assets/patternpick.png")} />
       <View style={{flexDirection:'column'}}>
         <Text style={{color:'#e42320', fontSize:18}}>Olá,</Text>
         <Text style={{color:'#e42320', fontSize:18, fontWeight:'bold'}}>João da Silva</Text>
         <TouchableOpacity  onPress={() => navigation.navigate('Welcome')} ><Text style={{color:'black', fontSize:14}}>Voltar</Text></TouchableOpacity>
       </View>
       </View>
       <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginRight:25}}>
        <Text style={{color:'#e42320'}}>Precisando de ajuda?</Text>
        <TouchableOpacity><Text style={{color:'#e42320', fontWeight:'bold', fontSize:16}}>📞 Fale Conosco</Text></TouchableOpacity>
       </View>
       </View>

      <Text style={{color:'black', fontSize:14, fontStyle:'italic'}}>Peça já seus kits ---------------------------------------------------------------</Text>
     
      <Cart navigation={navigation} title="opa" />
    <Text style={{color:'red', marginTop:15}}>------------------------- Ver mais kits -------------------------</Text>
    <Text style={{color:'black', marginTop:15, fontStyle:'italic'}}>Peça já seus produtos -----------------------------------------------------</Text>


    








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
      borderColor:'#e42320',
      borderRadius:90,
      margin:7
  },
  kitList: {    
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height: 350,
    width: 300
  },
  kitCard: {
    width: 200,
    height: 60,
    backgroundColor: '#e42320',
    borderRadius:45,   
    flexDirection:'row',
    margin:6
   
  },
  cardTitle: {
    fontSize:20,
    color:'azure',
    fontWeight:'bold'
  },
  cardImage: {
    width:45,
    height:45,
    margin:10
  },
  innerCart: {
    width: '100%',
    height: '100%',
    backgroundColor: 'azure',
    justifyContent: 'center',
    alignItems: 'center'
  }
 
 
});
