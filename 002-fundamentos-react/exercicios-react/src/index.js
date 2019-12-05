import ReactDOM from "react-dom";
import React from "react";
// import PrimeiroComponente from "./components/PrimeiroComponente";
// import CompA, { CompB as B } from "./components/DoisComponentes";
// import MultiElementos from "./components/MultiElementos";
// import FamiliaSilva from "./components/FamiliaSilva";
// import Familia from "./components/Familia";
// import Membro from "./components/Membro";
// import ComponenteComFuncao from "./components/ComponenteComFuncao";
// import Pai from "./components/Pai";
// import ComponenteClasse from "./components/ComponenteClasse";
// import Contador from "./components/Contador";
import Hook from "./components/Hook";

ReactDOM.render(
    <>
        <Hook />
        {/* <Contador numeroInicial={5} /> */}
        {/* <ComponenteClasse valor="Olá Mundo!" />
        <ComponenteClasse valor="" /> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Silva" numero={123}>
            <Membro nome="Andre" />
            <Membro nome="Mariana" />
        </Familia> */}
        {/* <FamiliaSilva sobrenome="Silva Pereira" /> */}
        {/* <MultiElementos /> */}
        {/* <CompA valor="Olá, eu sou A!" /> */}
        {/* <B valor="Olá, eu sou B!" /> */}
        {/* <PrimeiroComponente valor="Bom dia!" aBcD={Math.pow(2, 8)} /> */}
    </>
    , document.getElementById("root"));