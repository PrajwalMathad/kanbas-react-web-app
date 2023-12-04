import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "./index.css";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/Kanbas/Account");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div className="signin-container">
            <h1 className="mb-4 red-color">Register for Kanbas</h1>
            {error && <div>{error}</div>}
            <div>
                <input class="form-control mb-2"
                    value={credentials.username}
                    placeholder="User Name"
                    onChange={(e) => setCredentials({
                        ...credentials,
                        username: e.target.value
                    })} />
                <input class="form-control mb-4"
                    value={credentials.password}
                    placeholder="Password"
                    onChange={(e) => setCredentials({
                        ...credentials,
                        password: e.target.value
                    })} />
                <div className="signup-btn-container">
                    <button class="btn custom-btn btn-danger" onClick={signup}>
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Signup;