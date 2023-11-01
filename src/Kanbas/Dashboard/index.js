import db from "../Database";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [showForm, setShowForm] = useState(false);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    background: "rgb(96, 228, 228)"
  })

  const toggleForm = () => {
    setShowForm(!showForm);
  }
  const addCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }])
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
    <div className="main-container">
      <div className="page-title">
        Dashboard
        <Link to={`/Labs`}>
          <button type="button" className="btn btn-danger float-end ms-2">Labs</button>
        </Link>
      </div>
      <hr />
      <div className="courses-container">
        <div className="published-courses">Published Courses ({courses.length})</div>
        <hr />
        <button type="button" className="btn btn-danger custom-btn ms-2"
          onClick={() => {
            toggleForm();
          }}>
          Add New Course
        </button>
        <div className="split-dashboard-container">
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
                    <div className="course-card-actions mt-3">
                      <button type="button" className="btn btn-secondary custom-btn"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                          setShowForm(true);
                        }}>
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger custom-btn"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {showForm && <div className="course-form">
            <h3>Course Form</h3>
            <input value={course.name} className="form-control mb-3"
              onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control mb-3"
              onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control mb-3" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control mb-3" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <div className="course-card-actions mt-3">
              <button type="button" className="btn btn-secondary custom-btn"
                onClick={() => {
                  addCourse();
                }}>
                Add Course
              </button>
              <button type="button" className="btn btn-secondary custom-btn"
                onClick={() => {
                  updateCourse();
                }}>
                Update Course
              </button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
