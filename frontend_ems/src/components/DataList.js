import React from 'react'
const DataList = () => {

    const data = [
        {
            title: "Dashboard",
            icon: "fa-solid fa-palette",
            path: "/home/dashboard"
        },
        {
            title: "Student Info",
            icon: "fa-solid fa-user",
            path: "/home/studentInfo"
        },
        {
            title: "Attendance",
            icon: "fa-solid fa-calendar-days",
            path: "/home/attendance"
        },
        {
            title: "Task Schedule",
            icon: "fa-solid fa-calendar-week",
            path: "/home/task"
        },
        {
            title: "Interview Schedule",
            icon: "fa-regular fa-calendar-check",
            path: "/home/interview"
        },
        {
            title: "Marketing Field",
            icon: "fa-solid fa-user-tie",
            path: "/home/marketing"
        },
        {
            title: "Client Info",
            icon: "fa-solid fa-circle-info",
            path: "/home/client"
        },
        {
            title: "Setting",
            icon: "fa-solid fa-gear",
            path: "/home/setting"
        }
    ];

    return (
        <div>
            {
                data.map((list) =>

                    <li key={list.index}>
                        <i className={list.icon}></i>&emsp;
                        {list.title}</li>
                )
            }
        </div>
    )
}

export default DataList
