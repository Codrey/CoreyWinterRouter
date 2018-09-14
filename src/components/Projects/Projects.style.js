import styled from 'styled-components';


export const Image = styled.img`
  height: 60vh;
`;

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  border-radius: 5% 5% 5% 5%;
  width: 33vw;

  & > img {
    transition: transform .3s;
  }

  &:hover {
    transform: scale(1.2);
  }

`;

export const Index = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  h1 {
    mix-blend-mode: soft-light;
    color: pink;
    font-size: 9ch;
    opacity: .9;
    z-index: -99;
    transform: translateY( -66% ) translateX( -33% );

  }


`;