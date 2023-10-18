import ModuleList from "./ModuleList";
import "./index.css";
import { FaEllipsisV, FaRegCheckCircle } from "react-icons/fa";

function Modules() {
  return (
    <div className="col content-section module-list">
      <div className="modules-action-container">
        <button type="button" className="btn btn-secondary ms-2">Collapse All</button>
        <button type="button" className="btn btn-secondary ms-2">View Progress</button>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle ms-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FaRegCheckCircle className="icon me-2 mb-1" />Publish All
          </button>
          <ul className="dropdown-menu">
            <li>Action</li>
            <li>Another action</li>
            <li>Something else here</li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger ms-2">+ Module</button>
        <button type="button" className="btn btn-secondary ms-2"><FaEllipsisV className="icon" /></button>
      </div>
      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;