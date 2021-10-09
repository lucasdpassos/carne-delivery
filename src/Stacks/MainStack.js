import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../Screens/Welcome/index'
import Store from '../Screens/Store/index'
import Login from '../Screens/Login/index'
import Franchisee from '../Screens/Franchisee/index'



const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator 
    initialRouteName="Welcome"
    screenOptions ={{
        headerShown: false
    }}
    >
        <Stack.Screen name="Welcome" component={Welcome} / >
        <Stack.Screen name="Store" component={Store} / >
        <Stack.Screen name="Login" component={Login} / >
        <Stack.Screen name="Franchisee" component={Franchisee} / >
       
    </Stack.Navigator>
)