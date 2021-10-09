import React, {useState, useEffect} from 'react';
import {
    TouchableOpacity,    
    Text,
    StyleSheet,
    View,
    Image,
    Modal,
    ScrollView,
    Button,
    DevSettings
    
    
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ProductCard } from '../ProductCard/Product-card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export function Cart({ navigation }){
     var arraySum = require('array-sum');
    const [newProduct, setNewProduct] = useState('')
    const [myProducts, setMyProducts] = useState([])

    const [productQuantity, setProductQuantity] = useState(0)
    const [requestQuantity, setRequestQuantity] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [megaQuantity, setMegaQuantity] = useState([])
    const [quantityStorage, setQuantityStorage] = useState([])
    const [megaPrice, setMegaPrice] = useState([])
    const [priceStorage, setPriceStorage] = useState([])

    /* ----------------------------- MODAIS -------------------------------- */ 

    const [modalVisible, setModalVisible] = useState(false);
    const [modalDiaaDia, setModalDiaaDia] = useState(false);
    const [modalFrangao, setModalFrangao] = useState(false);
    const [modalMiniChurrasco, setModalMiniChurrasco] = useState(false);
    const [modalChurrasco, setModalChurrasco] = useState(false);
    const [modalSuino, setModalSuino] = useState(false);
    const [modalEntrega, setModalEntrega] = useState(false);
    const [modalResumo, setModalResumo] = useState(false);
    const [modalFinal, setModalFinal] = useState(false);

