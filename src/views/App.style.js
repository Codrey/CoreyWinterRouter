import styled, {css} from 'styled-components';
import media from './media';

import {Gold} from "../views/variables.js";






export const Background = styled.div`
    /* position: fixed; */
    /* left: 10vw;
    width: 80vw;
    top: 10vh; */
    height: auto;
    background-image: url('${require('../assets/cwwLogo.svg')}');
    background-color: ${Gold};
    /* z-index: -99; */
`;


export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
`;


export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 30px;

  ${media.phone`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  `}

  ${media.tablet`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  `}

  ${media.notebook`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  `}

  ${media.desktop`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  `}

`;


export const Para = styled.p`
    position: relative;    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: pink;
`;


export const Button = styled.div`
  
`;




// .App {
//   text-align: center;
// }

// .App-logo {
//   animation: App-logo-spin infinite 20s linear;
//   height: 80px;
// }

// .App-header {
//   background-color: #222;
//   height: 150px;
//   padding: 20px;
//   color: white;
// }

// .App-title {
//   font-size: 1.5em;
// }

// .App-intro {
//   font-size: large;
// }

// @keyframes App-logo-spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
