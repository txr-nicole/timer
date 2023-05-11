import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
:focus{
    outline:0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]}
}

body{
    background: ${({ theme }) => theme["gray-900"]};
    color:${({ theme }) => theme["gray-300"]};
    -webkit-flow-smoothing:antialiased;
}
body, input-security, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size:1rem;
}
html{
        @media (max-width:1080px){
            font-size: 93.75% // 15px
        }
        @media (max-width:720px){
            font-size:87.5% // 14px
        }
    }
`;
