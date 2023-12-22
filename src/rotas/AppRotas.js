import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from "./ProdutorRotas";
import MelhoresProdutoresRotas from "./MelhoresProdutoresRotas";

import Coracao from '../assets/coracao.svg'; // com uma letra maiúscula um svg se torna um componente
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();//criando uma Tab

export default function AppRotas() {
    return  <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({ //retornando um objeto com uma função dentro dele
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let Icon = Home; // componente padrão let

          if (route.name == 'Melhores Produtores'){ //no caso dos melhores produtores o Ícone será um coração
            Icon = Coracao; //sobreescrevendo on Ícone.
          }

          return <Icon color={color} width={20} height={20}/>
        },
        tabBarActiveTintColor: '#2A9F85',
        tabBarInactiveTintColor: '#C7C7C7', //tabBarTint serve para alterar a cor da bar ativa e desativada
        tabBarLabelStyle: {
          fontSize: 15,
        }
        })}>

      <Tab.Screen name='Home' component={ProdutorRotas}/>
      <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRotas}/>
    </Tab.Navigator>
  </NavigationContainer>
}