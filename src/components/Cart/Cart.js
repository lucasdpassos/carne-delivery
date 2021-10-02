import React, {useState, useEffect} from 'react';
import {
    TouchableOpacity,    
    Text,
    StyleSheet,
    View,
    Image,
    Modal
} from 'react-native';
import { ProductCard } from '../ProductCard/Product-card';



export function Cart(){

    const [newProduct, setNewProduct] = useState('')
    const [myProducts, setMyProducts] = useState([])

    const [modalVisible, setModalVisible] = useState(false);
    const [modalDiaaDia, setModalDiaaDia] = useState(false);

    let [buyDiaaDia, setBuyDiaaDia] = useState(false)

    let [buyFrangao, setBuyFrangao] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

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

    

    

    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {        
        if(buyDiaaDia == true) {
            const product = {
                title:'Kit Dia-a-dia',
                totalPrice: '40',
                totalQuantity: '300',
            }
            setMyProducts(oldState => [...oldState, product]) 
            setBuyDiaaDia(false) 
        }if(buyFrangao == true) {
            const product = {
                title:'Kit Frangão',
                totalPrice: '40',
                totalQuantity: '300',
            }
            setMyProducts(oldState => [...oldState, product]) 
            setBuyFrangao(false) 
        } 
        else {
            
        }
      }, [isLoading]);


    const handleNewProduct = () => {   

        setIsLoading(true) 
       
        setTimeout(() => {
           
            setBuyDiaaDia(true)
            setIsLoading(false)  
              
                
           
          
        }, 3000);
    }
    const handleNewProduct2 = () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuyFrangao(true)
          
            setIsLoading(false)  
              
                
           
          
        }, 3000);
    }


    function openCart() {
      setModalVisible(true)
    }

    function openDiaaDia() {
      setModalDiaaDia(true)
    }


    return (
        <View style={{}}>
          <TouchableOpacity onPress={openCart}><Text>Carrinho</Text></TouchableOpacity>
           
            <View style={styles.kitList}>
        <TouchableOpacity onPress={openDiaaDia} >
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/dia-a-dia.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit</Text>
          <Text style={styles.cardTitle}>{kits[0].nome}</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNewProduct2} >
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/frangao.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit</Text>
          <Text style={styles.cardTitle}>{kits[1].nome}</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/mini-churrasco.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit Mini</Text>
          <Text style={styles.cardTitle}>{kits[2].nome}</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/churrasco.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit</Text>
          <Text style={styles.cardTitle}>{kits[3].nome}</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/suino.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit</Text>
          <Text style={styles.cardTitle}>{kits[4].nome}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
         



        {/* MODAL DO CARRINHO */}

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.innerCart}>
        {

myProducts.map(product => 
<ProductCard title={product.title} totalPrice={product.totalPrice} totalQuantity={product.totalQuantity} />
)
}
        </View>
      </Modal>


       {/* MODAL DIA-A-DIA */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalDiaaDia}
        onRequestClose={() => {
         
          setModalDiaaDia(!modalDiaaDia);
        }}
      >
        <View style={styles.innerCart}>

            <Text>Este é o modal do kit {kits[0].nome}</Text>
            <Text>Preço: R$140,00</Text>
            <Text>Contem: Peças de carne</Text>
            <TouchableOpacity><Text>Comprar</Text></TouchableOpacity>

        </View>
      </Modal>




      

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
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