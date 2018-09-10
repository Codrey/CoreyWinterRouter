import styled from 'styled-components';
// import styled, { css } from 'styled-components';

export const Header = styled.div`
  
`;


export const Image = styled.img`
  width: 100%;
`;

export const HeroImage = styled.div`
  background-image: url('${require('../../assets/hero.gif')}');
  height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex; 
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: center;
  color: pink;
  font-size: 3rem;

  h1 {
    margin-bottom: 0;
  }

`;

// export const RevealP = styled.p`
// position: relative;
// &:after {
//     content: ' ';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: pink;

//     transform-origin: left;
//     transform: rotateY(90deg);

//     transition: transform 3s;
// }

//   ${({ hide }) => hide && css`
//       &:after {
//           transform: rotateY(0deg);
//       }
//   `}
// `;


