import { Button } from '@mui/material';
import styled from 'styled-components';
import Logo from '../Assets/Logo.png'
import { goToAboutUs, goToHomePage, goToLoginPage } from '../Route/NavFunctions';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div` 
display: flex;
position: absolute;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 100px;
background-color: transparent;
:hover{transition: 1s; background-color: #0000006f;};

img{
    background-color: transparent;
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

export const Header = () => {
    const navigate = useNavigate();
    return (
        <MainContainer>
            <img
                onClick={() => goToHomePage(navigate)}
                src={Logo}
                alt='Logo LabeX' />
            <Button
                variant="outlined"
                color='secondary'
                onClick={() => goToAboutUs(navigate)}>
                Sobre
            </Button>
            <Button
                variant="outlined"
                color='secondary'
                onClick={() => goToLoginPage(navigate)}>
                Login
            </Button>
        </MainContainer>
    )
}