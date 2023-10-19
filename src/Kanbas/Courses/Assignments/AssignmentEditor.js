import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaTimes, FaRegCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical } from 'react-icons/fa6';
import db from "../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div class="col content-section module-list">
      <div class="modules-action-container">
        <div class="green-color mt-1"><FaRegCheckCircle className="mb-1 me-1"/>Published</div>
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
            value={assignment.title}
            placeholder="Enter assignment Name"
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="assignDesc"
            rows="3"
          >Clicking on the title of any assignment displays the Edit Assignment screen as shown below. For now this screen displays the same content regardless which assignment you click. In later assignments the content will be different depending which assignment you click. The screen provides a form for faculty to edit the assignment including the</textarea>
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
            <label class="form-label mt-1 float-end">Assignment Group</label>
          </div>
          <div class="col-5 dropdown drop-container">
            <button class="btn btn-secondary dropdown-toggle p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="btn-text">ASSIGNMENTS</div>
            </button>
            <ul class="dropdown-menu">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
            </ul>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2">
            <label class="form-label mt-1 float-end">Dispaly Grade as</label>
          </div>
          <div class="col-5 dropdown drop-container">
            <button class="btn btn-secondary dropdown-toggle p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="btn-text">Percentage</div>
            </button>
            <ul class="dropdown-menu">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
            </ul>
            <div class="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="check1"
              />
              <label class="form-check-label" for="check1">
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2">
            <label class="form-label mt-1 float-end">Submission type</label>
          </div>
          <div class="col-5 m-2 p-3 submission-container">
            <div class="mb-3 dropdown drop-container">
              <button class="btn btn-secondary dropdown-toggle p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div class="btn-text">Online</div>
              </button>
              <ul class="dropdown-menu">
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
              </ul>
            </div>
            <h6>Online Entry Options</h6>
            <div class="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="check2"
                checked
              />
              <label class="form-check-label" for="check2">
                Text Entry
              </label>
            </div>
            <div class="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="check3"
                checked
              />
              <label class="form-check-label" for="check3">
                Website URL
              </label>
            </div>
            <div class="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="check4"
                checked
              />
              <label class="form-check-label" for="check4">
                Media Recordings
              </label>
            </div>
            <div class="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="check5"
              />
              <label class="form-check-label" for="check5">
                Student Annotations
              </label>
            </div>
            <div class="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="check6"
              />
              <label class="form-check-label" for="check6">
                File Uploads
              </label>
            </div>
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
                  <div class="p-2">Sep 18, 2023, 11:59pm</div>
                  <div class="cal-icon p-2"><FaCalendarAlt /></div>
                </div>
              </div>
              <div class="row max-container">
                <div class="mb-3 col-6">
                  <div><strong>Available from</strong></div>
                  <div class="calendar-container">
                    <div class="p-2">Sep 18, 2023, 11:59pm</div>
                    <div style={{ "width": "20%;" }} class="cal-icon p-2"><FaCalendarAlt /></div>
                  </div>
                </div>
                <div class="mb-3 col-6">
                  <div><strong>Until</strong></div>
                  <div class="calendar-container">
                    <div class="p-2"></div>
                    <div style={{ "width": "20%;" }} class="cal-icon p-2"><FaCalendarAlt /></div>
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
            <button onClick={handleSave} className="btn btn-danger me-2">
              Save
            </button>
          </Link>
        </div>
      </div>
      <hr />


      {/* <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger">
        Cancel
      </Link>
      {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
      {/* <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button> */}
    </div>
  );
}


export default AssignmentEditor;