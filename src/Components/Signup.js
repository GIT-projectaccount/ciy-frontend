import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';

const Signup = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let history = useHistory();

    const [credentials, setCredentials] = useState({ username: "", useremail: "", userpassword: "", usersecurityquestion: "" });

    const host = process.env.REACT_APP_BACKEND_HOST;

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, useremail, userpassword, usersecurityquestion } = credentials;
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: username, email: useremail, password: userpassword, securityquestion: usersecurityquestion })
        });
        const json = await response.json();
        if (json.success) {
            history.push("/login");
        }
        else {
            history.push("/");
        }
    }

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center signup-img">
                <div className="form-container">
                    <form className="d-flex flex-column signup-form" onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center">
                            <h4 className="signup-heading"> Create an Account for CIY</h4>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Name</label>
                            <input type="text" className="form-control input-bg" id="username" name="username" size="50" required onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="useremail" className="form-label">Email Address</label>
                            <input type="email" className="form-control input-bg" id="useremail" name="useremail" size="50" required onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userpassword" className="form-label">Password</label>
                            <input type="password" className="form-control input-bg" id="userpassword" name="userpassword" size="50" required onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usersecurityquestion" className="form-label">Security Question - What is your favourite food dish?</label>
                            <input type="password" className="form-control input-bg" id="usersecurityquestion" name="usersecurityquestion" size="50" required onChange={onChange} />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <button type="submit" className="btn btn-dark col-5 mx-2">Sign Up</button>
                            <button type="reset" className="btn btn-dark col-5 mx-2">Clear</button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            Already have an account? <Link to="/login" className="mx-2 signup-login-text"> Click here to Login.</Link>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Signup
