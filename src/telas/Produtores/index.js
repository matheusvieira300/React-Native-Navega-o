import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Produtores({ melhoresProdutores }) {
  const navigation = useNavigation(); // esse Hook dá acesso ao componente de navegação
  const route = useRoute();//hook para poder acessar os parâmetros
  
  const [ exibeMensagem, setExibeMensagem ] = useState(false);//estado

  const lista = useProdutores(melhoresProdutores);
  const { tituloProdutores, mensagemCompra } = useTextos();

  const nomeCompra = route.params?.compra.nome;//para evitar o erro de undefined o ? interrogação consegue efetuar isso
  // console.log(nomeCompra);// só para verificar que ele está undefined
  // console.log(route.params);// para verificar os parametros passados na compra

  const timestampCompra = route.params?.compra.timestamp;
  //console.log(timestampCompra);

  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra );//$NOME váriavel invetada em textos, se for undefined ele não vai prosseguir atráves do ?

  useEffect( () => {
    setExibeMensagem(!!nomeCompra);
    let timeout;// para setar quanto tempo a mensagem permanecerá visível

    if (nomeCompra){
      timeout = setTimeout(() => {//set timeout é um método para realizar alguma ação depois de determinado tempo
        setExibeMensagem(false);
    }, 3000);//valor em milisegundos, 3 segundos
  }

  return () => clearTimeout(timeout); //para limpar o timeout atual antes de utilizar o useEffect timstampcompra
  }, [timestampCompra]);

  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      {/* é possível fazer validação lógica dentro dos xml, fazendo validação AND, Duas negações tornam um parâmetro booleana !! exclamação */}
      { exibeMensagem && <Text style={estilos.compra}>{ mensagemCompleta }</Text> }
      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor
       {...item} aoPressionar={() => {
          navigation.navigate('Produtor', item) //aqui vai ser usado o name que é uma chave Única para poder chamar outra tela,
          //e está sendo passado um parâmetro item
       }} />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    font: 16,
    lineHeight: 26
  }
})
