import { css } from "styled-components";

const mobile = (props) =>{
    return css`
        @media only screen and (max-width:414px){
            ${props}
        }
    `
}
const small = (props) =>{
    return css`
        @media only screen and (max-width:300px){
            ${props}
        }
    `
}

export default mobile;
export {small};
