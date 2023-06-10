import React from "react";

const Navbar = () => {
	return (
            <nav className="navbar bg-body-tertiary bg-dark d-flex text-light">
            <div className="container-fluid">
            <div className="row">
            <div className="col">
            <span className="navbar-brand mb-0 h1 text-light d-flex">Start Bootstrap</span>
            </div>
            </div>    
            <div className="col">
            <ul className="nav d-flex justify-content-end text-light">
                <li class="nav-item">
                    <a className="nav-link active justify-content-end text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link justify-content-end text-light" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link justify-content-end text-light" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled justify-content-end text-light">Contact</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
	);
};

export { Navbar };