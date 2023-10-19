import { Link, useLocation } from "react-router-dom";
import { FaCircleUser, FaGooglePlay } from "react-icons/fa6";
import { FiHelpCircle } from "react-icons/fi"
import { FaBook, FaInbox, FaCalendarAlt, FaTachometerAlt, FaRegClock, FaCopyright } from "react-icons/fa";
import NULogo from "../../assets/NU_logo.png"
import "./index.css";
function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        {
            label: "Account",
            icon: <FaCircleUser className="icon account-icon" />
        },
        {
            label: "Dashboard",
            icon: <FaTachometerAlt className="icon" />
        },
        {
            label: "Courses",
            icon: <FaBook className="icon" />
        },
        {
            label: "Calendar",
            icon: <FaCalendarAlt className="icon" />
        },
        {
            label: "Inbox",
            icon: <FaInbox className="icon" />
        },
        {
            label: "History",
            icon: <FaRegClock className="icon" />
        },
        {
            label: "Studio",
            icon: <FaGooglePlay className="icon" />
        },
        {
            label: "Commons",
            icon: <FaCopyright className="icon" />
        },
        {
            label: "Help",
            icon: <FiHelpCircle className="icon" />
        },
    ];

    return (
        <div className="col-1 kanbas-nav-bar">
            <div className="nu-logo">
                <img alt="NU logo" src={NULogo} />
            </div>
            <div className="list-group">
                {links.map((link, index) => (
                    <Link key={index} to={`/Kanbas/${link.label}`}
                        className={`list-group-item ${pathname.includes(link.label) && "active"}`}>
                        {link.icon}
                        <div className="nav-label">{link.label}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default KanbasNavigation;