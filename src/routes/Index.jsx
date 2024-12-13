import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import views
import Home from '../views/Home/Home'
import Error from '../views/Error/Error'

// import layout
import MainLayout from '../layout/MainLayout'

export default function RoutesPath() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>

                    {/* Route Home */}
                    <Route index element={<Home />} />

                </Route>

                {/* Route Not Found */}
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
