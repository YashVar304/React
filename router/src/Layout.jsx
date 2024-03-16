import React from 'react'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
        
    )
}

export default Layout
