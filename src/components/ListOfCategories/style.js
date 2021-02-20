import styled, { css } from 'styled-components'

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    width: 100%;
    margin-bottom: 33px;
/* width */
    &::-webkit-scrollbar {
    width: 5px;
    };
    &::-webkit-scrollbar-thumb {
    background: #8d00ff; 
    border-radius: 3px;
    };
    &::-webkit-scrollbar-thumb:hover {
    background:  #540199; 
    };

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
