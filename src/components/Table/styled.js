import styled from "styled-components" 


export const TableStyle = styled.div`
width: 100%;
height: 100vh;
overflow-y: auto; 
    &::-webkit-scrollbar{
        width: 5.94px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #B6D3FF;
        border-radius: 8px;
    }  
    &::-webkit-scrollbar-track{
        background-color: #F5F7FB;
        border-radius: 8px;
    } 
    tr:first-child{
    th:first-child{
        border-top-left-radius: 15px;
    }
    th:last-child{
        border-top-right-radius: 15px;
    }
    th{
        padding: 0 5px;
        div{
            padding: 0;
        }
    }
}
    tr:last-child{
        td:first-child{
            border-bottom-left-radius: 15px;
        }
        td:last-child{
            border-bottom-right-radius: 15px;
        }
    }
    tr{
        td:last-child, th:last-child{
            color: var(--danger);
            border: none;
        }
        td:first-child, th:first-child{
            border: none;
        }
        
        th:nth-child(2), td:nth-child(2){
            text-align: left;
        }
    }
    tr:nth-child(2){
        th{
            background-color: var(--primary1)
        }
    }

    .brnone{
        border: none;
    }
    .w35{
        width: 60px;
    }
    .w65{
        width: 100px;
    }

    .kridit{
        td , th{
                color: transparent !important;
                border: none;
                   
                & p{
                    color: transparent !important;
                }
                
            }
        tr{
            &:first-child{
                th:nth-child(3), th:nth-child(4){
                    &::before{
                        top: -20px;
                        height: calc(100% + 20px);
                    } 
                }
            }
             th:nth-child(3), td:nth-child(3){
                width: 9.8% ;
                position: relative;
                
                border-right: 1px solid var(--shade-7);
                 & p, &{color: var(--info-dark) !important;}
                &::before{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 101%;
                    height: 100%;
                    z-index: 3;
                    background-color: #E8F4FF;
                    opacity: 0.5;
                }
            }
            th:nth-child(4), td:nth-child(4){
                width: 13%;
                
                 & p, &{color: var(--info-dark) !important;}
                position: relative;
                &::before{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 101%;
                    height: 100%;
                    z-index: 3;
                    background-color: #E8F4FF;
                    opacity: 0.5;
                }
            }
            th:nth-child(2), td:nth-child(2){
                width: 23.6%;
               
                 & p, &{color: var(--info-dark) !important;}
            }
            th:nth-child(1), td:nth-child(1){
                
                & p, &{ color: var(--info-dark) !important};
            }
            
        }
    }

   
    @media (min-width: 1800px) {
            .w35{
            width: 75px;
        }
        .w65{
            width: 125px;
        }  
    }
    @media (max-width: 800px) {
        min-width: 800px;
    }
`
TableStyle.Tab = styled.table`
    width: 100%;
    margin: 0;
    padding: 1px;
    border-collapse: collapse;
    font-family: var(--familyR);
    font-size: var(--size14);
    line-height: 17px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 1%;
        width: 94%;
        height: 3px;
        background-color: var(--shade-1);
    }

    p{
        z-index: 2;
    }
`
export const Tr = styled.tr`
/* border-bottom: 0.5px solid #A9ABBA; */
&:nth-child(odd){
    td {
   background-color: var(--shade-4);
    }
}

&:nth-child(even){
    td {
     background: #fff;
    }
}
`
Tr.Td = styled.td`
border: none;
background-color: var(--shade-2);
text-align: center;
font-size: var(--size15);
font-family: var(--familyR);
border-right: 1px solid var(--shade-7);
color: var(--info-dark);
opacity: 0/96;
line-height: 110%;

 &> div{
     display: grid;
     z-index: 4;
     height: 100%;
     padding: 0 5px;
     p{
         margin: 0;
         padding: 13px 0;
          z-index: 4;
          line-height: 110%;
     }
 }
 
`

Tr.Th = styled.th`
border: none;
background-color: var(--shade-1);
font-size: var(--size15);
font-family: var(--familyB);
color: var(--info-dark);
text-align: center;
border-right: 1px solid var(--shade-7);
opacity: 0/96;
line-height: 120%;

&> div{
     display: grid;
     z-index: 4;
     height: 100%;
     padding: 11.5px 5px;
     p{
        z-index: 4;
         margin: 0;
     }
 }

`