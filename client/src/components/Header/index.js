import React from 'react';
import {Link} from 'react-router-dom';
import {FaSignOutAlt} from 'react-icons/fa'
import API from '../../utils/API';

import Nav from "../Nav";

function Header({loginData}){
    function logOut(){
        localStorage.clear()
        API.logout().then(() => {
            window.location.href = "/"
        })
    }
    return (<>
        <div className="top-header row flex justify-content-center">
            <Nav loginData={loginData} />
            <header className="col-8 d-flex justify-content-center"><h1>Communication Trumps Ignorance</h1></header>
            <div className="col-2">
                <button><Link id="resources-link" to="/resources">resources</Link></button>
                {loginData.loggedIn ? 
                <button id="user-logout" 
                    onClick={() => logOut()}><FaSignOutAlt /> Logout
                </button> : ''}
            </div>
            {/* <input className="col-2" placeholder="Search"/> */}
        </div>
    </>)
}

export default Header