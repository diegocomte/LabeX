import styled from 'styled-components';
import rocket from '../../Assets/Spaceship.jpg';

//________________________________________________________________________________________________________

export const MainContainer = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: space-between;
background-image: url(${rocket});
background-position-y: top;
background-size: cover;
`

export const TextContainer = styled.section` 
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
padding-bottom: 90px;
margin: 50px;
color: #000000;
font-weight: bold;
font-size: 30px;

button{
    margin-top: 40px;
    font-size: 30px;
    border: 2px solid black;
    width: 250px;
    color: black;
    :hover{
        transition: 0.6s; 
        cursor: pointer; 
        width: 260px; 
        border: 2px solid white; 
        background-color: black; 
        color: white;}
}
`