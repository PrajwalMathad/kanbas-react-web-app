import Assignment3 from "./assignment3";
import Assignment4 from "./assignment4";
import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="labs-container">
          <Routes>
            <Route path="/"
              element={<Navigate
                to="a3" />} />
            <Route path="a3"
              element={<Assignment3 />} />
            <Route path="a4"
              element={<Assignment4 />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Labs;