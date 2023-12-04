import * as client from "./client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const signin = async () => {
        const data = await client.signin(credentials);
        if(data) {
            navigate("/Kanbas/Account");
        } else {
            setError("Incorrect credentials. Unable to Login.");
        }
    };
    return (
        <div className="signin-container">
            <h1 className="mb-4 red-color">Welcome to Kanbas</h1>
            <div>
                <input class="form-control mb-2" value={credentials.username} placeholder="User Name"
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                <input class="form-control mb-4" value={credentials.password} placeholder="Password"
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                <div className="red-color mb-4">{error ? error : ""}</div>
                <div className="signup-btn-container">
                    <button class="btn custom-btn btn-secondary me-4" onClick={signin}> Sign In </button>
                    <Link to={`/Signup`}><button class="btn custom-btn btn-danger"> Sign Up </button></Link>
                </div>
            </div>
        </div>
    );
}
export default Signin;

