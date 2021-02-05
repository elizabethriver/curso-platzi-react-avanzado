import styled from 'styled-components'

export const ImgWrapper = styled.div`
border-radius: 10px;
display: block;
height: 0;
overflow: hidden;
padding: 56.25% 0 0 0;
position: relative;
width: 100%
`
export const Img = styled.img`
box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
height: 100%;
object-fit: cover;
position: absolute;
width: 100%;
top: 0;
`

export const Buttom = styled.button`
display: flex;
align-items: center;
padding-top: 8px;
& svg {
    margin-right: 4px;
}
`
