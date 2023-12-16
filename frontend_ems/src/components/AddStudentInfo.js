import React, { useState } from 'react'
import { API_POST_STUDENTINFO } from '../url/url'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios';
import { FaUsers } from "react-icons/fa6";
import Header from './Header';

const AddStudentInfo = ({ nameOfUser }) => {
    const navAttendance = useNavigate();
    const navigateView = () => {
        navAttendance('/home/studentInfo');
    }

    const [attendanceEntry, setAttendanceEntry] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        motherName: "",
        email: "",
        address: "",
        phoneNumber: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        console.log(attendanceEntry);
        const newData = { ...attendanceEntry };
        newData[e.target.id] = e.target.value;
        setAttendanceEntry(newData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API_POST_STUDENTINFO, {
            firstName: attendanceEntry.firstName,
            lastName: attendanceEntry.lastName,
            fatherName: attendanceEntry.fatherName,
            motherName: attendanceEntry.motherName,
            email: attendanceEntry.email,
            address: attendanceEntry.address,
            phoneNumber: attendanceEntry.phoneNumber,
        })
            .then(res => {
                console.log(res.data)
            })

        setAttendanceEntry({
            firstName: "",
            lastName: "",
            fatherName: "",
            motherName: "",
            email: "",
            address: "",
            phoneNumber: ""
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
                                <h3>View Student</h3>
                            </div>
                        </div>
                    </div>

                    <div className="add-attendance-form">
                        <form action="" className='form'>
                            <div className="form-list">
                                <label >First Name</label>
                                <input type="text" id="firstName" value={attendanceEntry.firstName} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="form-list">
                                <label >Last Name</label>
                                <input type="text" id="lastName" value={attendanceEntry.lastName} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="form-list">
                                <label >Father Name</label>
                                <input type="text" id="fatherName" value={attendanceEntry.fatherName} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="form-list">
                                <label >Mother Name</label>
                                <input type="text" id="motherName" value={attendanceEntry.motherName} onChange={(e) => handleChange(e)} />
                            </div>

                            <div className="form-list">
                                <label >Email</label>
                                <input type="email" id="email" value={attendanceEntry.email} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="form-list form-list-text">
                                <label >Address</label>
                                <textarea id="address" value={attendanceEntry.address} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="form-list">
                                <label >Phone Number</label>
                                <input type="tel" id="phoneNumber" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
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

export default AddStudentInfo
