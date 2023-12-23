import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/Stack'


import Home from './src/screens/Home.js'
import Dicas from './src/screens/Dicas.js'
import Listagem from './src/screens/Listagem.js'
import Escreva from './src/screens/Escreva.js'

const Stack = createStackNavigator()

export default class App extends Component {
  render(){
    return(
     
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Página inicial" component={Home}/>
          <Stack.Screen name="Dicas" component={Dicas}/>
          <Stack.Screen name="Escreva" component={Escreva}/>
          <Stack.Screen name="Lista de redações" component={Listagem}/>
 
        </Stack.Navigator>
      </NavigationContainer>
        
      
      )
  }
    
}