import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import "../stylesheets/attendance.css"
import img2 from "../images/orange.png"
import { useNavigate } from 'react-router-dom'

const Attendance = ({ nameOfUser }) => {

    const navAttendance = useNavigate();


    const navigateAdd = () => {
        navAttendance('/home/addAttendance');
    }
    const navigateView = () => {
        navAttendance('/home/viewAttendance');
    }
    return (
        <div className="attendance">
            <Sidebar nameOfUser={nameOfUser} />
            <div className='attendance-content'>
                <Header />
                <div className="attendance-display" id="attendance-display" style={{ paddingBottom: "2rem" }}>
                    <div className="attendance-data">
                        <div className="attendance-title">

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attendance
