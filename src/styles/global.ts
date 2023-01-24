/**
 * IMPORTS
 */
import { createGlobalStyle, css } from "styled-components";
import { devices } from "./devices";

/**
 * I am a global style.
 */
export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 *,
 *::before,
 *::after {
   box-sizing: inherit;
 }
 html {
   box-sizing: border-box;
   height: -webkit-fill-available;
   -ms-overflow-style: scrollbar;
 }
 body {
   min-height: 100vh;
   min-height: -webkit-fill-available;
   font-family: 'Montserrat', sans-serif;
 }
 img {
   max-width: 100%;
 }
 button{
   background-color: transparent;
   border: none;
   box-shadow: none;
   cursor: pointer;
   outline: none;
   padding: 0;
   -webkit-box-shadow: none;
 }
 input{
  outline: none;
 }
 li {
  list-style-type: none;
 }
 @-ms-viewport {
   width: device-width;
 }
 ${({ theme }) => css`
   body {
     background: ${theme.background};
     font: 400 1rem ${theme.fonts.primary};
   }
   *::selection {
     background: ${theme.primary};
     color: ${theme.natural};
   }
   *::-webkit-scrollbar {
     width: 0.4rem;
     @media ${devices.tablet} {
       width: 0.2rem;
     }
   }
   *::-webkit-scrollbar-track {
     border-radius: 40px;
     background: #0001;
   }
   *::-webkit-scrollbar-thumb {
     border-radius: 40px;
     background-color: #2225;
     transition: background-color 0.3s ease-out;
   }
   *:hover::-webkit-scrollbar-thumb {
     background-color: #2228;
   }
   a {
     color: ${(props) => props.theme.primary};
     font-weight: ${(props) => props.theme.fonts.medium};
     text-decoration: none;
   }
 `}
`;
