import React from 'react'
import { Outlet } from 'react-router-dom'
// import Sidebar from './Sidebar'
import Dashboard1 from './Dashboard1'
const Home = ({ nameOfUser }) => {
    console.log(nameOfUser)
    return (
        <div>
            <Dashboard1 nameOfUser={nameOfUser} />
            <Outlet />
        </div>
    )
}

export default Home
