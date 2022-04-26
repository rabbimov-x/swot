import styled from "styled-components";



export const AdminStyle = styled.div`
width: 100%;
height: calc(100vh - 2px);
background-color: var(--shade-5);

 .tableAll{
     width: 100%;
     height: fit-content;
     overflow-x: auto;
     position: relative;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     
     .back-imag{
         position: absolute;
         width: 50%;
         height: auto;
         top: 0;
         min-width: 800px;
         z-index: 1;
         opacity: 0.25;
         div{
             width: 100%;
         }

         &  img{
             width: 100%;
             height: auto;
             z-index: 1;
         }
     }
     
    @media (max-width: 800px) {
        overflow-x: auto; 
    &::-webkit-scrollbar{
        width: 5.94px;
        height: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #B6D3FF;
        border-radius: 8px;
    }  
    &::-webkit-scrollbar-track{
        background-color: #F5F7FB;
        border-radius: 8px;
    } 
    }
 }
 .bottom-view{
    height : 10px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    background-color: var(--info-dark);
    .view-in{
        width: 82.3%;
        height: 10px;
        border-radius: 10px 10px 0 0;
        background-color: #E0F5DA;
    }
 }
`
export const Top = styled.div`
width: 100%;
height: 70px;
border-radius:  0 0 50px 50px;
display: flex ;
padding: 0 1% 15px 1%;
text-align: center;
background-color: var(--primary);
color: var(--shade-1);
.top-logo{
    height: 56px;
    width: 29.25%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--shade-1);
    border-radius:  0 0 68px 68px;
    
@media (max-width: 1200px) {
    border-radius:  0 0 48px 48px;
    
}
@media (max-width: 992px) {
    border-radius:  0 0 45px 45px;
    height: 50px;
}
@media (max-width: 767px) {
    border-radius:  0 0 38px 38px;
    height: 40px;
}
@media (max-width: 576px) {
    border-radius:  0 0 26px 26px;
    height: 36px;
}
}

@media (max-width: 767px) {
 flex-direction: column;
 align-items: center;
 height: auto;
 .top-logo{
    margin-bottom: 10px;
 }
}
`

