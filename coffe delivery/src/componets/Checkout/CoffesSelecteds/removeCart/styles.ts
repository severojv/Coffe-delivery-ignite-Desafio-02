import styled from "styled-components";

export const InputNumberContainner = styled.div`
display: flex;
align-items: center;




span {
  width: 30px;
  height: 32px;

  padding: 5px;
  border: 1px solid transparent;
  text-align: center;
  font-size: 16px;
  background: ${props => props.theme['base-button']};

}

`
export const ButtonInputCount = styled.button`
  background: ${props => props.theme['base-button']};
    color: ${props => props.theme['purple']};
    border-radius: 5px;
    text-align: center;
    width: 21px;
    height: 32px;
    border: 1px solid transparent;

`
export const ButtonInputCounts = styled.button`
margin-left: 8px;
    border: 1px solid transparent;
    color: ${props => props.theme['white']};
    text-align: center;
    align-items: center;
    height: 32px;
    width: 91px;
    border-radius: 5px;
background: ${props => props.theme['purple']};
`

export const Tomagap=styled.div`
    display: flex;
    align-items: center;
`