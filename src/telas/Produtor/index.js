import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

export default function Produtor() {
    const route = useRoute(); //Hook
    console.log(route.params);//para verificar se estamos recebendo os items do parâmetro clicado.

    return <Text>Produtor</Text>
}