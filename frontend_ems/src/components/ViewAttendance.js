import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import img2 from "../images/orange.png"
import { API_URL_ATTENDANCE } from '../url/url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import "../stylesheets/attendance.css"
const ViewAttendance = ({ nameOfUser }) => {

    const [displayAttendance, setAttendance] = useState([]);
    const [studentAttendance, setStudentAttendance] = useState([]);
    const [inputEntry, setInputEntry] = useState(9);
    const [searchEntry, setSearchEntry] = useState("");
    useEffect(() => {
        axios.get(API_URL_ATTENDANCE)
            .then((res) => {
                setAttendance(res.data)
                setStudentAttendance(res.data)
            })
    }, [])
    const navAttendance = useNavigate();
    const navigateAdd = () => {
        navAttendance('/home/addAttendance');
    }
    const navigateView = () => {
        navAttendance('/home/viewAttendance');
    }
    const handleEntry = (e) => {
        setInputEntry(e.target.value);
        setStudentAttendance(displayAttendance.slice(0, inputEntry));
    }
    const handleSearch = (e) => {
        setSearchEntry(e.target.value);
        const filteredEntries = displayAttendance.filter((entry) => {
            return entry.name || '' ? entry.name.toLowerCase().includes(searchEntry.toLowerCase()) : '';
        });
        console.log(filteredEntries);
        setStudentAttendance(filteredEntries);
    }
    return (

        <div className="attendance">
            <Sidebar nameOfUser={nameOfUser} />
            <div className='attendance-content'>
                <Header />
                <div className="attendance-display" id="attendance-display">
                    <div className='input-container'>
                        <div className="display-att">
                            <div className="display-content-att" onClick={navigateAdd} >
                                <div className="dc-cont" id="dc-img1">
                                    <img src={img2} alt="" style={{ width: "150px", height: "120px" }} />
                                </div>
                                <div className="dc-cont">
                                    <h3>Add Attendance</h3>
                                </div>

                            </div>
                            <div className="display-content-view" onClick={navigateView}>
                                <div className="dc-cont" id="dc-img2">
                                    <img src={img2} alt="" style={{ width: "150px", height: "120px" }} />
                                </div>
                                <div className="dc-cont">
                                    <h3>View Attendance</h3>
                                </div>
                            </div>
                        </div>
                        <div className="dash-table-containerFilter">
                            <div className="filterEntry">
                                <span>Show </span>
                                <input type="number" min="0" max={displayAttendance.length}
                                    value={inputEntry} id="filter-entry" onChange={(e) => handleEntry(e)} />
                                <span> entries</span>
                            </div>

                            <div className="searchEntry">
                                <label>Search&nbsp;</label>
                                <input type="text" value={searchEntry}
                                    id="search-entry" onChange={(e) => handleSearch(e)}></input>
                            </div>
                        </div>

                        <div className="student-table" id="studentTable" style={{ height: "49vh" }}>
                            <div className="attendance-data"></div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>Status</th>
                                        <th>Permission</th>
                                        <th>Leave Type</th>
                                        <th>In Date</th>
                                        <th>In Time</th>
                                        <th>Out Date</th>
                                        <th>Out Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentAttendance.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.status_work}</td>
                                                    <td>{item.permission}</td>
                                                    <td>{item.leave}</td>
                                                    <td>{item.in_date}</td>
                                                    <td>{item.in_time}</td>
                                                    <td>{item.out_date}</td>
                                                    <td>{item.out_time}</td>
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
    )
}

export default ViewAttendance
