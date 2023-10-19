import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Quizzes", "Grades", "People",
     "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Panopto Video", "Outcomes", "Collaborations",
    "Syllabus", "Zoom Meetings", "Progress Reports[EAB Navigate]", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="col-2 list-group profle-nav-bar">
      <div className="text-nowrap course-code">
        202310_2 Fall 2022 Semester Full Term Grad
      </div>
      {links.map((link, index) => (
        <Link key={index} to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item list-group-item-action ${pathname.includes(link) && "active"}`} >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
