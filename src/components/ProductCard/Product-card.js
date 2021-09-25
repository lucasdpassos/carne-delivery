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
        <Image style={styles.thumb} source={thumb} />
            <Text style={styles.buttonText}>{title}</Text>
            <Text style={styles.buttonText}>{totalPrice}</Text>
            <Text style={styles.buttonText}>{totalQuantity}</Text>
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
    thumb: {
        width:30,
        height:30
    }
});