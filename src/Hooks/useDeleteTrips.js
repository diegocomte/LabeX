import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import useRequestData from '../Hooks/UseRequestData';
import {LoadingIcon} from '../Components/LoadingIcon';
import { token } from '../Constants/Token'
import { CardTrip } from '../Pages/AdminHomePage/StyleAdminHomePage';
import { goToAdminDetailsTripPage } from '../Route/NavFunctions';
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';
import { useNavigate } from "react-router-dom";


//____________________________________________________________________________________________


export default function useDeleteTrips() {
    const navigate = useNavigate();
    const [listTrips, error, loading] = useRequestData(`${BASE_URL}${userPathVariables}trips`)

    const deleteTrip = (id, name) => {
        if (window.confirm(`Deseja realmente deletar a viagem "${name}"?`)) {
            axios.delete(`${BASE_URL}${userPathVariables}trips/${id}`, { headers: { auth: token } })
                .then((res) => {
                    alert('Viagem deletada')
                    window.location.reload()
                })
                .catch((err) => {
                    alert(`Ocorreu um erro com sua requisição: ${err.message}`)
                })
        }
    }

    return (
        error ? alert(`Ocorreu um erro com sua requisição:${error.message}. Tente novamente`) :
            listTrips ? listTrips.trips.map((trip) => {
                return (
                    <CardTrip
                        key={trip.id}>
                        <p>
                            <h3 onClick={() => goToAdminDetailsTripPage(navigate, trip.id)}>
                                {trip.name}
                            </h3>
                            <DeleteOutlineIcon
                                className='deleteIcon'
                                onClick={() => deleteTrip(trip.id, trip.name)}>
                                Delete
                            </DeleteOutlineIcon>
                        </p>
                    </CardTrip>
                )
            }) : LoadingIcon()
    )
}