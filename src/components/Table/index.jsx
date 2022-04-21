import * as React from "react"
import {  Div, P } from "../../GlobalStyle";
import { TableStyle, Tr } from "./styled";

const Tables = ()=>{
    return(
        <TableStyle>
            <TableStyle.Tab>
                <thead>
                    <Tr>
                        
                       <Tr.Th>
                         №
                        </Tr.Th>
                        <Tr.Th>
                        Вилоят номи
                        </Tr.Th>
                        <Tr.Th>
                        Лойиҳа 
                        сони
                        </Tr.Th>
                        <Tr.Th>
                         <P  size  = "--size15"  bold = "bold">Лойиҳанинг</P>  
                        <P size  = "--size15"  bold = "bold">умумий қиймати</P>
                        <P size  = "--size13" bold = "Italic">(млн. сўмда)</P> 
                        </Tr.Th>
                        <Tr.Th>
                        <P  size  = "--size15"  bold = "bold">Ўз </P>  
                        <P size  = "--size15"  bold = "bold">маблағлари </P>
                        <P size  = "--size13" bold = "Italic">(млн. сўмда)</P> 
                        </Tr.Th>
                        <Tr.Th colSpan = "2" >                      
                        <P  size  = "--size15" mr= " 0 0 5px 0" bold = "bold">Банк кредити </P>  
                        <Div pd = " 0  23% " nowrap display = "flex" align = "center" justify = "center" >
                        <P w = "fit-content" size  = "--size13" bold = "400">сони</P> 
                        <P w = "fit-content" mr = "0 5px 0 34%" size  = "--size13" bold = "400">сумаси</P> 
                        </Div>
                        </Tr.Th>
                        <Tr.Th>
                        <P  size  = "--size15"  bold = "bold">Шундан,хорижий </P>  
                        <P size  = "--size15"  bold = "bold">валютадаги кредитлар </P>
                        <P size  = "--size13" bold = "Italic">(минг долл.)</P> 
                        </Tr.Th>
                        <Tr.Th>
                        <P  size  = "--size15"  bold = "bold"> Хорижий </P>  
                        <P size  = "--size15"  bold = "bold">инвестициялар</P>
                        <P size  = "--size13" bold = "Italic">(минг долл.)</P> 
                        </Tr.Th>
                        <Tr.Th>
                             <P  cl = "var(--danger)"  size  = "--size15"  bold = "bold">Ишчи ўрни </P>  
                            <P cl = "var(--danger)" size  = "--size13" bold = "Italic">(минг долл.)</P> 
                        </Tr.Th>
                    </Tr>
                    <Tr>
                        <Tr.Th>
                            14
                        </Tr.Th> 
                        <Tr.Th>
                        Жами
                        </Tr.Th> 
                        <Tr.Th>
                          1 267
                        </Tr.Th> 
                        <Tr.Th>
                        32 293 682
                        </Tr.Th> 
                        <Tr.Th>
                        10 613 681
                        </Tr.Th> 
                        <Tr.Th className = "w35">
                        1 260
                        </Tr.Th> 
                        <Tr.Th className = "w65">
                        18 766 306
                        </Tr.Th> 
                        <Tr.Th>
                        465 382
                        </Tr.Th> 
                        <Tr.Th>
                        416 199
                        </Tr.Th> 
                        <Tr.Th>
                        57 943
                        </Tr.Th> 
                    </Tr>
                </thead>
                <tbody>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Бухоро вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                <Tr>
                        
                        <Tr.Td>
                            1
                         </Tr.Td>
                         <Tr.Td>
                         Андижон вилояти
                         </Tr.Td>
                         <Tr.Td>
                         109
                         </Tr.Td>
                         <Tr.Td>
                         2 388 627
                         </Tr.Td>
                         <Tr.Td>
                         1 102 053
                         </Tr.Td>
                         <Tr.Td className = " w35">
                         109
                         </Tr.Td>
                         <Tr.Td className = "w65" >
                         1 113 718
                         </Tr.Td>
                         <Tr.Td>
                         65 673
                         </Tr.Td>
                         <Tr.Td>
                         155 856
                         </Tr.Td>
                         <Tr.Td>
                          9 638
                         </Tr.Td>
                </Tr>
                   
                  
                    
                    
                </tbody>
            </TableStyle.Tab>
        </TableStyle>
    )
}
export default Tables;