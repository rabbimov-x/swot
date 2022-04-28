import * as React from "react"
import {  Div, P } from "../../GlobalStyle";
import {Tr} from "../Table/styled"
import { TableStyle1 } from "./styled";

const Tables1 = ()=>{
    return(
        <TableStyle1>
            <TableStyle1.Tab>
                <thead  >
                    <Tr>
                        
                       <Tr.Th>
                     <div> <p>   №</p> </div>

                        </Tr.Th>
                        <Tr.Th>
                      <div> <p> Вилоят номи</p> </div>

                        </Tr.Th>
                        <Tr.Th>
                    <div>  <p>  Лойиҳа </p>
                    <p>сони</p>
                     </div>

                        
                        </Tr.Th>
                        <Tr.Th>
                       <div>  <P  size  = "--size15"  bold = "bold">Лойиҳанинг</P>  
                        <P size  = "--size15"  fontF = "--familyB">умумий қиймати</P>
                        <P size  = "--size13" fontF = "--familyI">(млн. сўмда)</P>  </div>

                        </Tr.Th>
                        <Tr.Th>
                      <div>  <P  size  = "--size15" fontF = "--familyB">Ўз </P>  
                        <P size  = "--size15"  fontF = "--familyB">маблағлари </P>
                        <P size  = "--size13" fontF = "--familyI">(млн. сўмда)</P> 
                        </div>
                        </Tr.Th>
                        <Tr.Th colSpan = "2" >                      
                       <div> <P  size  = "--size15" mr= " 0 0 5px 0" fontF = "--familyB">Банк кредити </P>  
                        <Div pd = " 0  23% " nowrap display = "flex" align = "center" justify = "center" >
                        <P w = "fit-content" mr = "10px 0 0 0 !important" size  = "--size13" fontF = "--familyI">сони</P> 
                        <P w = "fit-content" mr = "10px 5px 0 34% !important" size  = "--size13" fontF = "--familyI">сумаси</P>  
                        </Div>
                        </div>
                        </Tr.Th>
                        <Tr.Th>
                        <div>
                          <P  size  = "--size15"  fontF = "--familyB">Шундан,хорижий </P>  
                          <P size  = "--size15"  fontF = "--familyB">валютадаги кредитлар </P>
                          <P size  = "--size13" fontF = "--familyI">(минг долл.)</P> 
                        </div>
                        </Tr.Th>
                        <Tr.Th>
                       <div> <P  size  = "--size15"  fontF = "--familyB"> Хорижий </P>  
                        <P size  = "--size15"  fontF = "--familyB">инвестициялар</P>
                        <P size  = "--size13" fontF = "--familyI">(минг долл.)</P>  </div>

                        </Tr.Th>
                        <Tr.Th>
                       <div>      <P className="last"  cl = "var(--danger)"  size  = "--size15"  fontF = "--familyB">Ишчи ўрни </P>  
                            <P cl = "var(--danger)" size  = "--size13" fontF = "--familyI">(минг долл.)</P>  </div>

                        </Tr.Th>
                    </Tr>
                    <Tr>
                        <Tr.Th>
                       <div> <p>     14 </p></div>
                        </Tr.Th> 
                        <Tr.Th>
                      <div>  <p> Жами </p></div>
                        </Tr.Th> 
                        <Tr.Th>
                       <div> <p>   1 267 </p></div>
                        </Tr.Th> 
                        <Tr.Th>
                       <div> <p> 32 293 682 </p></div>
                        </Tr.Th> 
                        <Tr.Th>
                      <div>  <p> 10 613 681 </p></div>
                        </Tr.Th> 
                        <Tr.Th className = "w35">
                       <div>  <p> 1 260 </p></div>
                        </Tr.Th> 
                        <Tr.Th className = "w65">
                      <div>  <p> 18 766 306 </p></div>
                        </Tr.Th> 
                        <Tr.Th>
                       <div> <p> 465 382 </p></div>
                        </Tr.Th> 
                        <Tr.Th>
                       <div> <p> 416 199 </p></div>
                        </Tr.Th> 
                        <Tr.Th>
                       <div> <p> 57 943 </p></div>
                        </Tr.Th> 
                    </Tr>
                </thead>
                <tbody >
               
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                     <div> <p>      1</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   Бухоро вилояти </p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   109</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div> <p>   2 388 627</p></div>
                         </Tr.Td>
                         <Tr.Td>
                     <div>  <p>  1 102 053</p></div>
                         </Tr.Td>
                         <Tr.Td className = " w35">
                      <div> <p>  109</p></div>
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                      <div>  <p> 1 113 718</p></div>
                         </Tr.Td>
                         <Tr.Td>
                      <div> <p>  65 673</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p> 155 856</p></div>
                         </Tr.Td>
                         <Tr.Td>
                       <div> <p>  9 638</p></div>
                         </Tr.Td>
                </Tr>
                </tbody>
            </TableStyle1.Tab>
        </TableStyle1>
    )
}
export default Tables1;