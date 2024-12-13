import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import SearchFeature from '../components/Search-Feature/SearchFeature'
// import Ads from '../components/Ads/Ads'
import Footer from '../components/Footer/Footer'


export default function MainLayout() {
    return (
        <div>
            <Navbar />

            <SearchFeature />

            <main className='py-8 px-24 mx-auto max-w-screen-xl lg:py-16'>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
