import styled from 'styled-components';
import stars from '../../Assets/Stars.jpg';

export const MainContainer = styled.div` 
width: 100vw;
height: 100vh;
background-image: url(${stars});
background-position-y: top;
background-size: cover;
`

export const ButtonHeaderContainer = styled.section`
display: flex;
justify-content: space-between;
width: 99vw;

img{
    margin-top: 10px;
    max-height: 80px;
    :hover{cursor: pointer;}
}

button{
    margin: 20px;
    width: 120px;
    height: 45px;
    font-size: 18px;
    border: 2px solid white;
    color: white;
    :hover{transition: 1s; cursor: pointer; border: 2px solid white; background-color: white; color: black;};
    }
`

export const IntroductionContainer = styled.div` 
display: flex;
flex-direction: column;
margin: 5px 40px;

h1{
    margin-bottom: 10px;
    text-align: center;
}

p{
    margin-bottom: 40px;
    text-align: justify;
    font-size: 20px;
}
`

export const SocialMedia = styled.div` 
height: 10vh;
display: flex;
margin-top: 10px;
justify-content: space-around;

a{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 70%;
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    border: 1px solid gray;
    border-radius: 5px;
    :hover{
        transition: 1s; 
        cursor: pointer; 
        border: 2px solid white; 
        background-color: white; 
        color: black;
    };
    :active{transition: 0.3s; background-color: black};
}
`