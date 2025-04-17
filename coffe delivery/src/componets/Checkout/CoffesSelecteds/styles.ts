import styled from "styled-components";
export const DivTop=styled.div`
    margin-top:4rem;
`
export const DivPrincipalSel = styled.div`
    width: 40rem;
    margin-top: 0.938rem;
    padding: 40px;
    
    `
export const ImgCart = styled.div`
    img{
        width: 4rem;
        height: 4rem;
    }
    
    `
export const NomeCart = styled.span`
    font-size: 16px;
    color: ${props => props.theme['base-subtitle']};
    `

export const PrecoCart = styled.div`
        align-items: center;
        display: flex;
        font-family: "Baloo 2", sans-serif;
        font-weight:bold;
        color: ${props => props.theme['base-title']};
        gap: 1rem;
        font-size: 24px;
        `
export const DivDisplay =styled.div`
    display: flex;
    gap: 20px;
    `
export const Details =styled.div`
    display: flex;
    flex-direction: column;
    
`
export const Tomagaps=styled.div`
display: flex;
    gap: 50px;
`
export const DivFrame=styled.div`
    margin-top: 48px;
    width: 23rem;
    height:5.75rem;
`
export const Frame =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const DivCoffe=styled.div`
    width: 23rem;
    flex-direction: column;
    display: flex;
    gap: 48px;
`
export const DivButton = styled.button`
        width: 23rem;
        background-color: ${props => props.theme['yellow']};
        border: 0;
        border-radius: 4px;
        height: 2.875rem;
        margin-top:24px;
        color: ${props => props.theme['white']};






`