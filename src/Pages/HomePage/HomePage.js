import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { goToTripsPage, goToLoginPage } from "../../Route/NavFunctions";
import { MainContainer, TextContainer, LoginButton } from './StyleHomePage';
import { Header } from "../../Components/Header";

//_________________________________________________________________________________________________________________________________

const Home = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header />
      <TextContainer>
        <p>Viagem pra lá de outro mundo.</p>
        <p>Preço nada estratosférico.</p>
        <Button
          variant="outlined"
          color='secondary'
          onClick={() => goToTripsPage(navigate)}>
          VIAJAR JÁ
        </Button>
      </TextContainer>
    </MainContainer>
  );
}

export default Home;