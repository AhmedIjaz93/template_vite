import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './nav.css';

const NavPublic = ({ currentUser, loggingStatus, handeleLogout }) => {

    return (
        <ul className='nav-items' id="nav-bar">
            {currentUser &&

                (<li className='nav-item'>
                    <Link to={`/user/pass`}>Change Password</Link>
                </li>)}

            {
                loggingStatus ?
                    (

                        <li className='nav-item'>
                            <Link to="/login" onClick={handeleLogout}>Logout</Link>
                        </li>

                    ) :
                    (

                        <li className='nav-item'>
                            <Link to="/login">Login</Link>
                        </li>
                    )

            }

        </ul>
    );
}

export default NavPublic;
