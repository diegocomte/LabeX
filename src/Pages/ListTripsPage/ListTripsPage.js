import Button from '@mui/material/Button';
import LogoWhite from '../../Assets/LogoWhite.png'
import useRequestData from '../../Hooks/UseRequestData';
import {LoadingIcon} from '../../Components/LoadingIcon';
import { BASE_URL } from '../../Constants/BASE_URL';
import { userPathVariables } from '../../Constants/UserPathVariables';
import { goToHomePage, goToApplicationPage } from '../../Route/NavFunctions';
import { useNavigate } from "react-router-dom";
import {
    MainContainer,
    TripsContainer,
    MinorContainer,
    ApplyContainer,
    HomeButtonContainer,
    CardTrip,
} from './StyleLisTripsPage'


//_______________________________________________________________________________________________________________________________


function ListTrips() {
    const [listTrips] = useRequestData(`${BASE_URL}${userPathVariables}trips`)
    const navigate = useNavigate();

    const displayTrips = listTrips ? listTrips.trips.map((trip) => {
        return (
            <CardTrip key={trip.id}>
                <p><h3>Nome</h3>: {trip.name}</p>
                <p><h3>Descrição</h3>: {trip.description}</p>
                <p><h3>Planeta</h3>: {trip.planet}</p>
                <p><h3>Duração</h3>: {trip.durationInDays} dias</p>
                <p><h3>Data</h3>: {trip.date}</p>
            </CardTrip>
        )
    }) : LoadingIcon()

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
                    onClick={() => goToHomePage(navigate)}>
                    Home
                </Button>
            </HomeButtonContainer>
            <MinorContainer>
                <ApplyContainer>
                    <h1>Homens de Marte, mulheres de Vênus. Você escolhe seu mundo agora!</h1>
                    <Button
                        variant="outlined"
                        color='secondary'
                        onClick={() => goToApplicationPage(navigate)}>
                        Inscrever-se
                    </Button>
                </ApplyContainer>
                <TripsContainer>
                    {displayTrips}
                </TripsContainer>
            </MinorContainer>
        </MainContainer>
    );
}

export default ListTrips;