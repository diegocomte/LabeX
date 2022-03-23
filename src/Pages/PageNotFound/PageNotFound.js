import { MainContainer } from "./StylePageNotFound";
import Button from '@mui/material/Button';
import { goToHomePage } from '../../Route/NavFunctions';
import { useNavigate } from "react-router-dom";

export default function AdminCreateTripPage() {
    const navigate = useNavigate();
    return (
        <MainContainer>
            <h1>Página não encontrada</h1>
            <Button
                variant="outlined"
                color='secondary'
                onClick={() => goToHomePage(navigate)}>
                Voltar à página inicial
            </Button>
        </MainContainer>
    )
}