import { FaHome, FaChartBar, FaUserCircle } from "react-icons/fa"
import { IoIosListBox } from "react-icons/io"
import { useParams } from "react-router-dom"
import { SidebarIcon } from "./SidebarIcon"

export const Sidebar = ({ pageTitle }) => {
    const { categoryName } = useParams();
    return (
        <aside className="main__menu-sec center__flex flex__dir-col">
            <div className="menu__title-sec">
                <h2>{pageTitle}</h2>
            </div>
            <div className="menu__option-sec center__flex flex__dir-col">
                <SidebarIcon route={""} icon={<FaHome />} />
                {categoryName ? <SidebarIcon route={`questions/${categoryName}`} icon={<IoIosListBox />} /> : ""}
                <SidebarIcon route={"stats"} icon={<FaChartBar />} />
                <SidebarIcon route={"user"} icon={<FaUserCircle />} />
            </div>
        </aside>
    )
}
