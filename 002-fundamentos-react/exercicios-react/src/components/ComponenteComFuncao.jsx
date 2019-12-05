import React from "react";


export default props => {

    let num = Math.random();

    const aprovados = ["Paula", "Roberta", "Gustavo", "Julia", num];

    const geraItens = itens => itens.map(item => <li>{item}</li>)

    return <ul>{geraItens(aprovados)}</ul>
} 