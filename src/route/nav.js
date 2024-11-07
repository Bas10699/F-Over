import React from "react";
import { Link } from "react-router-dom";
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
                        <Link className="nav-link" to="/">หน้าแรก</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/gallary">gallary</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/dataDisplay">คิวงาน</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/JobQueue">ลงคิวงาน</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default navRoute;