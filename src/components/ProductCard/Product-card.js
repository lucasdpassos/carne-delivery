import React from 'react';
import {
    TouchableOpacity,    
    Text,
    StyleSheet,
    Image,
    View
} from 'react-native';



export function ProductCard({ title, thumb, totalPrice, totalQuantity }){
    return (

       


        
        <View
        style={styles.button}
        
       
        >   
       
            <Text style={styles.buttonText}>{title}</Text>
            
            <Text style={styles.buttonText}>Quantidade: {totalQuantity}</Text>
            <Text style={styles.buttonText}>Total:R${totalPrice}</Text>
        </View>
            
       
       
      

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e42320',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop: 20,
        width:300,
        height: 60
    },
    buttonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 6
    },
    thumb: {
        width:30,
        height:30
    }
});