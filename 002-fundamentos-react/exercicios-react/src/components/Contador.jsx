import React, { Component } from "react";

export default class Contador extends Component {

    state = { numero: this.props.numeroInicial }

    maisUm = () => this.alterarNumero(+1)

    menosUm = () => this.alterarNumero(-1)

    alterarNumero = diferenca => this.setState({ numero: this.state.numero + diferenca })

    render() {
        return (
            <div>
                <button onClick={() => this.alterarNumero(-10)}>-10</button>
                <button onClick={this.menosUm}>-</button>
                Número: {this.state.numero}
                <button onClick={this.maisUm}>+</button>
                <button onClick={() => this.alterarNumero(+10)}>+10</button>
            </div>
        )
    }
}

// Solução 01 - Bind
// constructor(props) {
//     super(props);
//     this.maisUm = this.maisUm.bind(this);
// }

// Solução 02 - Função arrow (onClick)
// <button onClick={() => this.maisUm()}>+</button>

// Solução 03 - Função arrow
// maisUm = () => {
//     // this.props.numero++;
//     console.log(this);
// }