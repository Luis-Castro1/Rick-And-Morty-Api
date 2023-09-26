import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Navigation = () => {
    return (
        <div className='bg-[#272B33]'>
            <NavBar/>
            <Outlet />
        </div>
    )
}

export default Navigation