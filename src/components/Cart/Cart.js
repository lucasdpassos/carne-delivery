import React, {useState, useEffect} from 'react';
import {
    TouchableOpacity,    
    Text,
    StyleSheet,
    View,
    Image,
    Modal,
    ScrollView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ProductCard } from '../ProductCard/Product-card';



export function Cart(){

    const [newProduct, setNewProduct] = useState('')
    const [myProducts, setMyProducts] = useState([])

    const [productQuantity, setProductQuantity] = useState(0)
    const [requestQuantity, setRequestQuantity] = useState(0)

    /* ----------------------------- MODAIS -------------------------------- */ 

    const [modalVisible, setModalVisible] = useState(false);
    const [modalDiaaDia, setModalDiaaDia] = useState(false);
    const [modalFrangao, setModalFrangao] = useState(false);
    const [modalMiniChurrasco, setModalMiniChurrasco] = useState(false);
    const [modalChurrasco, setModalChurrasco] = useState(false);
    const [modalSuino, setModalSuino] = useState(false);

/* ----------------------------- AÇÕES DE COMPRA -------------------------------- */ 

    let [buyDiaaDia, setBuyDiaaDia] = useState(false)
    let [buyFrangao, setBuyFrangao] = useState(false)
    let [buyMiniChurrasco, setBuyMiniChurrasco] = useState(false)
    let [buyChurrasco, setBuyChurrasco] = useState(false)
    let [buySuino, setBuySuino] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const kits = [
        {
          id: 1,
          name: 'Dia-a-Dia',
          price: 140,
        },
        {
          name: 'Frangão',
          price: 80
        },
        {
          name: 'Churrasco',
          price: 100,
        },
        {
          name: 'Churrasco',
          price: 150
        },
        {
          name: 'Suíno',
          price: 200
        },
      ]

    
     
    

    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {        
        if(buyDiaaDia == true) {
            const product = {
                title:'Kit Dia-a-dia',
                totalPrice: productQuantity * kits[0].price,
                            
                
            }
            setMyProducts(oldState => [...oldState, product]) 
            
            var totalQuantity = 2 + 3
            setRequestQuantity(totalQuantity)
            setBuyDiaaDia(false) 
        }if(buyFrangao == true) {
            const product = {
                title:'Kit Frangão',
                totalPrice: productQuantity * kits[1].price,
                totalQuantity: productQuantity,
            }
            setMyProducts(oldState => [...oldState, product]) 
            setBuyFrangao(false) 
         
        }if(buyMiniChurrasco == true) {
            const product = {
                title:'Kit Mini Churrasco',
                totalPrice: productQuantity * kits[2].price,
                totalQuantity: productQuantity,
            }
            setMyProducts(oldState => [...oldState, product]) 
            setBuyMiniChurrasco(false) 
        
        }if(buyChurrasco == true) {
            const product = {
                title:'Kit Churrasco',
                totalPrice: productQuantity * kits[3].price,
                totalQuantity: productQuantity,
            }
            setMyProducts(oldState => [...oldState, product]) 
            setBuyChurrasco(false) 
         
        }if(buySuino == true) {
            const product = {
                title:'Kit Suíno',
                totalPrice: productQuantity * kits[4].price,
                totalQuantity: productQuantity,
            }
            setMyProducts(oldState => [...oldState, product]) 
            setBuySuino(false) 
        } 
        else {
            
        }
      }, [isLoading]);


    const handleDiaaDia = () => {   

        setIsLoading(true) 
       
        setTimeout(() => {
           
            setBuyDiaaDia(true)
            setIsLoading(false)  
              
                
           
          
        }, 3000);
    }
    const handleFrangao= () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuyFrangao(true)
          
            setIsLoading(false)  
              
                
           
          
        }, 3000);
    }
    const handleMiniChurrasco= () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuyMiniChurrasco(true)
          
            setIsLoading(false)  
              
                
           
          
        }, 3000);
    }
    const handleChurrasco= () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuyChurrasco(true)
          
            setIsLoading(false)  
              
                
           
          
        }, 3000);
    }
    const handleSuino= () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuySuino(true)
          
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
        <TouchableOpacity onPress={() => setModalDiaaDia(true)} >
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/dia-a-dia.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit</Text>
          <Text style={styles.cardTitle}>{kits[0].name}</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalFrangao(true)} >
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/frangao.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit</Text>
          <Text style={styles.cardTitle}>{kits[1].name}</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalMiniChurrasco(true)}>
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/mini-churrasco.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit Mini</Text>
          <Text style={styles.cardTitle}>{kits[2].name}</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalChurrasco(true)} >
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/churrasco.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit</Text>
          <Text style={styles.cardTitle}>{kits[3].name}</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => setModalSuino(true)}>
        <View style={styles.kitCard}>
          <Image style={styles.cardImage} source={require("../../assets/suino.png")} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={styles.cardTitle}>Kit</Text>
          <Text style={styles.cardTitle}>{kits[4].name}</Text>
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
          <ScrollView>
        {

myProducts.map(product => 
<ProductCard title={product.title} totalPrice={product.totalPrice} totalQuantity={product.totalQuantity} />
)
}
        </ScrollView>

        <View style={{backgroundColor:'grey', width:300, height:200, borderTopLeftRadius:55, borderTopRightRadius:55}}>
          <Text>{requestQuantity}</Text>
        </View>
        </View>

      </Modal>


       {/* ------------------------------------------------------- MODAL DIA-A-DIA --------------------------------------------------------- */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalDiaaDia}
        onRequestClose={() => {
         
          setModalDiaaDia(!modalDiaaDia);
        }}
      >
        <View style={styles.kitModal}>
        <Image style={{width:100, height:100}} source={require("../../assets/dia-a-dia.png")} />
            <Text style={{fontWeight:'bold', fontSize:20}}>{kits[0].name}</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text>Preço:</Text><Text>R${kits[0].price}</Text>
            </View>
            <TouchableOpacity onPress={() => alert('Em construção')} style={{backgroundColor:'red', borderRadius:55, width:120, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:18, color:'azure'}}>🥩 Conteúdo</Text></TouchableOpacity>

            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:60}}>
              <View>
                <TextInput  onChangeText={setProductQuantity}
        value={productQuantity} keyboardType='numeric' style={{width:50, height: 40, borderWidth:2, borderColor:'black', justifyContent:'center', alignItems:'center', fontSize:18, textAlign:'center'}} />
              </View>
            <TouchableOpacity onPress={handleDiaaDia} style={{marginTop:10}}><Text style={{fontSize:18, fontWeight:'bold'}}>Comprar</Text></TouchableOpacity>
            </View>

        </View>
      </Modal>



       {/* ------------------------------------------------------- MODAL FRANGÃO --------------------------------------------------------- */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalFrangao}
        onRequestClose={() => {
         
          setModalFrangao(!modalFrangao);
        }}
      >
        <View style={styles.kitModal}>
        <Image style={{width:100, height:100}} source={require("../../assets/frangao.png")} />
            <Text style={{fontWeight:'bold', fontSize:20}}>{kits[1].name}</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text>Preço:</Text><Text>R${kits[1].price}</Text>
            </View>
            <TouchableOpacity onPress={() => alert('Em construção')} style={{backgroundColor:'red', borderRadius:55, width:120, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:18, color:'azure'}}>🥩 Conteúdo</Text></TouchableOpacity>

            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:60}}>
              <View>
                <TextInput  onChangeText={setProductQuantity}
        value={productQuantity} keyboardType='numeric' style={{width:50, height: 40, borderWidth:2, borderColor:'black', justifyContent:'center', alignItems:'center', fontSize:18, textAlign:'center'}} />
              </View>
            <TouchableOpacity onPress={handleFrangao} style={{marginTop:10}}><Text style={{fontSize:18, fontWeight:'bold'}}>Comprar</Text></TouchableOpacity>
            </View>

        </View>
      </Modal>


       {/* ------------------------------------------------------- MODAL MINI CHURRASCO --------------------------------------------------------- */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalMiniChurrasco}
        onRequestClose={() => {
         
          setModalMiniChurrasco(!modalMiniChurrasco);
        }}
      >
        <View style={styles.kitModal}>
        <Image style={{width:100, height:100}} source={require("../../assets/mini-churrasco.png")} />
            <Text style={{fontWeight:'bold', fontSize:20}}>Mini {kits[2].name}</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text>Preço:</Text><Text>R${kits[2].price}</Text>
            </View>
            <TouchableOpacity onPress={() => alert('Em construção')} style={{backgroundColor:'red', borderRadius:55, width:120, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:18, color:'azure'}}>🥩 Conteúdo</Text></TouchableOpacity>

            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:60}}>
              <View>
                <TextInput  onChangeText={setProductQuantity}
        value={productQuantity} keyboardType='numeric' style={{width:50, height: 40, borderWidth:2, borderColor:'black', justifyContent:'center', alignItems:'center', fontSize:18, textAlign:'center'}} />
              </View>
            <TouchableOpacity onPress={handleMiniChurrasco} style={{marginTop:10}}><Text style={{fontSize:18, fontWeight:'bold'}}>Comprar</Text></TouchableOpacity>
            </View>

        </View>
      </Modal>



       {/* ------------------------------------------------------- MODAL CHURRASCO --------------------------------------------------------- */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalChurrasco}
        onRequestClose={() => {
         
          setModalChurrasco(!modalChurrasco);
        }}
      >
        <View style={styles.kitModal}>
        <Image style={{width:100, height:100}} source={require("../../assets/churrasco.png")} />
            <Text style={{fontWeight:'bold', fontSize:20}}>{kits[3].name}</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text>Preço:</Text><Text>R${kits[3].price}</Text>
            </View>
            <TouchableOpacity onPress={() => alert('Em construção')} style={{backgroundColor:'red', borderRadius:55, width:120, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:18, color:'azure'}}>🥩 Conteúdo</Text></TouchableOpacity>

            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:60}}>
              <View>
                <TextInput  onChangeText={setProductQuantity}
        value={productQuantity} keyboardType='numeric' style={{width:50, height: 40, borderWidth:2, borderColor:'black', justifyContent:'center', alignItems:'center', fontSize:18, textAlign:'center'}} />
              </View>
            <TouchableOpacity onPress={handleChurrasco} style={{marginTop:10}}><Text style={{fontSize:18, fontWeight:'bold'}}>Comprar</Text></TouchableOpacity>
            </View>

        </View>
      </Modal>


       {/* ------------------------------------------------------- MODAL SUINO --------------------------------------------------------- */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalSuino}
        onRequestClose={() => {
         
          setModalSuino(!modalSuino);
        }}
      >
        <View style={styles.kitModal}>
        <Image style={{width:100, height:100}} source={require("../../assets/suino.png")} />
            <Text style={{fontWeight:'bold', fontSize:20}}>{kits[4].name}</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text>Preço:</Text><Text>R${kits[4].price}</Text>
            </View>
            <TouchableOpacity onPress={() => alert('Em construção')} style={{backgroundColor:'red', borderRadius:55, width:120, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:18, color:'azure'}}>🥩 Conteúdo</Text></TouchableOpacity>

            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:60}}>
              <View>
                <TextInput  onChangeText={setProductQuantity}
        value={productQuantity} keyboardType='numeric' style={{width:50, height: 40, borderWidth:2, borderColor:'black', justifyContent:'center', alignItems:'center', fontSize:18, textAlign:'center'}} />
              </View>
            <TouchableOpacity onPress={handleSuino} style={{marginTop:10}}><Text style={{fontSize:18, fontWeight:'bold'}}>Comprar</Text></TouchableOpacity>
            </View>

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
    },
    kitModal: {
      width: '70%',
      height: '70%',
      backgroundColor: 'azure',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 60,
      marginTop: 200,
      borderRadius: 55
    }
   
});