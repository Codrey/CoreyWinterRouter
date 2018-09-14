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
        z-index: -1;
        transition: height .5s, background-color .5s;
    }

    &:hover {

        content: 'TEST';

        color: ${Blue} ;
        font-size: 1.1ch;
        border-style: dashed;
        border-radius: 15px;
        padding: .5ch;
        transition: font-size .5s, color .5s;
    }

    &:hover:after {
        content: ' ';
        height: 60%;
        background-color: ${Pink};
    }
`;