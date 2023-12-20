import React from "react";
import ProdutorRotas from "./ProdutorRotas";
import MelhoresProdutores from "../telas/MelhoresProdutores";

export default function MelhoresProdutoresRotas() {//especificando que o componente principal seja os melhores produtores
    return<ProdutorRotas ComponentePrincipal={MelhoresProdutores} />
}