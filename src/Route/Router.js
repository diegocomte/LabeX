import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage';
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage';
import AdminCreateTripPage from '../Pages/AdminCreateTrip/AdminCreateTripPage';
import AdminDetailsTripPage from '../Pages/AdminDetailsTrip/AdminDetailsTripPage';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import AboutUsPage from '../Pages/AboutsUsPage/AboutUsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//___________________________________________________________________________________________

export default function RouteComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/trips/list' element={<ListTripsPage />} />
                <Route path='/trips/application' element={<ApplicationFormPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/admin/trips/list' element={<AdminHomePage />} />
                <Route path='/admin/trips/create' element={<AdminCreateTripPage />} />
                <Route path='/admin/trips/:id' element={<AdminDetailsTripPage />} />
                <Route path='/about' element={<AboutUsPage/>} />
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}