import React   from "react";
import { navbar } from "../../utils/navbar";
import { BuuttonUl, Logo, Nav, Ul } from "./style";
import {NavLink} from 'react-router-dom'
import {Buttons, Container , Div, Icon} from "../../GlobalStyle";
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
                                    <Button>
                                        <Icon.Swot/>
                                    </Button>                                     
                                    </NavLink>
                                </Ul.Li>
                                <Ul.Li  >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = "/"  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                    <Button>
                                        <Icon.Kridit/>
                                    </Button>                                       
                                    </NavLink>
                                </Ul.Li>
                                <Ul.Li  >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = "/"  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                    <Button>
                                        <Icon.Ishda  />
                                    </Button>                             
                                    </NavLink>
                                </Ul.Li>
                                <Ul.Li  >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = "/"  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                    <Button>
                                        <Icon.IshdaEmas  />
                                    </Button>                                         
                                    </NavLink>
                                </Ul.Li>
                                    
                    </Ul>
            </Container>
        </Nav>
    )
}

export default Navbar;
