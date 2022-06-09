import { NavLink } from "react-router-dom"


export const SidebarIcon = ({ route, name, icon }) => {

    const activeStyle = ({isActive}) => {
        return {
            backgroundColor: isActive ? "#29a366" : "#f2f2f2",
        }
    }

    return (
        <NavLink to={`/${route}`} className="menu__option-btn center__flex margin__tb-4px" style={activeStyle}>
            {icon}
        </NavLink>)
}