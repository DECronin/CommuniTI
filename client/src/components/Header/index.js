import React from 'react';
import {Link} from 'react-router-dom';
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
        <div className="top-header row border border-success flex justify-content-center">
            <Nav loginData={loginData} />
            <header className="col-8 justify-content-center"><h1>HEADER</h1></header>
            <div className="col-2">
                <Link to="/resources">resources</Link>{loginData.loggedIn ? 
                <button id="user-logout" 
                    onClick={() => logOut()}>Logout
                </button> : ''}
            </div>
            {/* <input className="col-2" placeholder="Search"/> */}
        </div>
    </>)
}

export default Header