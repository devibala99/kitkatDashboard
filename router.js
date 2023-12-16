const express = require("express");
const { get_data, post_data, Login, get_studentData, post_studentData, post_attendance, get_attendanceData, post_studentInfo, get_studentInfo } = require("./crud");

const router = express.Router();

router.get("/getUser", get_data);
router.get("/getStudentData", get_studentData);
router.get("/getAttendanceData", get_attendanceData);
router.post("/postStudentData", post_studentData);
router.post("/postAttendance", post_attendance);
router.post("/register", post_data);
router.post("/login", Login);
router.get("/getStudentInformation", get_studentInfo);
router.post("/postStudentInformation", post_studentInfo)


module.exports = router;
