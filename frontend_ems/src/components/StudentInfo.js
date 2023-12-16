import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import "../stylesheets/attendance.css"
import img2 from "../images/orange.png"
import { API_URL_STUDENTSDB } from '../url/url';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const StudentInfo = ({ nameOfUser }) => {
    const [studentDetails, setStudentDtails] = useState([]);
    const [inputEntry, setInputEntry] = useState(9);
    const [searchEntry, setSearchEntry] = useState("");
    const [displayEntry, setDisplayEntry] = useState([]);
    const navAttendance = useNavigate();
    // const navViewAttendance = useNavigate();
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

    const navigateAdd = () => {
        navAttendance('/home/addStudentInfo');
    }
    const navigateView = () => {
        navAttendance('/home/studentInfo');
    }
    return (
        <div className="attendance">
            <Sidebar nameOfUser={nameOfUser} />
            <div className='attendance-content'>
                <Header />
                <div className="attendance-display" id="attendance-display">
                    <div className="attendance-data">
                        <div className="attendance-title">

                            <div className="display-att">
                                <div className="display-content-att" onClick={navigateAdd} >
                                    <div className="dc-cont" id="dc-img1">
                                        <img src={img2} alt="" style={{ width: "150px", height: "120px" }} />
                                    </div>
                                    <div className="dc-cont">
                                        <h3>Add Student</h3>
                                    </div>

                                </div>
                                <div className="display-content-view" onClick={navigateView}>
                                    <div className="dc-cont" id="dc-img2">
                                        <img src={img2} alt="" style={{ width: "150px", height: "120px" }} />
                                    </div>
                                    <div className="dc-cont">
                                        <h3>View Student</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="dash-table" id="dash-table-student">
                        <div className="dash-table-container">
                            <div className='dash-table-containerTitle'>
                                <h3>Students Data Table</h3>
                            </div>
                            <div className='input-container'>
                                <div className="dash-table-containerFilter">
                                    <div className="filterEntry" style={{ display: "flex" }}>
                                        <span>Show </span>&nbsp;&nbsp;
                                        <input type="number" min="0" max={displayEntry.length}
                                            value={inputEntry} id="filter-entry" onChange={(e) => handleEntry(e)} style={{ padding: "0" }} />
                                        <span> entries</span>
                                    </div>

                                    <div className="searchEntry" style={{ display: "flex" }}>
                                        <label>Search&nbsp;</label>
                                        <input type="text" value={searchEntry}
                                            id="search-entry" onChange={(e) => handleSearch(e)}></input>
                                    </div>
                                </div>

                                <div className="student-table" id="studentTable">
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

                </div>
            </div>
        </div>
    )
}

export default StudentInfo
