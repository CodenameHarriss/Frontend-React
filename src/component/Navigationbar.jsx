import React from 'react'
import { Link } from 'react-router-dom'

function Navigationbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top border-body" style={{ background: '#573dff' }}>
            <div className="container">
                <a className="navbar-brand fw-bold text-white"><i className="fa-brands fa-d-and-d fa-lg"></i> My Website</a>
                <button className="navbar-toggler border border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/"><i className="fa-solid fa-dungeon"></i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/Content"><i className="fa-solid fa-ring"></i> Content</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/About"><i className="fa-solid fa-scroll"></i> About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/Contact"><i className="fa-solid fa-hat-wizard"></i> Contact</Link>
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
                        <button className="btn border border-0 text-white" style={{ background: '#e85500' }} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navigationbar