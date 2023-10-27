import React from 'react'
import { Link } from 'react-router-dom'

function Navigationbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-body" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand me-5 fw-bold"><i className="fa-brands fa-d-and-d fa-lg"></i> My Profile</a>
                <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Home"><i className="fa-solid fa-dungeon"></i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Content"><i className="fa-solid fa-ring"></i> Content</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/About"><i className="fa-solid fa-scroll"></i> About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Contact"><i className="fa-solid fa-hat-wizard"></i> Contact</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navigationbar