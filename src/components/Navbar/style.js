import styled  from "styled-components";





export const Nav = styled.div`
    width:100%;
    height: auto;
    padding: 16px 0 15px 0 ;
    background: transparent;

    @media (max-width: 800px) {
        width: 800px;
    }
`

export const Ul = styled.ul`
    width: 100%;
    display:  flex;
    align-items: center;
    list-style: none;
    margin: 0 30px 0 auto;
    padding: 0;
    justify-content: space-between;


`
Ul.Li = styled.li`
    width: 22.8%;
    margin-left: 15px;
    color: #2B2D42;

    >a{
        text-decoration: none;
        font-family: var(--font-family);
        font-size: var(--size18);
        -webkit-transition: 0.2s color;
        transition: 0.2s color;
        display: flex;
        position: relative;
        color: #000;

        
    }
    >.navlink{
        color: #2B2D42;
        
    }
    >.activeNav{
        color: var(--cl-red);
        display: flex;
        transition: all 0.2s linear;
        &::before{
            width: 99%;
        }
        &> button{
            border: 1px solid #015588 !important; 
            box-shadow: 2px 2px 10px #015588;
        }
    }

   
  
`
// export const BuuttonUl = styled.button`
// display: ${({display})=> display? display: "block"};
// border:2px solid var(--cl-button);
// outline: none;
// cursor: pointer;
// padding: 6px 14px;
// border-radius: 4px;
// background-color: var(--shade-3);
// margin: 15px 0 15px auto;



// &:active{
//     transform: scale(0.95);
//     background-color: var(--shade-1);
//     &> div> svg{
//     path{
//         fill: var(--shade-9);
//     }
    
// }
// }

// @media (min-width: 768px) {
//     display: none;
// }
// `

export const Logo = styled.div`
overflow: hidden;
width: 10%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;

&> img{
    min-width: 120%;
    max-width: 150%;
}
@media (max-width: 767px) {
    width: 15%;
    &> img{
    min-width: 130%;
    max-width: 150%;
}   
}
`