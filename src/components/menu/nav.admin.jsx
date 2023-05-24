import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './nav.css';

const NavAdmin = ({ currentUser, loggingStatus, handeleLogout }) => {
    return (
        <ul className='nav-items' id="nav-bar">
            {currentUser ? (
                <Fragment>

                    <li className='nav-item'>
                        <Link to={`/user/list`}>Users</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={`/user/pass`}>Change Password</Link>
                    </li>
                </Fragment>

            ) : (<div></div>)}

            {
                loggingStatus ?
                    (
                        <Fragment>
                            {/* <li className='nav-item'>
                                <Link to="/login" onClick={handeleLogout} >Logout</Link>
                            </li> */}
                            <li className='nav-item'>
                                <Link to="/login" onClick={handeleLogout}>Logout</Link>
                            </li>
                        </Fragment>

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

export default NavAdmin;
