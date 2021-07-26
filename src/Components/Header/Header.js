import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                <div className="container">
                <Link to ="/" className="navbar-brand" ><h3>Demo Streaming</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active" aria-current="page"><b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movies" className="nav-link active" aria-current="page"><b>Movies</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/series" className="nav-link active" aria-current="page"><b>Series</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link active" aria-current="page"><b>Login</b></Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Header;