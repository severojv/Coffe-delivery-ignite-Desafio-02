import styled from "styled-components";

export const PrincipalDiv=styled.div`
    width: 100%;
    max-width: 1440px;
`
export const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 5rem;
`;
export const IntroContainer = styled.div`
    color: ${props => props.theme['base-title']};
    font-size: 1.25rem;

    `
export const HIntroContainer = styled(IntroContainer)`
    font-family: "Baloo 2", sans-serif;
    margin-top: 1rem;
    font-weight:bold;
    font-size: 1.5rem;

`


export const IMG = styled.div`
    max-width: 50%;
    margin-top: 8rem;
    
    img {
        width: 100%;
        height: auto;
    }
    
`
export const TextContents = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;
`;