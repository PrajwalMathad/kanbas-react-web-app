import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import WIP from "./WIP";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="row outer-container">
            <KanbasNavigation />
            <div className="col second-container">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<WIP />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    <Route path="Calendar" element={<WIP />} />
                    <Route path="Inbox" element={<WIP />} />
                    <Route path="History" element={<WIP />} />
                    <Route path="Studio" element={<WIP />} />
                    <Route path="Commons" element={<WIP />} />
                    <Route path="Help" element={<WIP />} />
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas;