import React from "react";
import './nav.css'

const navRoute = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navcolor">
            <a className="navbar-brand" href="/">F-Over</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">gallary</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default navRoute;