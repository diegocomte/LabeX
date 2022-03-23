import React from 'react';
import LogoWhite from '../../Assets/LogoWhite.png';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToCreateTripPage } from '../../Route/NavFunctions';
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import { MainContainer, TripsContainer, HomeButtonContainer } from './StyleAdminHomePage';
import { logout } from '../../Services/Requests';
import useDeleteTrips from '../../Hooks/useDeleteTrips';


//___________________________________________________________________________________


export default function AdminHomePage() {
  useProtectedPage();
  const navigate = useNavigate();

  return (
    <MainContainer>
      <HomeButtonContainer>
        <img
          onClick={() => goToHomePage(navigate)}
          src={LogoWhite}
          alt='Logo LabeX' />
        <Button
          variant="outlined"
          color='secondary'
          onClick={() => goToCreateTripPage(navigate)}>
          Criar viagens
        </Button>
        <Button
          variant="outlined"
          color='secondary'
          onClick={() => logout(navigate)}>
          Sair
        </Button>
      </HomeButtonContainer>
      <h1>Painel administrativo</h1>
      <TripsContainer>
        {useDeleteTrips()}
      </TripsContainer>
    </MainContainer>
  )
}