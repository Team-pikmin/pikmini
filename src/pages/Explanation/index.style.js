import styled from "styled-components"
import background from '../../assets/background-img.jpg'
import { createGlobalStyle } from 'styled-components';

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

export const redPikmin = styled.img`
    left: 5%;
    top: 17%;
    border-radius: 50px;
    width: 13vw;
    height: 40vh;
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'EF_jejudoldam';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2');
    font-weight: normal;
    font-style: normal;
  }
`

export const explainContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
`


export const explain = styled.div`
    left: 20%;
    top: 18%;
`

export const explainText = styled.div`
    font-size: 1.25rem;
    font-family: 'EF_jejudoldam';
    padding: 5px;
`

export const CommentContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    margin-top: 100px;
    border-radius: 50px;
`

export const Title = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
`

export const InputContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`

export const StyledInput = styled.input`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;

    &:focus{
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
`

export const StyledButton = styled.button`
    padding: 10px 15px;
    background-color: ${props => props.$variant === 'delete' ? '#ff4d4f' : '#1890ff'};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 5vh;

    &:hover{
        background-color: ${props => props.$variant === 'delete' ? '#ff7875' : '#40a9ff'};
    }
`

export const CommentItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 0;
    border-bottom: 1px soild #eee;
    animation: 0.3s ease-out;

    &:last-child{
        border-bottom: none;
    }
`

export const AuthorName = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    color:  #3a3a3a;
`

export const CommentText = styled.div`
    color: #666;
    margin-bottom: 5px;
`

export const CommentTimestamp = styled.div`
    color: #999;
    font-size: 12px;
`

export const CommentInfo = styled.div`
    flex-grow: 1;
`