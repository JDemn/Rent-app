import React from 'react'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//our components
import { LoginScreen } from '../components/Auth/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
