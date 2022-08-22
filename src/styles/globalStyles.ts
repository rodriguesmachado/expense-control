import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html{
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    
    @media(max-width: 900px){
      font-size: 55%;
    }

    @media(max-width: 700px){
      font-size: 50%;
    }

    @media(max-width: 500px){
      font-size: 45%;
    }

  }

  body{
    font-size: 1.6rem;
  }


`;