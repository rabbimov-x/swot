import React from "react";
import { AdminStyle, Top } from "./styled";
import Tables from "../../components/Table";
import { Div, Icon, P } from "../../GlobalStyle";
import Navbar from "../../components/Navbar";

const Admin = ()=>{
    return(
        <AdminStyle>
            <Top>
                <div className="top-logo">
                    <Icon.Logo/>
                </div>
                <P bold = "bold" size= "--size16" w = "61%" mr= "16px auto 0 auto" cl = "var(--shade-1)">
                Ўзбекистон Республикаси Президентининг жойларга амалга оширган ташрифларида 
белгиланган лойиҳалар юзасидан йиғма жадвал
                </P>
              
            </Top>
            
            <Div pd = "0 1%" h = "fit-content">
            <div className="tableAll">
                 <Navbar/>
                <Tables/>
            </div>
            </Div>
        </AdminStyle>
    )
}
export default Admin;

