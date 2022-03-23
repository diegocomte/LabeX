
export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToApplicationPage = (navigate) => {
    navigate('/trips/application')
}

export const goToCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToTripsPage = (navigate) => {
    navigate('/trips/list')
}

export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToAdminDetailsTripPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goToAdminHomePage = (navigate) => {
    navigate('/admin/trips/list')
}

export const goToAboutUs = (navigate) => {
    navigate('/about')
}