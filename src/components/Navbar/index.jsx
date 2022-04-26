import React   from "react";
import { Nav, Ul } from "./style";
import {NavLink} from 'react-router-dom'
import {Container ,  Icon} from "../../GlobalStyle";
import { useDispatch , useSelector } from "react-redux";
import { updateState } from "../../redux/types/types";
import Button from "../Button";
const  Navbar= ()=>{
const state = useSelector((state)=>state.update.buttonClick)
const dispatch = useDispatch()
    return(
        <Nav>
            
            <Container justify = "space-between" align = "center">
                    
                    <Ul  display = {state ?  "none" : "flex"} justify = "space-between" >
                    
                                <Ul.Li  >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = "/"  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                    <Button name = "SWOT" >
                                        <Icon.Swot/>
                                        
                                    </Button>                                     
                                    </NavLink>
                                </Ul.Li>
                                <Ul.Li  >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = "/home"  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                    <Button name = "Кредит ажратилмаган">
                                        <Icon.Kridit/>
                                    </Button>                                       
                                    </NavLink>
                                </Ul.Li>
                                <Ul.Li  >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = "/next"  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                    <Button name = "Ишга тушган">
                                        <Icon.Ishda  />
                                    </Button>                             
                                    </NavLink>
                                </Ul.Li>
                                <Ul.Li  >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = "/true"  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                    <Button name = "Ишга тушмаган">
                                        <Icon.IshdaEmas />
                                    </Button>                                         
                                    </NavLink>
                                </Ul.Li>
                                    
                    </Ul>
            </Container>
        </Nav>
    )
}

export default Navbar;