/* ----------------------------- AÇÕES DE COMPRA -------------------------------- */ 

    let [buyDiaaDia, setBuyDiaaDia] = useState(false)
    let [buyFrangao, setBuyFrangao] = useState(false)
    let [buyMiniChurrasco, setBuyMiniChurrasco] = useState(false)
    let [buyChurrasco, setBuyChurrasco] = useState(false)
    let [buySuino, setBuySuino] = useState(false)

    const [isLoading, setIsLoading] = useState(false)


  /* ----------------------------- AÇÕES DE ENTREGA -------------------------------- */ 
  
  const [selectedDeliveryMode, setSelectedDeliveryMode] = useState();
  const [selectedPaymentMode, setSelectedPaymentMode] = useState();
  const [selectedAddressMode, setSelectedAddressMode] = useState();
  const [editableAddress, setEditableAddress] = useState(false)
  const [isAddress, setIsAddress] = useState(false)
  const [isMyAddress, setIsMyAddress] = useState(false)
  const [isNewAddress, setIsNewAddress] = useState(false)

  let deliveryMode = selectedDeliveryMode
  let paymentMode = selectedPaymentMode
  let addressMode = selectedAddressMode  


  function clearAll() {
    setProductQuantity(0),
    setRequestQuantity(0),
    setMyProducts([]),
    setNewProduct(''),
    setTotalQuantity(0),
    setMegaQuantity([]),
    setQuantityStorage(0),
    setMegaPrice([]),
    
    setModalEntrega(false)
    setModalResumo(false)
    setModalVisible(false)
    setModalFinal(false)
  }

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
      let deliveryMode = selectedDeliveryMode
      let paymentMode = selectedPaymentMode
      let addressMode = selectedAddressMode      
        if(buyDiaaDia == true) {
            const product = {
                title:'Kit Dia-a-dia',
                totalPrice: productQuantity * kits[0].price,
                totalQuantity: Number(productQuantity),                               
                totalQuantity2: Number(productQuantity),
                
                
            }
                                             
                       
              setMyProducts(oldState => [...oldState, product])  

              setMegaQuantity(oldState => [...oldState, product.totalQuantity]) 
              setQuantityStorage(arraySum(megaQuantity))

              setMegaPrice(oldState => [...oldState, product.totalPrice]) 
              setQuantityStorage(arraySum(megaPrice))  

                

                   
      
          setBuyDiaaDia(false)                        
         
     
           

           
        }if(buyFrangao == true) {
            const product = {
                title:'Kit Frangão',
                totalPrice: productQuantity * kits[1].price,
                totalQuantity: productQuantity,
            }
            setMyProducts(oldState => [...oldState, product]) 

            setMegaQuantity(oldState => [...oldState, product.totalQuantity]) 
              setQuantityStorage(arraySum(megaQuantity))  

              setMegaPrice(oldState => [...oldState, product.totalPrice]) 
              setQuantityStorage(arraySum(megaPrice))  

            setBuyFrangao(false) 
         
        }if(buyMiniChurrasco == true) {
            const product = {
                title:'Kit Mini Churrasco',
                totalPrice: productQuantity * kits[2].price,
                totalQuantity: productQuantity,
            }
            setMyProducts(oldState => [...oldState, product]) 

            setMegaQuantity(oldState => [...oldState, product.totalQuantity]) 
              setQuantityStorage(arraySum(megaQuantity)) 
              
              setMegaPrice(oldState => [...oldState, product.totalPrice]) 
              setQuantityStorage(arraySum(megaPrice))  
              
            setBuyMiniChurrasco(false) 
        
        }if(buyChurrasco == true) {
            const product = {
                title:'Kit Churrasco',
                totalPrice: productQuantity * kits[3].price,
                totalQuantity: productQuantity,
            }
            setMyProducts(oldState => [...oldState, product]) 

            setMegaQuantity(oldState => [...oldState, product.totalQuantity]) 
              setQuantityStorage(arraySum(megaQuantity))  

              setMegaPrice(oldState => [...oldState, product.totalPrice]) 
              setQuantityStorage(arraySum(megaPrice))  

            setBuyChurrasco(false) 
         
        }if(buySuino == true) {
            const product = {
                title:'Kit Suíno',
                totalPrice: productQuantity * kits[4].price,
                totalQuantity: productQuantity,
            }
            setMyProducts(oldState => [ ...oldState, product]) 

            setMegaQuantity(oldState => [...oldState, product.totalQuantity]) 
              setQuantityStorage(arraySum(megaQuantity))  

              setMegaPrice(oldState => [...oldState, product.totalPrice]) 
              setQuantityStorage(arraySum(megaPrice))  

            setBuySuino(false) 
        } 
        else {
            
        }

        if(isMyAddress == true) {
          setSelectedAddressMode('Meu Endereço')
        }
        if(isNewAddress == true) {
          setSelectedAddressMode('Novo Endereço')
        }

      }, [isLoading]);

      

    const handleDiaaDia = () => {   

        setIsLoading(true) 
       
        setTimeout(() => {
           
            setBuyDiaaDia(true)
            setIsLoading(false)  
            
            
            
                
           
          
        }, 3000);
        alert('Produto enviado para o carrinho')
        setModalDiaaDia(false)
    }
    const handleFrangao= () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuyFrangao(true)
          
            setIsLoading(false)  
              
                
           
          
        }, 3000);
        alert('Produto enviado para o carrinho')
        setModalFrangao(false)
    }
    const handleMiniChurrasco= () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuyMiniChurrasco(true)
          
            setIsLoading(false)  
              
                
           
          
        }, 3000);
        alert('Produto enviado para o carrinho')
        setModalMiniChurrasco(false)
    }
    const handleChurrasco= () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuyChurrasco(true)
          
            setIsLoading(false)  
              
                
           
          
        }, 3000);
        alert('Produto enviado para o carrinho')
        setModalChurrasco(false)
    }
    const handleSuino= () => {   

        setIsLoading(true)  
        setTimeout(() => {
            
            setBuySuino(true)
          
            setIsLoading(false)  
              
                
           
          
        }, 3000);
        alert('Produto enviado para o carrinho')
        setModalSuino(false)
    }


    function openCart() {
      setModalVisible(true)
    }

    function openDiaaDia() {
      setModalDiaaDia(true)
    }

 


    return (
        <View style={{}}>
          <TouchableOpacity style={{marginBottom:60, left:'31%', backgroundColor:'#e42320', width:60, height:60, borderRadius:90, justifyContent:'center', alignItems:'center'}} onPress={openCart}><Text style={{color:'azure', fontSize:30, fontWeight:'bold', textAlign:'center'}}>🛒</Text></TouchableOpacity>
           
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

        <View style={{backgroundColor:'grey', width:300, height:200, borderTopLeftRadius:55, borderTopRightRadius:55, justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
          <Text style={{color:'azure', fontSize:16}}>Total de itens: {arraySum(megaQuantity)}</Text>
          <Text style={{color:'azure', fontSize:16}} >Valor total: R${arraySum(megaPrice)}</Text>
          <TouchableOpacity onPress={() => setModalEntrega(!modalEntrega)} style={{backgroundColor:'#e42320', width:200, height:50, justifyContent:'center', alignItems:'center', borderRadius:55, marginTop:20}}><Text style={{color:'azure', fontSize:18}}>Finalizar Pedido</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{backgroundColor:'#e42320', width:150, height:40, justifyContent:'center', alignItems:'center', borderRadius:55, marginTop:20}}><Text style={{color:'azure', fontSize:13}}>Continuar Comprando</Text></TouchableOpacity>
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



       {/* ------------------------------------------------------- MODAL ENTREGA --------------------------------------------------------- */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalEntrega}
        onRequestClose={() => {
         
          setModalSuino(!modalEntrega);
        }}
      >
        <View style={styles.deliveryModal}>

          <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}}>Ótimo, vamos finalizar o seu pedido, primeiro, você prefere retirar seu pedido na loja ou que ele seja entregue (frete)?</Text>
      
          <Picker
          style={{width:200, height:50, marginTop:6}}
  selectedValue={selectedDeliveryMode}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedDeliveryMode(itemValue)
  }>
  <Picker.Item color='red' style={{fontSize:18}}  label="Selecionar" value="Retirada" />
  <Picker.Item color='red' style={{fontSize:18}}  label="Retirada" value="Retirada" /> 
  <Picker.Item color='red' style={{fontSize:18}} label="Frete" value="Frete" />
