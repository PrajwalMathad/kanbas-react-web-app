import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaPlus, FaSortDown, FaCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical } from 'react-icons/fa6'; import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./moduleReducer";


function ModuleList({ showModuleForm, setShowModuleForm }) {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="list-group mt-3">
      {showModuleForm && <div className="module-form mt-2 mb-3">
        <h3>Module Form</h3>
        <input value={module.name} className="form-control mb-3"
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description} className="form-control mb-3"
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        <div className="display-flex mt-3">
          <button type="button" className="btn btn-secondary custom-btn me-3"
            onClick={() => {
              dispatch(addModule({ ...module, course: courseId }));
              setShowModuleForm(false);
            }
            }>
            Add Module
          </button>
          <button type="button" className="btn btn-secondary custom-btn"
            onClick={() => {
              dispatch(updateModule(module));
              setShowModuleForm(false);
            }}>
            Update Module
          </button>
        </div>
      </div>}
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index} className="list-group-item list-group-item-secondary mb-3 p-0">
              <div className="p-3 pt-2">
                <FaGripVertical className="me-2" />
                <FaSortDown className="me-1 mb-2" />
                {module.name}
                <FaEllipsisVertical className="me-2 mt-2 float-end" />
                <FaPlus className="me-2 mt-2 float-end" />
                <FaCheckCircle className="green-color me-2 mt-2 float-end" />
                <button type="button" className="btn btn-secondary custom-btn me-2 ms-1 float-end"
                  onClick={() => {
                    dispatch(setModule(module));
                    setShowModuleForm(true);
                  }}>
                  Edit
                </button>
                <button type="button" className="btn btn-danger custom-btn me-2 ms-1 float-end"
                  onClick={() => {
                    dispatch(deleteModule(module._id));
                  }}>
                  Delete
                </button>
              </div>
              <div className="list-group-item">
                {module.description}
              </div>
              {
                module.lessons && (
                  <div className="list-group">
                    {
                      module.lessons.map((lesson, index) => (
                        <div key={index + '' + index + '2'} className="list-group-item ">
                          <div className="display-flex">
                            <FaGripVertical style={{ fontSize: "large" }} className="me-2 mt-1" />
                            <div>
                              {lesson.name}
                              <FaEllipsisVertical className="mt-1 float-end" />
                              <FaCheckCircle className="green-color me-2 mt-1 float-end" />
                              {/* <hr className="no-margin"/> */}
                              <div className="ms-5">{lesson.description}</div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
          ))
      }
    </div>
  );
}
export default ModuleList;