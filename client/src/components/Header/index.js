import React from 'react';

import Nav from "../Nav";

function Header(){
    return (<>
        <div className="top-header row border border-success flex justify-content-center">
            <Nav />
            <header className="col-8 justify-content-center"><h1>HEADER</h1></header>
            <input className="col-2" placeholder="Search"/>
        </div>
    </>)
}

export default Header