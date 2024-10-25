import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
    return (

        <>

            <div>
                <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a id="heading" className="navbar-brand" href="/">SheWell</a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a id="head" className="nav-link active" aria-current="page" href="/login">Issues</a>
                                </li>
                                <li className="nav-item">
                                    <a id="head" className="nav-link active" aria-current="page" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a id="head" className="nav-link active" aria-current="page" href="/sign">Sign-up</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        </>
    )
}

export default Navbar