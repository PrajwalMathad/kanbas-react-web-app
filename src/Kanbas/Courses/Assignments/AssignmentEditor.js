import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaTimes, FaRegCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical } from 'react-icons/fa6';
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, setAssignment } from './assignmentsReducer';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const { courseId } = useParams();

  const handleSave = () => {
    if(assignmentId === "newAssignment") {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
  }

  return (
    <div class="col content-section module-list">
      <div class="modules-action-container">
        <div class="green-color mt-1"><FaRegCheckCircle className="mb-1 me-1" />Published</div>
        <button type="button" class="btn btn-secondary float-end ms-2 p-1"><FaEllipsisVertical /></button>
      </div>
      <hr />
      <div class="assignment-edit-form">
        <div class="mb-3">
          <label for="assignName" class="form-label">Assignment Name</label>
          <input
            type="text"
            class="form-control"
            id="assignName"
            value={assignment.name}
            placeholder="Enter assignment Name"
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, name: e.target.value }))}
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="assignDesc"
            rows="3"
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, description: e.target.value }))}
          >{assignment.description}</textarea>
        </div>

        <div class="row mb-3">
          <div class="col-2">
            <label for="assignPoints" class="form-label mt-1 float-end">Points</label>
          </div>
          <div class="col-5">
            <input
              type="text"
              class="form-control"
              id="assignPoints"
              value="100"
              placeholder="Enter assignment points"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2">
            <label class="form-label mt-1 float-end">Assign</label>
          </div>
          <div class="col-5">
            <div class="p-3 assign-container">
              <h6>Assign to</h6>
              <div class="p-2 submission-container mb-3">
                <div class="chip p-2 pt-1 pb-1 ">
                  <span>Everyone</span>
                  <FaTimes className="mt-1" />
                </div>
              </div>
              <div class="mb-3">
                <div><strong>Due</strong></div>
                <div class="calendar-container">
                  <input
                    type="date"
                    class="form-control"
                    id="e"
                    value={assignment.dueDate}
                    onChange={(e) =>
                      dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}
                  />
                </div>
              </div>
              <div class="row max-container">
                <div class="mb-3 col-6">
                  <div><strong>Available from</strong></div>
                  <div class="calendar-container">
                    <input
                      type="date"
                      class="form-control"
                      id="e"
                      value={assignment.availFrom}
                      onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, availFrom: e.target.value }))}
                    />
                  </div>
                </div>
                <div class="mb-3 col-6">
                  <div><strong>Until</strong></div>
                  <div class="calendar-container">
                    <input
                      type="date"
                      class="form-control"
                      id="e"
                      value={assignment.availUntil}
                      onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, availUntil: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="assign-footer p-2">+Add</div>
          </div>
        </div>
      </div>

      <hr />

      <div class="edit-assign-footer">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="check789"
          />
          <label class="form-check-label" for="check789">
            Notify users that this content has changed
          </label>
        </div>
        <div>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
            <button type="button" class="btn custom-btn btn-secondary me-2">Cancel</button>
          </Link>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
            <button className="btn btn-danger me-2" onClick={handleSave}>
              Save
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}


export default AssignmentEditor;