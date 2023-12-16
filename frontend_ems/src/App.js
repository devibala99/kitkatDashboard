import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from "./components/Home"
import Attendance from './pages/Attendance';
import Dashboard1 from './components/Dashboard1';
import { useState } from 'react';
import ViewAttendance from './components/ViewAttendance';
import AddAttendance from './components/AddAttendance';
import StudentInfo from './components/StudentInfo';
import AddStudentInfo from './components/AddStudentInfo';
function App() {

    const [nameOfUser, setNameofUser] = useState("");
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    window.addEventListener("online", () => {
        setIsOnline(true);
    });
    window.addEventListener("offline", () => {
        setIsOnline(false);
    });

    const handleName = (name) => {
        console.log(name);

        const userName = name.split("@");
        const tmp = userName[0].substring(0, 8);
        const upper = tmp.charAt(0).toUpperCase() + tmp.slice(1);
        setNameofUser(upper);
        console.log("In handle " + nameOfUser)
    };

    console.log(nameOfUser + " in app");
    return (
        <div className="App">


            <Routes>
                <Route path="/" element={<Login handleName={handleName} />}></Route>
                <Route path="/home" exact element={<Home isOnline={isOnline} nameOfUser={nameOfUser} />}></Route>
                <Route path="/home/dashboard" element={<Dashboard1 isOnline={isOnline} />}></Route>
                <Route path="/home/studentInfo" element={<StudentInfo />}></Route>
                <Route path="/home/AddStudentInfo" element={<AddStudentInfo />}></Route>
                <Route path="/home/attendance" element={<Attendance />}></Route>
                <Route path="/home/addAttendance" element={<AddAttendance />}></Route>
                <Route path="/home/viewAttendance" element={<ViewAttendance />}></Route>
            </Routes>
        </div>
    );
}

export default App;
