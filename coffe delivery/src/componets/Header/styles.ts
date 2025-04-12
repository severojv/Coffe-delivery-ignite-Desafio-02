import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    nav{
        display:flex ;
        gap: 1rem;
        
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1;
        text-decoration: none;
        background: transparent;
        
        
    }
  
`
export const ButtonContainer = styled.button`
        border-radius: 8px;
        border-color: transparent;
        height: 2.375rem;

`
export const EnderecoButtonContainer = styled(ButtonContainer)`
     background: ${props => props.theme['purple-light']};
     width: 8.938rem;


`
export const CarrinhoButtonContainer = styled(ButtonContainer)`
     background: ${props => props.theme['yellow-light']};
     width:  2.375rem;
     position: relative;



`

export const SpanActiveNum = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #C47F17;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`