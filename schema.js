const mongoose = require("mongoose");

const schemaLogin = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
});

const student = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
        maxLength: 10
    },
    worktype: {
        type: String,
        required: true,
    },
    doj: {
        type: Date,
        required: true,
    }
});

const Attendance = mongoose.Schema({
    name: {
        type: String,

    },
    status_work: {
        type: String,

    },
    permission: {
        type: String,

    },
    leave: {
        type: String,

    },
    in_date: {
        type: String,

    },
    in_time: {
        type: String,

    },
    out_date: {
        type: String,

    },
    out_time: {
        type: String,

    },
})

const informationStudent = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    }
});
const schemaData = mongoose.model("registers", schemaLogin);
const studentInformation = mongoose.model("studentInformation", informationStudent);
const studentDataM = mongoose.model("studentData", student);
const attendanceEmp = mongoose.model("employee_attendance", Attendance)
module.exports = { schemaData, studentDataM, attendanceEmp, studentInformation }