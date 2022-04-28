import React from "react";
import { AdminStyle, Top } from "./styled";
import Tables1 from "../../components/Table1";
import { Div, Icon, P } from "../../GlobalStyle";
import Navbar from "../../components/Navbar";

const Admin = (props)=>{
    return(
        <AdminStyle>
            <Top>
                    <div className="top-logo">
                        <Icon.Logo/>
                    </div>
                    <P fontF = "--familyB" size= "--size16" w = "61%" mr= "0 auto" cl = "var(--shade-1)">
                    Ўзбекистон Республикаси Президентининг жойларга амалга оширган ташрифларида 
                    белгиланган лойиҳалар юзасидан йиғма жадвал
                    </P>
            </Top>
            
            <Div position = "" pd = "0 1%" h = "fit-content">
            <P fontF = "--familyB" size= "--size16" w = "61%" mr= "0 auto" cl = "var(--shade-9)">
            
                    </P>
            <div className="tableAll">
           
                   
                            
                           
                   <img  className="back-imag"  src="./assets/images/png/LOGO.png" alt="" /> 
                 
                                
                     
                
                 <Navbar/>
                <Tables1 view = {props.view1} />
               
                
            </div>
            
                <div className="bottom-view">
                    <div className="view-in"></div>
                </div>
            
            </Div>
        </AdminStyle>
    )
}
export default Admin;

