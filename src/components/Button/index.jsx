import React from "react";
import { Div, Icon, P } from "../../GlobalStyle";
import { ButtonNav } from "./styled";


const Button = (props)=>{
    return(
        <ButtonNav>
            <div className="cub">
                {
                    props.children
                }
            </div>
            <P bold= "bold" size = "--size15"  w = "37%">SWOT</P>
            <Div w= "fit-content" className="soni" >
                1 350
            </Div>
        </ButtonNav>
    )
}
export default Button;