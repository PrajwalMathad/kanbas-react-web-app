import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport } from 'react-icons/fa6';
import { FaCog, FaSearch, FaFilter } from "react-icons/fa";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="col content-section grades-section ms-3 me-3">
      <div class="modules-action-container mb-3">
        <span className="red-color"><strong>Gradebook</strong></span>
        <button type="button" class="btn btn-secondary float-end ms-2"><FaCog className="mb-1" /></button>
        <div class="dropdown float-end">
          <button class="btn btn-secondary dropdown-toggle ms-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaFileExport className="mb-1 me-1" />
            Export
          </button>
          <ul class="dropdown-menu">
            <li>Action</li>
            <li>Another action</li>
            <li>Something else here</li>
          </ul>
        </div>
        <button type="button" class="btn btn-secondary float-end ms-2"><FaFileImport className="mb-1 me-1" />Import</button>
      </div>
      <div class="search-container">
        <div class="dropdown drop-container me-2">
          <label for="studentNameDrop" class="form-label"><strong>Student Names</strong></label>
          <button id="studentNameDrop" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaSearch className="me-1" />
            <div class="btn-text">Search Students</div>
          </button>
          <ul class="dropdown-menu">
            <li>Action</li>
            <li>Another action</li>
            <li>Something else here</li>
          </ul>
        </div>
        <div class="dropdown drop-container ms-2">
          <label for="assignNameDrop" class="form-label"><strong>Assignment Names</strong></label>
          <button id="assignNameDrop" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaSearch className="me-1" />
            <div class="btn-text">Search Assignments</div>
          </button>
          <ul class="dropdown-menu">
            <li>Action</li>
            <li>Another action</li>
            <li>Something else here</li>
          </ul>
        </div>
      </div>
      <button type="button" class="custom-btn btn btn-secondary mt-2"><FaFilter className="me-1" />Apply Filters</button>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;