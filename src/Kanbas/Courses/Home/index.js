import Modules from "../Modules";
import "./index.css";
import {FaBan, FaRegCheckCircle, FaChartBar, FaCircle, FaCalendarAlt} from "react-icons/fa";
import {FaFileImport, FaLocationCrosshairs, FaBullhorn, FaRegBell} from "react-icons/fa6";

function Home() {
  return (
    <div className="row">
        <div className="col-10 modules-container">
          <Modules />
        </div>
        <div class="d-none d-lg-block col-2 course-status-section">
            <h4>Course Status</h4>
            <button type="button" class="btn btn-secondary custom-btn no-margin me-2">
                <FaBan class="me-1 mb-1" />Unpublish
            </button>
            <button style={{"background": "#40a060","color": "#fff", "margin": "0"}} type="button" class="btn btn-secondary custom-btn">
                <FaRegCheckCircle class="icon me-1 mb-1" />Published
            </button>
            <div class="status-options-list mt-4">
                <div class="status-option mt-1"><FaFileImport class="icon me-1 mb-1" />Import Existing Content</div>
                <div class="status-option mt-1"><FaFileImport class="icon me-1 mb-1" />Import from Commons</div>
                <div class="status-option mt-1"><FaLocationCrosshairs class="icon me-1 mb-1" />Choose Home Page</div>
                <div class="status-option mt-1"><FaChartBar class="icon me-1 mb-1" />View Course Stream</div>
                <div class="status-option mt-1"><FaBullhorn class="icon me-1 mb-1" />New Announcements</div>
                <div class="status-option mt-1"><FaChartBar class="icon me-1 mb-1" />New Analytics</div>
                <div class="status-option mt-1"><FaRegBell class="icon me-1 mb-1" />View Course Notifications</div>
            </div>
            <div class="mt-4">
                <h5>To Do</h5>
                <hr />
                <div className="course-text-align ">
                    <div className="display-flex">
                        <FaCircle className="maroon-text mt-2 me-2" />
                        <div class="mt-1">
                            <div className="maroon-text">Grade A1 - ENV + HTML</div>
                            <div className="small-course-text">100 points Sep 18 at 11:59pm</div>
                        </div>
                    </div>
                    <div>x</div>
                </div>
            </div>
            <div class="mt-4">
                <div className="course-text-align ">
                    <h5>Coming Up</h5>
                    <div>
                        <FaCalendarAlt />
                        <span className="ms-1 maroon-text">View Calendar</span>
                    </div>
                </div>
                <hr />
                <div className="display-flex mt3">
                    <FaCalendarAlt className="mt-1" />
                    <div class="ms-2">
                        <div className="maroon-text">Lecture</div>
                        <div>CS4550.12578.4567</div>
                        <div className="small-course-text">Sep 11 at 6pm</div>
                    </div>
                </div>
                <div className="display-flex mt3">
                    <FaCalendarAlt className="mt-1" />
                    <div class="ms-2">
                        <div className="maroon-text">CS5610 06 Lecture</div>
                        <div>CS4550.12578.4567</div>
                        <div className="small-course-text">Sep 11 at 6pm</div>
                    </div>
                </div>
                <div className="display-flex mt3">
                    <FaCalendarAlt className="mt-1" />
                    <div class="ms-2">
                        <div className="maroon-text">CS5610 08 Lecture</div>
                        <div>CS4550.12578.4567</div>
                        <div className="small-course-text">Sep 11 at 6pm</div>
                    </div>
                </div>
                <div className="mt-2 small-course-text maroon-text">12 more in the next week...</div>
            </div>
          </div>
    </div>
  );
}
export default Home;