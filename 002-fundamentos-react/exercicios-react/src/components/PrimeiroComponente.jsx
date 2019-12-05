import React from "react";

let isLegal = true;

export default (props) =>
    <React.Fragment>
        <h1>{props.valor}</h1>
        <h2>{props.aBcD}</h2>
        <h3>{1 + 1}</h3>
        <p>Legal: {isLegal ? "Sim" : "Não"}</p>
        <p>{Math.random()}</p>
    </React.Fragment>
