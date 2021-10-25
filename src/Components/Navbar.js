import React from 'react'
import { Link } from "react-router-dom"
import './components.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-between">
                    <div className="d-flex flex-fill justify-content-start">
                        <Link className="navbar-brand main-text" to="/"> CIY - Cook It Yourself </Link>
                    </div>
                    <div className="d-flex flex-fill justify-content-center">
                        <form className="d-flex">
                            <input type="text" className="form-control" placeholder=" Search any dish" size="30" />
                            <Link className="btn btn-light mx-2">Search</Link>
                        </form>
                    </div>
                    <div className="d-flex flex-fill justify-content-end">
                        <ul className="navbar-nav navbar-auto ">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/bguide">Beginner's Guide </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
