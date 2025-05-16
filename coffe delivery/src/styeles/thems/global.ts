//criando estilos globais    || adicionar no app dentro do provaider
import { createGlobalStyle } from "styled-components";

    export const GlobalStyle = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            background: ${props=>props.theme['background']};
            color:${props=>props.theme['base-text']};
            margin-left: 10rem;
            margin-right: 10rem;
        }
        
        body ,input , textarea ,button{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1rem;
            }
    `