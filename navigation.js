import React, { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';

import Login from './Login';

import Splash from './Splash';

 const Stack = createNativeStackNavigator()
 
  const SignedInStack = () => (

    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Splash' component={Splash}/>
    </Stack.Navigator>
   </NavigationContainer>

 )
 const SignedOutStack = () => (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        
    </Stack.Navigator>
   </NavigationContainer>
 )


export {SignedInStack,SignedOutStack}

