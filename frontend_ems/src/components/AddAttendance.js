import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { FaUsers } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import "../stylesheets/addAttendance.css"
import { API_URL_POST_ATTENDANCE, API_URL_STUDENTSDB } from '../url/url';
import axios from 'axios';
const AddAttendance = ({ nameOfUser }) => {

    const [dataName, setDataName] = useState([]);
    useEffect(() => {
        axios.get(API_URL_STUDENTSDB)
            .then((res) => {
                setDataName(res.data);
            })
    })
    const navAttendance = useNavigate();
    const navigateView = () => {
        navAttendance('/home/viewAttendance');
    }

    const [attendanceEntry, setAttendanceEntry] = useState({
        name: "",
        status_work: "",
        permission: "",
        leave: "",
        in_date: "",
        in_time: "",
        out_date: "",
        out_time: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        console.log(attendanceEntry);
        const newData = { ...attendanceEntry };
        newData[e.target.id] = e.target.value;
        setAttendanceEntry(newData);
        console.log(newData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API_URL_POST_ATTENDANCE, {
            name: attendanceEntry.name,
            status_work: attendanceEntry.status_work,
            permission: attendanceEntry.permission,
            leave: attendanceEntry.leave,
            in_date: attendanceEntry.in_date,
            in_time: attendanceEntry.in_time,
            out_date: attendanceEntry.out_date,
            out_time: attendanceEntry.out_time

        })
            .then(res => {
                console.log(res.data)
            })

        setAttendanceEntry({
            name: "",
            status_work: "",
            permission: "",
            leave: "",
            in_date: "",
            in_time: "",
            out_date: "",
            out_time: ""
        });


    }

    return (
        <div className="attendance">
            <Sidebar nameOfUser={nameOfUser} />
            <div className='attendance-content'>
                <Header />
                <div className="add-attendance-display" style={{ height: "85vh" }}>
                    <div className="attendance-data">
                        <div className="display-content-view" id="add-content" onClick={navigateView}>
                            <div className="dc-cont" id="dc-img-content">
                                <FaUsers />
                            </div>
                            <div className="dc-cont" id="dc-title-content">
                                <h3>View Attendance</h3>
                            </div>
                        </div>
                    </div>

                    <div className="add-attendance-form">
                        <form action="" className='form'>
                            <div className="form-list">
                                <label >Name</label>
                                <select name="selectName" id="name" value={attendanceEntry.name} onChange={(e) => handleChange(e)} >
                                    {
                                        dataName.map((entry, index) => {
                                            return (
                                                <option key={index} value={entry.name}>{entry.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-list">
                                <label >Status</label>

                                <select name="select" value={attendanceEntry.status_work} onChange={(e) => handleChange(e)} id="status_work">
                                    <option value="---"></option>
                                    <option value="In Office">In Office</option>
                                    <option value="Work From Home">Work From Home</option>
                                    <option value="Leave">Leave</option>
                                </select>
                            </div>
                            <div className="form-list">
                                <label >Permission</label>
                                <select name="permission" value={attendanceEntry.permission} id="permission" onChange={(e) => handleChange(e)}>
                                    <option value="---"></option>
                                    <option value="Taken">Taken</option>
                                    <option value="Not Taken">Not Taken</option>
                                </select>
                            </div>
                            <div className="form-list">
                                <label >Leave Type</label>
                                <select name="leave" value={attendanceEntry.leave} id="leave" onChange={(e) => handleChange(e)}>
                                    <option value="---">---</option>
                                    <option value="Earned Leave">Earned Leave</option>
                                    <option value="Casual Leave">Casual Leave</option>
                                    <option value="Sick Leave">Sick Leave</option>
                                </select>
                            </div>

                            <div className="form-list">
                                <label >In Date</label>
                                <input type="date" name="indate" min="2023-01-01" max="2024-12-31" value={attendanceEntry.in_date} onChange={(e) => handleChange(e)} id="in_date" />
                            </div>
                            <div className="form-list">
                                <label >In Time</label>
                                <input type="time" id="in_time" name="intime" min="09:00" max="18:00" value={attendanceEntry.in_time} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="form-list">
                                <label >Out Date</label>
                                <input type="date" name="indate" min="2023-01-01" max="2024-12-31" value={attendanceEntry.out_date} onChange={(e) => handleChange(e)} id="out_date" />
                            </div>
                            <div className="form-list">
                                <label >Out Time</label>
                                <input type="time" id="out_time" name="intime" min="09:00" max="18:00" value={attendanceEntry.out_time} onChange={(e) => handleChange(e)} />
                            </div>

                            <div className="form-list btn-cls">
                                <button id="add-attendance-btn" onClick={(e) => handleSubmit(e)}>Submit</button>
                            </div>
                        </form>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAttendance
