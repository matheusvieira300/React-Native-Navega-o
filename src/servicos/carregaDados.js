import produtores from "../mocks/produtores";
import textos from "../mocks/textos";

//para simular uma requisição
export const carregaProdutores = () => {
    return produtores;
}

export const carregaTextos = () => {
    return textos;
}
