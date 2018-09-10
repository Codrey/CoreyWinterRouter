import styled from 'styled-components';
import { Pink } from '../views/variables';
import { Blue } from '../views/variables';
import { Green } from '../views/variables';



export const A = styled.a`
    color: turquoise;
    text-decoration: none;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10%;
        width: 100%;
        background-color: ${Green};
        border-radius: 5px 5px 0 0;
        z-index: -1;
        transition: height .1s, background-color .1s;
    }

    &:hover {
        color: ${Blue} ;
        transition: font-size .3s, color .1s;
        font-size: 1.1ch;
    }

    &:hover:after {
        content: '•••';
        height: 30%;
        background-color: ${Pink};
    }
`;