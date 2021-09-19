import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../Screens/Welcome/index'
import Store from '../Screens/Store/index'


const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator 
    initialRouteName="Store"
    screenOptions ={{
        headerShown: false
    }}
    >
        <Stack.Screen name="Welcome" component={Welcome} / >
        <Stack.Screen name="Store" component={Store} / >
       
    </Stack.Navigator>
)