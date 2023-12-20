import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Produtor from "../telas/Produtor";
import Home from "../telas/Home";

const Stack = createNativeStackNavigator(); //utilizando o stack

//Stack pilha clicando de tela em tela em seguida
export default function ProdutorRotas({ ComponentePrincipal = Home}) {//setando qual o default/padrão do ComponentePrincipal
    return <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
        <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
}