</Picker>

          <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}}>Qual será o método de pagamento?</Text>
      
          <Picker
          style={{width:200, height:50, marginTop:6}}
  selectedValue={selectedPaymentMode}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedPaymentMode(itemValue)
  }>
  <Picker.Item color='red' style={{fontSize:18}}  label="Selecionar" value="Boleto" />
  <Picker.Item color='red' style={{fontSize:18}}  label="Boleto" value="Boleto" />
  <Picker.Item color='red' style={{fontSize:18}} label="Débito" value="Débito" />
  <Picker.Item color='red' style={{fontSize:18}} label="Crédito" value="Crédito" />
  <Picker.Item color='red' style={{fontSize:18}} label="Pix" value="Pix" />
  <Picker.Item color='red' style={{fontSize:18}} label="Dinheiro" value="Dinheiro" />
</Picker>

          <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}}>Qual será o endereço de entrega?</Text>
      
         

  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:20}}>
    <TouchableOpacity onPress={() => {setIsMyAddress(true);setIsNewAddress(false);setSelectedAddressMode('Meu Endereço')}} disabled={isMyAddress}  style={[styles.disabled, isNewAddress ? styles.newAddress : {}]} ><Text style={{color:'red', textAlign:'center', padding:6}}>Meu Endereço</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => {setIsNewAddress(true);setIsMyAddress(false);setSelectedAddressMode('Novo Endereço')}} disabled={isNewAddress}  style={[styles.disabled, isMyAddress ? styles.newAddress : {}]} ><Text style={{color:'red', textAlign:'center', padding:6}}>Novo Endereço</Text></TouchableOpacity>
</View>

