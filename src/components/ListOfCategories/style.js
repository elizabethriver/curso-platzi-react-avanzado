import styled, { css } from 'styled-components'

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    width: 100%;
    /* &::-webkit-scrollbar{
        display: none;
    } */
    ${props => props.fixed && css`
    background: #fff;
        border-radius: 60 px;
        box-shadow:  0px 10px 14px rgba(0, 0, 0, 0.2);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right:0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
    `}
`
export const Item = styled.li`
padding: 0 8px;
`
