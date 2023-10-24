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
        <div className="d-none d-lg-block col-2 course-status-section">
            <h4>Course Status</h4>
            <button type="button" className="btn btn-secondary custom-btn no-margin me-2">
                <FaBan className="me-1 mb-1" />Unpublish
            </button>
            <button style={{"background": "#40a060","color": "#fff", "margin": "0"}} type="button" className="btn btn-secondary custom-btn">
                <FaRegCheckCircle className="icon me-1 mb-1" />Published
            </button>
            <div className="status-options-list mt-4">
                <div className="status-option mt-1"><FaFileImport className="icon me-1 mb-1" />Import Existing Content</div>
                <div className="status-option mt-1"><FaFileImport className="icon me-1 mb-1" />Import from Commons</div>
                <div className="status-option mt-1"><FaLocationCrosshairs className="icon me-1 mb-1" />Choose Home Page</div>
                <div className="status-option mt-1"><FaChartBar className="icon me-1 mb-1" />View Course Stream</div>
                <div className="status-option mt-1"><FaBullhorn className="icon me-1 mb-1" />New Announcements</div>
                <div className="status-option mt-1"><FaChartBar className="icon me-1 mb-1" />New Analytics</div>
                <div className="status-option mt-1"><FaRegBell className="icon me-1 mb-1" />View Course Notifications</div>
            </div>
            <div className="mt-4">
                <h5>To Do</h5>
                <hr />
                <div className="course-text-align ">
                    <div className="display-flex">
                        <FaCircle className="maroon-text mt-2 me-2" />
                        <div className="mt-1">
                            <div className="maroon-text">Grade A1 - ENV + HTML</div>
                            <div className="small-course-text">100 points Sep 18 at 11:59pm</div>
                        </div>
                    </div>
                    <div>x</div>
                </div>
            </div>
            <div className="mt-4">
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
                    <div className="ms-2">
                        <div className="maroon-text">Lecture</div>
                        <div>CS4550.12578.4567</div>
                        <div className="small-course-text">Sep 11 at 6pm</div>
                    </div>
                </div>
                <div className="display-flex mt3">
                    <FaCalendarAlt className="mt-1" />
                    <div className="ms-2">
                        <div className="maroon-text">CS5610 06 Lecture</div>
                        <div>CS4550.12578.4567</div>
                        <div className="small-course-text">Sep 11 at 6pm</div>
                    </div>
                </div>
                <div className="display-flex mt3">
                    <FaCalendarAlt className="mt-1" />
                    <div className="ms-2">
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