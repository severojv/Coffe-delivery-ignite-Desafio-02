import styled from "styled-components"

export const HeaderCoffeContainne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    
    
    h1{
        font-family: "Baloo 2", sans-serif;
        font-weight:bold;
        font-size: 2rem;
        color: ${props=>props.theme['base-title']};
        gap: 3rem;
    }
    
    button{
        border-radius: 8px;
        padding: 5px;
        border: 2px solid ${props=>props.theme['yellow-dark']};
        color:${props=>props.theme['yellow-dark']};
        cursor: pointer;
        transition: 0.3s;
        background: transparent;
        &:hover {
            background: ${(props) => props.theme["yellow-dark"]};
            color: white;
        }

        &:focus {
            outline: none; 
            box-shadow: none;
        }
    }
`
export const ButtonCoffe=styled.div`
    gap: 0.5rem;
    display: flex;
`