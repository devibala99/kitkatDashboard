import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
const Sidebar = ({ nameOfUser, isOnline }) => {

    console.log(nameOfUser);
    const data = [
        {
            title: "Dashboard",
            icon: "fa-solid fa-palette",
            path: "/home/dashboard",
            id: 1,
        },
        {
            title: "Student Info",
            icon: "fa-solid fa-user",
            path: "/home/studentInfo",
            id: 2
        },
        {
            title: "Attendance",
            icon: "fa-solid fa-calendar-days",
            path: "/home/attendance",
            id: 3
        },
        {
            title: "Task Schedule",
            icon: "fa-solid fa-calendar-week",
            path: "/home/task",
            id: 4
        },
        {
            title: "Interview Schedule",
            icon: "fa-regular fa-calendar-check",
            path: "/home/interview",
            id: 5
        },
        {
            title: "Marketing Field",
            icon: "fa-solid fa-user-tie",
            path: "/home/marketing",
            id: 6
        },
        {
            title: "Client Info",
            icon: "fa-solid fa-circle-info",
            path: "/home/client",
            id: 7
        },
        {
            title: "Setting",
            icon: "fa-solid fa-gear",
            path: "/home/setting",
            id: 8
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='side-container'>
            <div style={{ width: isOpen ? "250px" : "50px" }} className='sidebar'>
                <div className="top-section">
                    <h2 style={{ display: isOpen ? "block" : "none" }} >
                        KITKAT TECH
                    </h2>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBarsStaggered onClick={toggle} />
                    </div>
                </div>

                <div className="profile" >

                    <i className='fa-solid fa-user'></i>&emsp;&emsp;

                    <h4 style={{ display: isOpen ? "block" : "none" }} >

                        {nameOfUser}
                    </h4>
                </div>

                <div className='main-nav' style={{ display: isOpen ? "block" : "none" }} >Main Navigation</div>
                {
                    data.map((list) =>

                        <li key={list.id}>
                            <NavLink to={list.path} key={list.id} className="link">
                                <div>
                                    <i className={list.icon}></i>
                                </div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{list.title}</div>
                            </NavLink>
                        </li>
                    )
                }
            </div>
            <Outlet />
        </div>
    )
}

export default Sidebar

