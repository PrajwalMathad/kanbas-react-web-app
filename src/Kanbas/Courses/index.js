import { React, useState, useEffect } from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import WIP from "../WIP";
import { FaBars, FaGlasses } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from './Assignments/assignmentsReducer';

function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [course, setCourse] = useState({});
  const [empty, kanbas, id, screen] = pathname.split("/");
  // const course = courses.find((course) => course._id === courseId);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const URL = "http://localhost:4000/api/courses";

  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <div className="main-container">
      <div className="courses-header-section">
        <div style={{ "display": "flex" }}>
          <FaBars className="course-menu-icon" />
          <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
            <ol style={{ marginBottom: "0" }} className="breadcrumb">
              <li className="breadcrumb-item breadcrumb-item-color">
                {course.name}
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {screen}
              </li>
            </ol>
          </nav>
        </div>
        <div>
          <button type="button" className="btn btn-secondary student-view ms-2">
            <FaGlasses className="me-2" />Student View
          </button>
        </div>
      </div>
      <hr className="no-margin" />
      <CourseNavigation />
      <div className="overflow-y-scroll position-fixed bottom-0 end-0 course-container" style={{
        left: "320px",
        top: "90px",
      }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
          <Route path="Grades" element={<Grades />} />
          <Route path="Quizzes" element={<WIP />} />
          <Route path="Piazza" element={<WIP />} />
          <Route path="People" element={<WIP />} />
          <Route path="Panopto Video" element={<WIP />} />
          <Route path="Zoom Meetings" element={<WIP />} />
          <Route path="Announcements" element={<WIP />} />
          <Route path="Discussions" element={<WIP />} />
          <Route path="Pages" element={<WIP />} />
          <Route path="Files" element={<WIP />} />
          <Route path="Rubrics" element={<WIP />} />
          <Route path="Outcomes" element={<WIP />} />
          <Route path="Collaborations" element={<WIP />} />
          <Route path="Syllabus" element={<WIP />} />
          <Route path="Settings" element={<WIP />} />
          <Route path="Progress Reports[EAB Navigate]" element={<WIP />} />
        </Routes>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Assignment</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure want to remove the assignment?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => {
                dispatch(deleteAssignment(assignment._id))
              }}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
