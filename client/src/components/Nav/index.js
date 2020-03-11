import React from 'react';
import { Link } from 'react-router-dom';
// import API from '../../utils/API';
import {FaHome, FaUserCircle} from 'react-icons/fa'

function Nav({ loginData }) {

    // Future Dev Links ::

    // renderLinkOptions(){
    // let links;
    // let links = [
    // <ul key="settings-nav">
    //    <Link to="/settings">Settings</Link>
    // </ul>,<ul key="tos-nav">
    //    <Link to="/termsofservice">TOS</Link>
    // </ul>,<ul key="user-bio-nav">
    //     <Link to="/">Home | USER BIO</Link>
    // </ul>,<ul key="resource-nav">
    //     <Link to="/resources">resources</Link>
    // </ul>];
    // if(loginData.loggedIn){
    //     links.push(<ul key="logout-button">
    //         <button id="user-logout" 
    //             onClick={() => logOut()}>Logout
    //         </button>
    //     </ul>)
    // }
    // return links in bootstrap style
    // }

    // function isLoggedIn(status) {
    //     // filler ~/~ change for more fluid use of {loginData}
    //     if (status) {
    //         return (<Link to="/"><FaUserCircle /></Link>)
    //     } else {
    //         return (<Link to="/">Home | Login</Link>)
    //     }
    // }

    // Moved To Header for Now
    // function logOut(){
    //     localStorage.clear()
    //     API.logout().then(() => {
    //         window.location.href = "/"
    //     })
    // }

    return (<>
        <h1 className="col-2 d-flex justify-content-center"><Link to="/">{loginData.loggedIn ? <FaUserCircle size="65px" /> : <FaHome size="65px" />}</Link></h1>
    </>)
}

export default Nav