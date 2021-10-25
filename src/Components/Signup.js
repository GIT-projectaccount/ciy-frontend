import React from 'react'
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center signup-img">
                <div className="form-container">
                    <form className="d-flex flex-column signup-form">
                        <div className="d-flex justify-content-center">
                            <h4 className="signup-heading"> Create an Account for CIY</h4>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Name</label>
                            <input type="text" className="form-control input-bg" id="username" name="username" size="50" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="useremail" className="form-label">Email Address</label>
                            <input type="email" className="form-control input-bg" id="useremail" name="useremail" size="50" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userpassword" className="form-label">Password</label>
                            <input type="password" className="form-control input-bg" id="userpassword" name="userpassword" size="50" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userconfirmpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control input-bg" id="userconfirmpassword" name="userconfirmpassword" size="50" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usersecurityquestion" className="form-label">Security Question - What is your favourite food dish?</label>
                            <input type="password" className="form-control input-bg" id="usersecurityquestion" name="usersecurityquestion" size="50" required />
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
