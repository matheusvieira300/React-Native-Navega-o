import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../telas/Home";
import MelhoresProdutores from "../telas/MelhoresProdutores";

import ProdutorRotas from "./ProdutorRotas";

const Tab = createBottomTabNavigator();//criando uma Tab

export default function AppRotas() {
    return  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={ProdutorRotas}/>
      <Tab.Screen name='Melhores Produtores' component={MelhoresProdutores}/>
    </Tab.Navigator>
  </NavigationContainer>
}