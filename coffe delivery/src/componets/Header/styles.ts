import styled from "styled-components";

export const HeaderContainer=styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    margin-left: 4rem;
    margin-right: 4rem;
    nav{
        display    :flex ;
        gap: 1rem;
        
    }
    a{
        border-radius: 8px;
        border-color: ${props=>props.theme['yellow']};
        width: 143px;
        height: 2.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1;
        

    }
`