import React, { Component } from "react";

class ComponenteClasse extends Component {

    render() {
        return (
            <h1>{this.props.valor || "Padrão"}</h1>
        )
    }
}

export default ComponenteClasse;