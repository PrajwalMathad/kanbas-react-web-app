import db from "../Database";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6"
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="main-container">
      <div className="page-title">Dashboard</div>
      <hr />
      <div className="courses-container">
        <div className="published-courses">Published Courses ({courses.length})</div>
        <hr />
        <div className="d-flex row flex-row flex-wrap card-container">
          {courses.map((course, index) => (
            <div id={course.id} className="col-2 card">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-link">
                <div className="card-image" style={{ "background-color": course.background }}>
                  <FaEllipsisV className="icon fa-ellipsis-v" />
                </div>
                <div className="card-details">
                  <h5 className="card-custom-title text-nowrap">
                    {course.number} {course.name}
                  </h5>
                  <div className="card-text card-custom-text">
                    {course.startDate}
                    <div className="text-nowrap">
                      {course.endDate} 2022 Semester Full Term Grad
                    </div>
                  </div>
                  <FaRegFileLines className="icon" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
