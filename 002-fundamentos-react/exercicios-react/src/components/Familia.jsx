import React from "react";
import { filhosComProps } from "../utils/utils";

export default props =>
    <div>
        <h2>Família</h2>

        {filhosComProps(props)}

        {/* {React.cloneElement(props.children, { ...props })} */}

        {/* {React.cloneElement(props.children, props)} */}

        {/* {React.cloneElement(props.children, {
            sobrenome: props.sobrenome
        })} */}


        {/* {props.children} */}
    </div>