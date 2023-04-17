import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
        outline: none;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    ::selection {
        background: #46468b;
        color: white;
    }
    
    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-family: "Poppins", Arial, Helvetica, sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        color: ${(props) => props.theme.colors.text};
    }

    button {
        cursor: pointer;
    }

    .navbar li {
        cursor: pointer;
    }

    @media screen and (max-width: 560px){

        * {
            padding: 0;
        }

        body {
            max-height: 100vh !important;
		    max-width: 100% !important;
		    overflow-x: hidden;
        }

        .social-icons {
            display: none;
        }
        
        .home {

        }

        .about-me {
            overflow: visible;
        }

        .text-about_me {
        }

    }

`;
