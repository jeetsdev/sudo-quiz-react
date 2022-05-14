import React, { useEffect, useState } from 'react'
import { FaHome, FaChartBar, FaUserCircle } from "react-icons/fa"
import { IoIosListBox, IoMdHelpCircle } from "react-icons/io"
import { useLocation } from 'react-router-dom'
import { SidebarIcon } from "./SidebarIcon"

export const Sidebar = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState("");

    // Setting title here
    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setCurrentPage("Home")
                break;
            case "/quiz":
                setCurrentPage("Quiz")
                break;
            case "/stats":
                setCurrentPage("Stats")
                break;
            case "/help":
                setCurrentPage("Help")
                break;
            case "/user":
                setCurrentPage("User")
                break;
            case "/login":
                setCurrentPage("Login")
                break;
            case "/signup":
                setCurrentPage("SignUp")
                break;
            default:
                break;
        }
    }, [location.pathname])

    return (
        <aside className="main__menu-sec center__flex flex__dir-col">
            <div className="menu__title-sec">
                <h2>{currentPage}</h2>
            </div>
            <div className="menu__option-sec center__flex flex__dir-col">
                <SidebarIcon route={""} icon={<FaHome />} />
                <SidebarIcon route={"quiz"} icon={<IoIosListBox />} />
                <SidebarIcon route={"stats"} icon={<FaChartBar />} />
                <SidebarIcon route={"help"} icon={<IoMdHelpCircle />} />
                <SidebarIcon route={"user"} icon={<FaUserCircle />} />
            </div>
        </aside>
    )
}
