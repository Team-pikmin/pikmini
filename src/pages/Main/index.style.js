import styled from "styled-components";
import background from "../../assets/background-img.jpg"

export const backgroundImg = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: scroll;
`
export const Box = styled.div`
    width: 18vw;
    height: 40vh;
    border-radius: 50px;
    background-color: rgba(123, 204, 77, 0.7);
    display: grid;
    overflow: hidden;

`

export const boxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10%;
`

export const redPikminImg = styled.img`
    width: 8vw;
    height: 25vh;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.03);
    }
`