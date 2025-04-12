import styled from "styled-components";

export const DivPrincipal = styled.div`
    width: 40rem;
    margin-top: 4rem;
`
export const DivForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 2rem;
`

const InputBase = styled.input`
    height: 42px;
    border: none;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.875rem;
`
export const InputCep = styled(InputBase)`
    width: 12.5rem;
`
export const InputRua = styled(InputBase)`
    width: 35rem;

`
export const InputNum = styled(InputBase)`
    width: 12.5rem;
`
export const InputComp = styled(InputBase)`
    width: 21.75rem;
    position: relative;

`
export const InputBairro = styled(InputBase)`
  width: 12.5rem;
`

export const InputCidade = styled(InputBase)`
  width: 17.25rem;
`

export const InputUf = styled(InputBase)`
  width: 3.75rem;
`
export const DivEndereco = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
    div{
        display: flex;
        flex-direction: column;
    }

    span{
        margin-left: 1rem;
        
    
    }
    svg{
        color: ${props => props.theme['yellow-dark']};

    }
`
