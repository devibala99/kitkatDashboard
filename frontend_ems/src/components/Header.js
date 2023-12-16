import React from 'react'
import { FaEnvelope, FaBell, FaFlag, FaShareAlt } from "react-icons/fa";
import "../stylesheets/dashboard.css"
const Header = ({ nameofUser, isOnline }) => {

    return (
        <div className='header'>
            <div className="items">
                <span><FaEnvelope /></span>
            </div>
            <div className="items">
                <span><FaBell /></span>
            </div>
            <div className="items">
                <span><FaFlag /></span>
            </div>
            <div className="items">

                <span><i className='fa-solid fa-user'

                ></i>&nbsp;User</span>
            </div>
            <div className="items">
                <span><FaShareAlt /></span>
            </div>
        </div>
    )
}

export default Header
