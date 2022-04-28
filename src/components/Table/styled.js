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
    }
}
    tr:nth-child(2){
        th{
            background-color: rgba(217,234,248,100);
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
        
        th:first-child,td:first-child{
            border: none;
        }
        td:nth-child(2),th:nth-child(2){
            text-align: left;
            
        }
        td , th {
            opacity: 0.96;
            padding: 13px 5px;
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
        left: 4%;
        width: 94%;
        height: 3px;
        background-color: var(--shade-1);
    }
`
export const Tr = styled.tr`
/* border-bottom: 0.5px solid #A9ABBA; */
&:nth-child(odd){
    td {
        background: rgba(248,248,248, 100);   
    }
}

&:nth-child(even){
    td {
        background-color: #fff;
   opacity: 0.96;

    }
}
`
Tr.Td = styled.td`
border: none;
padding: 15px 5px;
background-color: var(--shade-2);
text-align: center;
font-weight: 500;
font-size: var(--size15);
font-family: var(--familyR);
border-right: 1px solid rgba(228,228,228, 100);
color: var(--info-dark)
`

Tr.Th = styled.th`  
border: none;
padding: 15px 5px;
background-color: var(--shade-1);
font-size: var(--size15);
font-weight: bold;
font-family: var(--familyR);
color: var(--info-dark);
text-align: center;
border-right: 1px solid rgba(228,228,228, 100);
`