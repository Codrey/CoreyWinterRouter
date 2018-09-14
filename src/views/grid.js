import styled, {css} from 'styled-components';
import media from './media';



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

export const Relative = styled(Div)`
    position: relative;
`;

export const Absolute = styled(Div)`
    position: absolute;
`;

export const Flex = styled(Div)`
    display: flex;

    ${({ column }) => column && css`
        flex-direction: column;
    `}
    ${({ align }) => align && css`
        align-content: ${align};
    `}
    ${({ justify }) => justify && css`
        justify-content: ${justify};
    `}
`;






// export const Container = styled.div`
//   padding-left: 120px;
//   padding-right: 120px;
//   padding-top: 30px;
// `;

// export default Container;