import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../Screens/Welcome/index'


const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator 
    initialRouteName="Welcome"
    screenOptions ={{
        headerShown: false
    }}
    >
        <Stack.Screen name="Welcome" component={Welcome} / >
       
    </Stack.Navigator>
)