{isNewAddress ? <View style={{marginTop:50, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
  <Text style={{marginTop:6}}>Endereço de entrega:</Text>
  <TextInput style={{borderWidth:1, borderColor:'black', fontSize:14, width:300, height:40}} placeholder="Novo Endereço" />
  <Text style={{marginTop:6}}>Número:</Text>
  <TextInput style={{borderWidth:1, borderColor:'black', fontSize:14, width:120, height:40, marginTop:10}} placeholder="Novo Número" />
  <Text style={{marginTop:6}}>Complemento:</Text>
  <TextInput style={{borderWidth:1, borderColor:'black', fontSize:14, width:150, height:40, marginTop:10}} placeholder="Novo Complemento" />
  </View> : null}

  <TouchableOpacity onPress={() => setModalResumo(true)} style={{backgroundColor:"#e42320", width:200, height:40, justifyContent:'center', alignItems:'center', borderRadius:55, marginTop:100}}><Text style={{color:'azure', fontSize:20}}>Fechar Pedido</Text></TouchableOpacity>

        </View>
      </Modal>


       {/* ------------------------------------------------------- MODAL RESUMO DO PEDIDO --------------------------------------------------------- */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalResumo}
        onRequestClose={() => {
         
          setModalSuino(!modalResumo);
        }}
      >
        <View style={styles.deliveryModal}>

        <Text style={{fontSize:21, fontWeight:'bold'}}>Aqui está o resumo do seu pedido:</Text>
        <View style={{borderWidth:2, borderColor:'#e42320', width:200, height:350, justifyContent:'center', alignItems:'center', marginTop:20}}>
          <Text style={{textAlign:'center'}}>Modo de entrega: {deliveryMode}</Text>
          <Text>Modo de pagamento: {paymentMode}</Text>
          <Text style={{textAlign:'center'}} >Endereço de entrega: {addressMode}</Text>

          <View style={{marginTop:40, justifyContent:'center', alignItems:'center'}}>
          <Text>Quantidade de itens: {arraySum(megaQuantity)}</Text>
          <Text>Valor Final: R${arraySum(megaPrice)}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setModalFinal(true)} style={{backgroundColor:"#e42320", width:200, height:40, justifyContent:'center', alignItems:'center', borderRadius:55, marginTop:100}}><Text style={{color:'azure', fontSize:20}}>Finalizar Pedido</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {setModalResumo(false);setModalEntrega(false)}} style={{backgroundColor:"#e42320", width:130, height:20, justifyContent:'center', alignItems:'center', borderRadius:55, marginTop:20}}><Text style={{color:'azure', fontSize:12}}>Voltar Pra Loja</Text></TouchableOpacity>

        </View>
      </Modal>



       {/* ------------------------------------------------------- MODAL PEDIDO EFETUADO --------------------------------------------------------- */}


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalFinal}
        onRequestClose={() => {
         
          setModalSuino(!modalFinal);
        }}
      >
        <View style={styles.finishRequest}>

        <Image style={{width:450, height:450}} source={require("../../assets/finalGreet.png")} />

        <TouchableOpacity  onPress={clearAll}  style={{width:70, height: 70, backgroundColor:'#e42320', borderRadius:90, justifyContent:'center', alignItems:'center'}}><Text style={{color:'azure', fontWeight:'bold', fontSize:30}}>✔</Text></TouchableOpacity>
       
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
    },
    deliveryModal: {
      width: '100%',
      height: '100%',
      backgroundColor: 'azure',
      justifyContent: 'center',
      alignItems: 'center'      
    },
    hidden: {
      display: 'none'
    },
    newAddress: {      
      borderWidth:2,
      borderColor: 'black',
      width:100, 
      height:60,
      marginLeft:10,
      justifyContent:'center',
      alignItems:'center'
    },
    disabled: {      
      borderWidth:10,
      borderColor: 'black',
      width:100, 
      height:60,
      marginLeft:10,
      justifyContent:'center',
      alignItems:'center'
    },
    finishRequest: {
      width: '100%',
      height: '100%',
      backgroundColor: 'azure',
      justifyContent: 'center',
      alignItems: 'center'   
    }
   
});