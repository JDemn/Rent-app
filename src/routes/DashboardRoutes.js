import React from 'react'
import { Routes, Route } from "react-router-dom";


//our components
import { NabBar } from '../components/ui/NabBar';
import { AboutUs } from '../components/about/AboutUs';
import { MainHome } from '../components/homePage/MainHome';


export const DashboardRoutes = () => {
    return (
        <>
           <NabBar />
           <div className = "container ml-1">
                <Routes>                   
                    <Route path = "about" element = {<AboutUs />}/>    
                    <Route path= "/" element={<MainHome />} />
                </Routes>   
            </div> 
        </>
    )
}
