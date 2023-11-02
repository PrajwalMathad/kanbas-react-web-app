import { Navigate, Route, Routes } from "react-router";
import { React, useState } from "react";
import db from "./Database";
import KanbasNavigation from "./KanbasNavigation";
import WIP from "./WIP";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [showForm, setShowForm] = useState(false);
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        background: "rgb(96, 228, 228)"
    })

    const addCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime() + "" }])
        setShowForm(false);
    }

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    }

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
        setShowForm(false);
    };
    return (
        <Provider store={store}>
            <div className="row outer-container">
                <KanbasNavigation />
                <div className="col second-container">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Courses" element={<Navigate to="RS101/Home" />} />
                        <Route path="Account" element={<WIP />} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addCourse={addCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                                showForm={showForm}
                                setShowForm={setShowForm}
                            />} />
                        <Route path="Courses/:courseId/*" element={
                            <Courses courses={courses} />} />
                        <Route path="Calendar" element={<WIP />} />
                        <Route path="Inbox" element={<WIP />} />
                        <Route path="History" element={<WIP />} />
                        <Route path="Studio" element={<WIP />} />
                        <Route path="Commons" element={<WIP />} />
                        <Route path="Help" element={<WIP />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;