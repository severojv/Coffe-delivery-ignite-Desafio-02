import styled from "styled-components";
export const DivCoffeContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
    text-align: center;
    gap: 0.5rem;
    width: 256px;
    height: 310px;
`
export const CoffeItensContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;


`
export const ImagemContaner = styled.div`
    display: flex;
    img{
        width: 7.5rem;
        height: 7.5rem;
    }

`
export const TypeCoffe = styled.div`
    font-size: 10px;
    gap: 1rem;
    display: flex;
    span{
        border-radius: 8px;
        padding: 3px;
        border: transparent;
        color:${props => props.theme['yellow-dark']};
        background-color: ${props => props.theme['yellow-light']};
    }
`
export const DescContainer = styled.div`
    font-size: 14px;
    color: ${props => props.theme['base-label']};
    padding: 1rem;


`
export const NomeCoffeContainer = styled.span`
    font-family: "Baloo 2", sans-serif;
    font-weight:bold;
    font-size: 20px;
    color: ${props => props.theme['base-subtitle']};

`
export const SpanPreco=styled.div`
        align-items: center;
        display: flex;
        font-family: "Baloo 2", sans-serif;
        font-weight:bold;
        color: ${props=>props.theme['base-title']};
        gap: 1rem;
        font-size: 24px;
`
