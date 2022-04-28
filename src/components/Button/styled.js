import styled from "styled-components";
import Button from '@mui/material/Button';

export const ButtonNav = styled(Button)`
width: 100%;
height: auto;
border: 1px solid #015588 !important;
box-shadow: 2px 2px 10px #015588;
border-radius: 10px !important;
background-color: var(--shade-1) !important;
display: flex !important;
justify-content: space-between !important;
align-items: center !important;
padding: 5px 15px 5px 5px !important;


.cub{
    width: 51px;
    height: 51px;
    background-color: var(--info-dark);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1440px) {
        width: 43px;
        height: 40px;
    }
    @media (max-width: 992px) {
        width: 35px;
        height: 35px;
    }
    @media (max-width: 1200px) {
        width: 32px;
        height: 32px;
    }
}
.soni{
    height: fit-content;
    text-align: center;
    padding: 5px 10px;
    background-color: #E0F5DA;
    color: #75D25D;
    border-radius: 5px;
    font-size: var(--size15);
}
`