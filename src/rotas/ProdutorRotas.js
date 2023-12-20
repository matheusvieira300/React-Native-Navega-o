import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Produtor from "../telas/Produtor";
import Home from "../telas/Home";

const Stack = createNativeStackNavigator(); //utilizando o stack

//Stack pilha clicando de tela em tela em seguida
export default function ProdutorRotas() {
    return <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
}