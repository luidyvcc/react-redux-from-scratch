import React, { useState, useEffect } from "react";

export default props => {

    const [contador, setContador] = useState(2);
    const [conjunto, setConjunto] = useState("Par");

    useEffect(() => {
        setConjunto(contador === 0 ? "Nulo" : contador % 2 === 0 ? "Par" : "Impar");
    }, [contador]);

    return (
        <div>
            <h1>{contador} é {conjunto}</h1>
            <button onClick={() => setContador(contador - 1)}>-</button>
            <button onClick={() => setContador(contador + 1)}>+</button>
        </div>
    )
}