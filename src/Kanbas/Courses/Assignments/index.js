import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaEllipsisVertical } from 'react-icons/fa6';
import { FaGripVertical, FaPlus, FaRegCheckCircle, FaFileSignature, FaSortDown } from "react-icons/fa";
import db from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="col content-section module-list">
      <div className="search-container mb-3">
        <input
          type="text"
          className="form-control w-25"
          id="searchAssignment"
          placeholder="Search for Assignment"
        />
        <div className="modules-action-container">
          <button type="button" className="btn btn-secondary float-end ms-2">+ Group</button>
          <button type="button" className="btn btn-danger float-end ms-2">+ Assignment</button>
          <button type="button" className="btn btn-secondary float-end ms-2 p-1">
            <FaEllipsisVertical /></button>
        </div>
      </div>
      <hr />
      <div className="list-group">
        <div class="list-group-item list-group-item-secondary">
          <FaGripVertical className="me-2" />
          <FaSortDown className="me-1 mb-2" />
          Assignments
          <FaEllipsisVertical className="me-2 mt-1 float-end" />
          <FaPlus className="me-2 mt-1 float-end" />
          <span class="float-end rounded-pill assignment-stat me-2">40% of Total</span>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item assignment-row">
            <div className="center-align">
              <FaGripVertical className="me-3" />
              <FaFileSignature className="green-color me-3" />
              <div>
                <strong>{assignment.title}</strong><br />
                {assignment.desc}<br />
                <strong>Due</strong> {assignment.due}
              </div>
            </div>
            <div>
              <FaEllipsisVertical className="me-2 mt-1 float-end" />
              <FaRegCheckCircle className="green-color me-2 mt-1 float-end" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;