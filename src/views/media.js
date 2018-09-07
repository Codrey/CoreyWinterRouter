import { css } from 'styled-components';

const sizes = {
    phone: 376,
    tablet: 768,
    notebook: 992,
    desktop: 1170,

}

const media = Object.keys(sizes).reduce((finalMedia, size) => {
    return {
        ...finalMedia,
        [size]: function(...args) {
          return css`
            @media (max-width: ${sizes[size]}px) {
                ${css(...args)}
            }
        `}
    };
}, {});

export default media; 


// function phone(...args) {
//     return css`
//         @media (max-width: ${sizes.phone}px) {
//             ${css(...args)}
//         }
//     `;
// }


// const media = {
//     phone,
//     tablet,
//     notebook,
//     desktop
// };

// export default media; 