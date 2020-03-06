import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    // let links;
    // renderLinkOptions(){
     let links = [<>
            <Link to="/">Home / Login</Link>
        </>,<>
            <Link to="/newtopic">New Topic</Link>
        </>,<>
            <Link to="/topic">Threads List</Link>
        </>,<>
            <Link to="/thread">Active Thread</Link>
        </>,<>
            <Link to="/settings">Settings</Link>
        </>,<>
            <Link to="/termsofservice">TOS</Link>
        </>,<>
            <Link to="/user">USER BIO</Link>
        </>,<>
            <Link to="/newresource">new resource</Link>
        </>,<>
            <Link to="/newthread">new thread</Link>
        </>,<>
            <Link to="/newuser">new user</Link>
        </>,<>
            <Link to="/resources">resources</Link>
        </>,<>
            <button>Logout</button>
        </>]
    // }

    return (<>
        <h1 className="col-2">NAV</h1>
        {links}
    </>)
}

export default Nav