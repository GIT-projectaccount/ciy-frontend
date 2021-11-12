import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';

const Login = () => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({useremail:"",userpassword:""});

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email:credentials.useremail,password:credentials.userpassword})
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            localStorage.setItem("username",json.username);
            history.push("/");
        }
        else{
            history.push("/login");
        }
    }

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center login-img">
                <div className="form-container">
                    <form className="d-flex flex-column login-form" onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center">
                            <h4 className="login-heading"> Login via an Existing Account</h4>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="useremail" className="form-label">Email Address</label>
                            <input type="email" className="form-control input-bg" id="useremail" name="useremail" size="50" required onChange={onChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userpassword" className="form-label">Password</label>
                            <input type="password" className="form-control input-bg" id="userpassword" name="userpassword" size="50" required onChange={onChange}/>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <button type="submit" className="btn btn-dark col-5 mx-2">Login</button>
                            <button type="reset" className="btn btn-dark col-5 mx-2">Clear</button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            Don't have an account? <Link to="/signup" className="mx-2 login-signup-text"> Click here to Sign Up.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
