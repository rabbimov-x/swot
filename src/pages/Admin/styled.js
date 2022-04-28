import styled from "styled-components";



export const AdminStyle = styled.div`
width: 100%;
height: calc(100vh - 2px);
background-color: var(--shade-5);

 .tableAll{
     width: 100%;
     height: fit-content;
     overflow-x: auto;     
    background-image: url(assets/images/png/LOGO.png);
    background-size: 60% ;
    background-repeat: no-repeat;
    background-position: center;
    




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
`
export const Top = styled.div`
width: 100%;
border-radius:  0 0 50px 50px;
display: flex ;
padding: 0 1% 15px 1%;
text-align: center;
text-transform: uppercase;
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
    
}

@media (max-width: 1440px) {
    .top-logo{
    border-radius:  0 0 48px 48px;
    padding: 13px 0;
    height: fit-content;
}
    
}
@media (max-width: 992px) {
    .top-logo{
    border-radius:  0 0 45px 45px;
    }

    
}
@media (max-width: 767px) {
    .top-logo{
    border-radius:  0 0 38px 38px;
}
    
    
}
@media (max-width: 576px) {
   .top-logo{
       height: 36px;
       border-radius:  0 0 26px 26px;   
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

