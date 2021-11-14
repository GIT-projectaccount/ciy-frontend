import React, { useState, useContext, } from 'react'
import { Link, useLocation } from "react-router-dom"
import './components.css';
import recipeContext from '../context/recipes/recipeContext';
import { useHistory } from 'react-router';

const Navbar = () => {

    let location = useLocation();

    let history = useHistory();

    const context = useContext(recipeContext);
    const { saveSearchedDish } = context;

    const [searchedDish, setSearchedDish] = useState({ Title: "" });

    const onChange = (e) => {
        setSearchedDish({ Title: e.target.value });
    }

    const handleSearchDish = async (e) => {
        e.preventDefault();
        saveSearchedDish(searchedDish.Title);
        setSearchedDish({ Title: '' })
        history.push("/Searcheddish");
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        history.push("/");
    }

    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-between">
                    <button className="navbar-toggler ms-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex flex-fill justify-content-start">
                        <Link className="navbar-brand main-text" to="/"> CIY - Cook It Yourself </Link>
                    </div>
                    <div className="d-flex flex-fill justify-content-center">
                        <form className="d-flex">
                            <input type="text" value={searchedDish.Title} className="form-control" placeholder="Search any Dish" name="searchdishtext" id="searchdishtext" size="30" onChange={onChange} minLength={4} />
                            <button className="btn btn-light mx-2" onClick={handleSearchDish}>Search</button>
                        </form>
                    </div>
                    {!localStorage.getItem("token") ? <form className="d-flex justify-items-center align-items-center">
                        <Link className="btn btn-light mx-2" role="button" to="/signup">Signup</Link>
                        <Link className="btn btn-light" role="button" to="/login">Login</Link>
                    </form> : <button className="btn btn-light" onClick={handleLogout}>{localStorage.getItem("username")} - Logout </button>}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-auto">
                            <li className="nav-item">
                                <Link className={`nav-link text-white ${location.pathname === "/categories" ? "active" : ""}`} to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-white ${location.pathname === "/bguide" ? "active" : ""}`} to="/bguide">Beginner's Guide </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
