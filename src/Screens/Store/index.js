import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import Carousel from '../../components/Carousel/Carousel'




export default function App() {
  return (
    <View style={styles.container}>
    
    <View style={styles.profileSquare}>
    <Image style={styles.profilePic} source={require("../../assets/patternpick.png")} />

    <View style={{display:'flex', flexDirection:'column', padding:15}}>
        <Text style={{color:'azure'}}>Vou receber meu pedido em</Text>
        <Text style={{color:'yellow'}}>Rua Barão do Amazonas - 221 - Niterói</Text>
    </View>
        <TextInput  placeholder=" 🔎 Procure pela sua carne preferida" style={{backgroundColor:'azure', width:300, top:60, right:300}} />
    </View>

    <Carousel />

    <View style={{width:300, height:150, display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
    <Pressable style={styles.storeCategoryBtn}><Text style={styles.storeCategoryText}>Carne</Text></Pressable>
    <Pressable style={styles.storeCategoryBtn}><Text style={styles.storeCategoryText}>Frango</Text></Pressable>
    <Pressable style={styles.storeCategoryBtn}><Text style={styles.storeCategoryText}>Suíno</Text></Pressable>
    <Pressable style={styles.storeCategoryBtn}><Text style={styles.storeCategoryText}>Frios</Text></Pressable>
    <Pressable style={styles.storeCategoryBtn}><Text style={styles.storeCategoryText}>Linguiça</Text></Pressable>
    <Pressable style={styles.storeCategoryBtnPremium}><Text style={{color:'gold', fontSize:14, textAlign:'center', fontWeight:'bold'}}>Carnes Premium</Text></Pressable>

    </View>

    <View style={styles.promotionSquare}>
      <Text style={{left:40, margin:20}}>Promoções ---------------------------------------------</Text>

      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
      <Image style={styles.promotionImages} source={require("../../assets/peito.png")} />
      <Image style={styles.promotionImages} source={require("../../assets/pica.png")} />
      <Image style={styles.promotionImages} source={require("../../assets/ling.png")} />
  
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
  },
  storeCategoryBtn: {
    backgroundColor:'#e42320', 
    height:50, 
    width:90, 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:55,
    margin: 4
    

  },
  storeCategoryBtnPremium: {
    backgroundColor:'black', 
    height:50, 
    width:90, 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:55,
    margin: 4
    

  },
  storeCategoryText: {
    color: 'azure',
    fontSize:19,
    fontWeight:'bold'
  },
  promotionSquare: {
    width: 400,
    height: 170,
    backgroundColor: '#e3e3e5',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
    
  },
  promotionImages: {
    width: 100,
    height:80,
    borderRadius:20
  } 
});
