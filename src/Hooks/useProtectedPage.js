import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const useProtectedPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            alert("Você não está logado. Informe seu dados.")
            navigate('/login')
        }
    }, [])

}