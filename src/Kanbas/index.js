import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import WIP from "./WIP";

function Kanbas() {
    return (
        <div className="d-flex main-container">
            <KanbasNavigation />
            <div>
                <Routes>
                    <Route path="Account" element={<WIP />} />
                    <Route path="Dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="Courses" element={<WIP />} />
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