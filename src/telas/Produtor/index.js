import React from "react";
import { useRoute } from "@react-navigation/native";
import useTextos from "../../hooks/useTextos";

import { StyleSheet, FlatList, View, Text, Image } from "react-native";
import Cesta from "./componentes/Cesta";
import Topo from "../../componentes/Topo";

import topo from '../../assets/produtores/topo.png';



export default function Produtor() {
    const route = useRoute(); //Hook
    const { tituloProdutor, tituloCestas } = useTextos(); //Hook de testos para alterar o texto do TopoLista.
    // o nome interferi no resultado, precisa estar igual está no useTextos, tituloCestas
    const { nome, imagem, cestas} = route.params;//pego os parâmetros dentro do route e desmembro eles.
    // console.log(route.params);//para verificar se estamos recebendo os items do parâmetro clicado.


    const TopoLista = () => { //função é um componente
        return <>
            <Topo titulo={tituloProdutor} imagem={topo} altura={150}/>
            <View style={estilos.conteudo}>
                <View style={estilos.logo}>
                    <Image source={imagem} style={estilos.produtorImage}/>
                    <Text style={estilos.produtor}>{nome}</Text>
                </View>

                <Text style={estilos.cestas}>{tituloCestas}</Text>
            </View>
        </>
    }

    //passando os itens dentro da cesta em ...item
    return <FlatList 
        ListHeaderComponent={TopoLista} //componente do Topo da Lista.
        data={cestas}
        renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}}/> }
        style={estilos.lista} />
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
