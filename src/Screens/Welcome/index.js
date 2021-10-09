import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity, Linking } from 'react-native';
import 'react-native-gesture-handler';



const image = { uri: "https://i.ibb.co/1mSQzBQ/Fundo-App.jpg" }



export default function App({ navigation }) {


  const redirect = () => {
    Linking.openURL('carnedecasa.jotaja.com.br')
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    <View style={styles.menuHolder}>
      <Image source={require("../../assets/carnedelivery-icon.png")} style={styles.deliveryLogo} />
      <Text style={{color:'azure', fontWeight:'bold', fontSize:50}}>carnedelivery™</Text>
      <Text style={{color:'azure', fontSize:24, padding:10}}>Qualidade, preço e sabor, aqui tem!</Text>
      <TouchableOpacity
        style={styles.buttonPedir}    
        onPress={() => Linking.openURL('https://carnedecasa.jotaja.com.br')}   
      >
        <Text style={{color:'red', fontSize:32, fontWeight:'bold'}}>Peça Já!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonFranqueado}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{color:'azure', fontSize:15}}>Área do Franqueado</Text>
      </TouchableOpacity>
    </View>

      <Image source={require("../../assets/carneIcons.png")} style={styles.carneIcons} />

      <View style={{backgroundColor:'#e42320', width:400, height:50, position:'absolute', top:760, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

       <Image source={require("../../assets/carnedecasabranco.png")} style={styles.miniIcon} />
        <Text style={{color:'azure'}}>Ainda não é um franqueado?</Text><TouchableOpacity  onPress={() => Linking.openURL('https://carnedecasa.com.br/index.php/franquia/')}><Text style={{color:'azure', fontWeight:'bold', marginLeft:5}}>SAIBA MAIS!</Text></TouchableOpacity>
        


      </View>

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
    bottom:-270
    
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
  buttonPedir: {
    alignItems: "center",
    backgroundColor: "azure",
    width: 280,
    height: 60,
    borderRadius: 55,
    justifyContent: 'center'
    
    
  },
  buttonFranqueado: {
    alignItems: "center",
    width: 200,
    height: 60,
    borderRadius: 55,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "azure",
    marginTop:19
    
    
  },
  miniIcon: {
    width: 25,
    height: 25,
    marginRight: 5
    
    
  }
});
