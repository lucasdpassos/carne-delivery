import React, {useState} from 'react';
import {
    TouchableOpacity,    
    Text,
    StyleSheet,
    View
} from 'react-native';
import { ProductCard } from '../ProductCard/Product-card';



export function Cart(){

    const [newProduct, setNewProduct] = useState('')
    const [myProducts, setMyProducts] = useState([])

    const product = {
        title:'Carne assada',
        totalPrice: '40',
        totalQuantity: '300',
    }

 

    function handleNewProduct(){
        setMyProducts(oldState => [...oldState, product])
        alert(myProducts)
    }  



    return (
        <View style={{marginTop:400}}>

            <TouchableOpacity onPress={handleNewProduct}>
            <View style={{backgroundColor:'purple', width: 200, height:40, marginBottom:120, flexDirection:'row', justifyContent:'center'}}>
                <Text>{product.title}</Text>
                <Text>{product.totalPrice}</Text>
                <Text>{product.totalQuantity}</Text>
            </View>
            </ TouchableOpacity>

            {

                myProducts.map(product => 
        <ProductCard title={product.title} totalPrice={product.totalPrice} totalQuantity={product.totalQuantity} />
         )
            }

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
});