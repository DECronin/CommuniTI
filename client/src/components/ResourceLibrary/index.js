import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import API from '../../utils/API';

function ResourcesList({loginData}) {
    const [resList, setRes] = useState({
        data: []
    })

    function renderResources(){
        let temp = [];
        // only pull "approved" status
        API.findResources("status", "pending").then(result => {
            // API.findResources("status", "approved").then(result => {
            result.data.forEach(el => {
                temp.push(<li>{JSON.stringify(el)}</li> )
            });
            setRes({
                data: temp
            })
        })

        // style by on category and sort alphabetically
    }

    useEffect(() => {
        renderResources()
    }, [])

    return (
        <>
            <div>
                <header> ResourcesList {loginData.loggedIn ? <Link to="/newresource">Suggest New Resource</Link> : ''}</header>
                <ul>{resList.data}</ul>
            </div>
        </>)
}

export default ResourcesList