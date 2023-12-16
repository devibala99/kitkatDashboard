const { schemaData, studentDataM, attendanceEmp, studentInformation } = require("./schema.js");

// hashing password 
const bcrypt = require("bcrypt");

// get data
const get_data = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const getData = await schemaData.find();
    res.json(getData);
};

// get student data
const get_studentData = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const getData = await studentDataM.find();
    res.json(getData);
}

// get attendance
const get_attendanceData = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const getData = await attendanceEmp.find();
    res.json(getData);
}

// students post
const post_studentData = async (req, res) => {
    const data = await studentDataM({
        name: req.body.name,
        contact: req.body.contact,
        worktype: req.body.worktype,
        doj: req.body.doj
    });

    res.json(save_data(data));
}

// get student info
const get_studentInfo = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const getData = await studentInformation.find();
    res.json(getData);
}
// post student info
const post_studentInfo = async (req, res) => {
    const data = await studentInformation({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        email: req.body.email,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber
    });
    res.json(save_data(data));
}
// attendance post
const post_attendance = async (req, res) => {
    const data = await attendanceEmp({
        name: req.body.name,
        status_work: req.body.status_work,
        permission: req.body.permission,
        leave: req.body.leave,
        in_date: req.body.in_date,
        in_time: req.body.in_time,
        out_date: req.body.out_date,
        out_time: req.body.out_time,
    });
    //  res.json({ message: 'Data recived', data: data });
    res.json(save_data(data));
}
// post -register
const post_data = async (req, res) => {
    let pass = req.body.password?.toString();
    const hash = await bcrypt.hash(pass, 5);

    const data = await schemaData({
        email: req.body.email,
        password: hash,
    });

    const userEmailCheck = await schemaData.findOne({
        email: req.body.email
    });

    if (userEmailCheck) {
        return res.json({ msg: 'Email already registered' });
    }

    res.json(save_data(data));
}

// login
const Login = async (req, res) => {
    const usermail = await schemaData.findOne({
        email: req.body.email
    });
    if (!usermail) return res.json("email not valid ");
    const userpassword = await bcrypt.compare(req.body.password, usermail.password);
    if (!userpassword) return res.json("password not valid ");
    res.json({ msg: "login successfully " });
}

//  save data
const save_data = async (data) => {
    const save = await data.save();
    console.log("saved");
    return save;
}
module.exports = { get_data, post_data, Login, get_studentData, get_attendanceData, post_studentData, post_attendance, post_studentInfo, get_studentInfo };

