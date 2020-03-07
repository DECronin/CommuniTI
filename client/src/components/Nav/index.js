import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    // let links;
    // renderLinkOptions(){
     let links = [<ul>
            <Link to="/">Home / Login</Link>
        </ul>,<ul>
            <Link to="/settings">Settings</Link>
        </ul>,<ul>
            <Link to="/termsofservice">TOS</Link>
        </ul>,<ul>
            <Link to="/user">USER BIO</Link>
        </ul>,<ul>
            <Link to="/resources">resources</Link>
        </ul>,<ul>
            <button>Log{isLoggedIn(true)}</button>
        </ul>]
    // }

    function isLoggedIn(status){
        //change with context or api-call
        return status ? "IN" : "OUT"
    }

    return (<>
        <p className="row col-12 border border-danger">~/~ {isLoggedIn(false)}
        {links}</p>
        <h1 className="col-2">NAV</h1>
    </>)
}

export default Nav