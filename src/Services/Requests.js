import { goToHomePage } from "../Route/NavFunctions";

export const logout = (navigate) => {
    localStorage.removeItem("token")
    goToHomePage(navigate)
}

export const getTodayDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0'); //.padStart() adds left zeros
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const stringToday = year + '-' + month + '-' + day;
    return stringToday
}
