import React from 'react';
import {Link} from 'react-router-dom';
import API from '../../utils/API';

function Nav({loginData}){

    // let links;
    // renderLinkOptions(){
     let links = [<ul key="logout-button">
            <button id="user-logout" 
                onClick={() => logOut()}>{loginData.loggedIn ? "Logout" : "Login"}
            </button>
        </ul>,<ul key="settings-nav">
            <Link to="/settings">Settings</Link>
        </ul>,<ul key="tos-nav">
            <Link to="/termsofservice">TOS</Link>
        </ul>,<ul key="user-bio-nav">
            <Link to="/user">USER BIO</Link>
        </ul>,<ul key="resource-nav">
            <Link to="/resources">resources</Link>
        </ul>]
    // }
    console.log(window.location.href)

    function isLoggedIn(status){
        // filler ~/~ change for more fluid use of {loginData}
        return status ? "IN" : "OUT"
    }

    function logOut(){
        localStorage.clear()
        API.logout().then(() => {
            window.location.href = "/"
        })
    }

    return (<>
        <ul className="row col-12 border border-danger">~/~ {isLoggedIn(loginData.loggedIn)}
        {links}</ul>
        <h1 className="col-2">NAV</h1>
    </>)
}

export default Nav