import './App.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/assignment3/helloWorld";
import Kanbas from "./Kanbas";
import Signin from "./Kanbas/Users/signin";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Signup from './Kanbas/Users/signup';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Signin" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
