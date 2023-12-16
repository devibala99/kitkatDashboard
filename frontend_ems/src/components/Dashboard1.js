import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import "../stylesheets/dashboard.css"
import Header from './Header'
import { API_URL_STUDENTSDB } from '../url/url';
import axios from "axios";

const Dashboard1 = ({ nameOfUser, isOnline }) => {
    const [studentDetails, setStudentDtails] = useState([]);
    const [inputEntry, setInputEntry] = useState(9);
    const [searchEntry, setSearchEntry] = useState("");
    const [displayEntry, setDisplayEntry] = useState([]);
    useEffect(() => {
        axios.get(API_URL_STUDENTSDB)
            .then((res) => {
                setStudentDtails(res.data);
                setDisplayEntry(res.data);
            })
    }, []);

    const changeName = (details) => {
        return details.name || '' ? details.name.toUpperCase() : '';
    }
    const changeDate = (details) => {
        return details.doj || '' ? details.doj.slice(0, 10) : "";
    }
    const handleEntry = (e) => {
        setInputEntry(e.target.value);
        setStudentDtails(displayEntry.slice(0, inputEntry));
    }

    const handleSearch = (e) => {
        setSearchEntry(e.target.value);

        const filteredEntries = displayEntry.filter((entry) => {
            return entry.name || '' ? entry.name.toLowerCase().includes(searchEntry.toLowerCase()) : '';
        });
        console.log(filteredEntries);
        setStudentDtails(filteredEntries);
    }
    return (
        <div className="dashboard">
            <Sidebar nameOfUser={nameOfUser} isOnline={isOnline} />
            <div className='dash-content'>
                <Header />

                <div className="dashboard-display">
                    <div className="dashboard-data">
                        <div className="dash-title">
                            <h1>Data Tables</h1>
                        </div>
                        <div className="dash-table">
                            <div className="dash-table-container">
                                <div className='dash-table-containerTitle'>
                                    <h3>Students Data Table</h3>
                                </div>
                                <div className='input-container'>
                                    <div className="dash-table-containerFilter">
                                        <div className="filterEntry">
                                            <span>Show </span>
                                            <input type="number" min="0" max={displayEntry.length}
                                                value={inputEntry} id="filter-entry" onChange={(e) => handleEntry(e)} />
                                            <span> entries</span>
                                        </div>

                                        <div className="searchEntry">
                                            <label>Search&nbsp;</label>
                                            <input type="text" value={searchEntry}
                                                id="search-entry" onChange={(e) => handleSearch(e)}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="student-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="id-table">Student Id</th>
                                        <th className="name-table">Student Name</th>
                                        <th className="contact-table">Contact</th>
                                        <th className="work-table">Work Type</th>
                                        <th className="date-table">Date of Joining</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentDetails.map((details, index) => {
                                            return (
                                                <tr key={index} >

                                                    <td className="id-table">{index + 1}</td>
                                                    <td className="name-table" >{changeName(details)}</td>
                                                    <td className="contact-table">{details.contact}</td>
                                                    <td className="work-table">{details.worktype}</td>
                                                    <td className="date-table">{changeDate(details)}</td>
                                                </tr>

                                            )
                                        })

                                    }
                                </tbody>


                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard1
