import React from "react";
import { Div,  P } from "../../GlobalStyle";
import { ButtonNav } from "./styled";


const Button = (props)=>{
    return(
        <ButtonNav>
            <div className="cub">
                {
                    props.children
                }
            </div>
            <P fontF = "--familyB" size = "--size14"  w = "37%">
                {
                    props.name
                }
                
                </P>
            <Div w= "fit-content" className="soni" >
                1 350
            </Div>
        </ButtonNav>
    )
}
export default Button;