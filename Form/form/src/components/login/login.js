import React, { useState, useRef } from "react"
import "./login.css"
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
    const linkRef = useRef(null);
    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleLogin = () => {
        // console.log("clicked");
        // <Link to="../homepage/homepage"></Link>
        history.push("/homepage");
    };

    return (
        <div className="login">
            {console.log("UserLogin", user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} ></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <div className="button" onClick={handleLogin}>
                Login
            </div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login