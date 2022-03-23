import axios from 'axios';
import useRequestData from '../../Hooks/UseRequestData';
import useForms from '../../Hooks/UseForms';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import LogoWhite from '../../Assets/LogoWhite.png';
import { countries } from '../../Constants/Countries';
import { BASE_URL } from '../../Constants/BASE_URL';
import { userPathVariables } from '../../Constants/UserPathVariables';
import { useNavigate } from "react-router-dom";
import { goToHomePage, goBack } from '../../Route/NavFunctions';
import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import {
    MainContainer,
    FormContainer,
    ButtonHeaderContainer,
    AlignSection,
    ButtonsSubmitAndBackSection
} from './StyleApplicationFormPage';
import {token} from '../../Constants/Token';


//_______________________________________________________________________________________________________________________________


export default function ApplyToTrip(props) {
    const navigate = useNavigate();
    const [tripId, setTripId] = useState("");
    const [listTrips] = useRequestData(`${BASE_URL}${userPathVariables}trips`)
    const { form, onChange, clearFields } = useForms({ name: "", age: 18, applicationText: "", profession: "", country: "" });

    const onChangeTrip = (e) => {
        setTripId(e.target.value)
    }

    const applicationCandidate = () => {
        axios.post(`${BASE_URL}${userPathVariables}trips/${tripId}/apply`, form, { headers: { auth: token } })
            .then((res) => {
                alert("Candidatura submetida com sucesso!")
                window.location.reload()
            })
            .catch((err) => {
                alert(`Ocorreu um problema com sua requisição: ${err.message}`)
            })
    }

    const submitToCreateTrip = (event) => {
        event.preventDefault();
        applicationCandidate()
        clearFields();
    };


    return (
        <MainContainer>
            <ButtonHeaderContainer>
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
            </ButtonHeaderContainer>
            <AlignSection>
                <FormContainer>
                    <form
                        className='Form'
                        onSubmit={submitToCreateTrip}>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Viagem</InputLabel>
                                <Select
                                    className='Select'
                                    required
                                    name='trip'
                                    title='Escolha o seu destino'
                                    color='secondary'
                                    onChange={onChangeTrip}>
                                    {listTrips && listTrips.trips.map((trip) => {
                                        return (
                                            <MenuItem
                                                key={trip.id}
                                                value={trip.id}>
                                                {trip.name} - {trip.planet}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField
                            className='TextField'
                            required
                            name='name'
                            label='Nome'
                            inputProps={{ pattern: "^.{3,}$" }}
                            title={"O nome deve ter no mínimo 3 caracteres"}
                            variant="outlined"
                            color='secondary'
                            onChange={onChange} />

                        <TextField
                            className='TextField'
                            required
                            name='age'
                            label='Idade'
                            variant="outlined"
                            color='secondary'
                            type="number"
                            inputProps={{ min: '18' }}
                            title={"Somente maiores de 18 anos"}
                            onChange={onChange} />

                        <TextField
                            className='TextField'
                            required
                            name='applicationText'
                            inputProps={{ pattern: "^.{30,}$" }}
                            title={"A descrição deve ter no mínimo 30 caracteres"}
                            label='Descrição'
                            variant="outlined"
                            color='secondary'
                            onChange={onChange} />

                        <TextField
                            className='TextField'
                            required
                            name='profession'
                            label='Profissão'
                            inputProps={{ pattern: "^.{10,}$" }}
                            title={"A profissão deve ter no mínimo 10 caracteres"}
                            variant="outlined"
                            color='secondary'
                            onChange={onChange} />

                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">País</InputLabel>
                                <Select
                                    className='Select'
                                    required
                                    name='country'
                                    title='Selecione o seu país'
                                    color='secondary'
                                    onChange={onChange}>
                                    {countries.map((country) => {
                                        return (
                                            <MenuItem
                                                key={country}
                                                value={country}>
                                                {country}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>

                        <ButtonsSubmitAndBackSection>
                            <Button
                                onClick={() => goBack(navigate)}
                                variant="outlined"
                                color='secondary'>
                                Voltar
                            </Button>
                            <Button
                                variant="outlined"
                                color='secondary'
                                type='submit'>
                                Enviar
                            </Button>
                        </ButtonsSubmitAndBackSection>
                    </form>
                </FormContainer>
            </AlignSection>
        </MainContainer>
    )
}