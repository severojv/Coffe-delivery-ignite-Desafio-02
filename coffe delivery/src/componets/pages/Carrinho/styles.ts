import styled from "styled-components";

export const DivPrincPedido = styled.div`
    width: 32.875rem;
    margin-top: 80px;
    h1{
        color: ${props => props.theme['yellow-dark']};
        font-size: 32px;
        font-family: "Baloo 2", sans-serif;
        font-weight:bold;
    }
    p{
        font-size: 20px;
    }
`
export const OderInfo = styled.div`
    margin-top: 40px;
    border-radius:6px ;
    border: 1px solid ${props => props.theme['purple']};
    width: 32.875rem;



`
export const Local = styled.div`
    display: flex;
    gap: 12px;
    padding: 40px;
`
const Icon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  `
export const IconMap=styled(Icon)`
    background-color: ${props => props.theme['purple']};

`
export const IconTimer=styled(Icon)`
    background-color: ${props => props.theme['yellow']};

`
export const IconCash=styled(Icon)`
    background-color: ${props => props.theme['yellow-dark']};

`
export const DivEntrega = styled.div`
    p{
        font-size: 16px;
    }
`
export const DivGrid =styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`
export const DivImg =styled.div`
    margin-top: 180px;
`