import React from 'react' ; 
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * , *::after , *::before {
      margin: 0 ;
      padding: 0;
      box-sizing: border-box;
    }

    body {
        background: #1b1b1b ;
        font-family : 'Inter' , sans-serif ; 
        overflow-x: hidden;
    }

    html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
    }

    button {
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        border: 3px solid #23d997;
        color : white ; 
        font-family : 'Inter' , sans-serif ; 


        &:hover {
            background: #23d997;
        }
        transition: all 0.4s ease;
    }

    .title {
        h2 {
           font-weight: lighter;
           font-size: 4rem;
        }

        h3 {
            color : white ; 
        }

        p {
            padding: 3rem 0rem;
            font-weight: bold;
            color: #ccc ;
            font-size: 1.4rem;
            line-height: 150%normal;
        }
        a{
            font-size: 1.1rem;
        }
        span {
            font-weight: bold;
            color: #23d997;
        }
        h4 {
            font-weight: bold;
            font-size : 2rem ; 
            color : #23d997 ; 
        }
    }
` ; 


export default GlobalStyle ; 


