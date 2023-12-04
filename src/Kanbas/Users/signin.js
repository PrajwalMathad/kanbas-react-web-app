import * as client from "./client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account");
    };
    return (
        <div className="signin-container">
            <h1 className="mb-4 red-color">Welcome to Kanbas</h1>
            <div>
                <input class="form-control mb-2" value={credentials.username} placeholder="User Name"
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                <input class="form-control mb-4" value={credentials.password} placeholder="Password"
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                <div className="signup-btn-container">
                    <button class="btn custom-btn btn-secondary me-4" onClick={signin}> Sign In </button>
                    <Link to={`/Signup`}><button class="btn custom-btn btn-danger"> Sign Up </button></Link>
                </div>
            </div>
        </div>
    );
}
export default Signin;

