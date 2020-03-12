import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

function ResourcesList({ loginData }) {
    const [resList, setRes] = useState({
        LT: [],
        AT: [],
        NA: [],
        JE: [],
        Other: []
    })

    function emptyArray(list){
        return !list.length ? [<li className="col-12" key="empty">
            <i>No Resources at this Time...</i>
        </li>] : list
    }

    function renderLI(el){
        return (<li className="col-12" key={el.id.toString()}>
            <a className="col-8" href={el.url} target="_blank">{el.title}</a>
            {/* <span className="col-4">{el.stance}</span> */}
            {el.additional ? <p className="col-12">{el.additional}</p> : ''}
        <br></br></li>)
    }

    function renderResources() {
        let LT = [];
        let AT = [];
        let NA = [];
        let JE = [];
        let Other = [];
        // only pull "approved" status
        API.findResources("status", "pending").then(result => {
            // API.findResources("status", "approved").then(result => {
            result.data.forEach(el => {
                switch (el.category) {
                    case "Legal Text":
                        LT.push(renderLI(el));
                        break;
                    case "Academic Text":
                        AT.push(renderLI(el));
                        break;
                    case "News Article":
                        NA.push(renderLI(el));
                        break;
                    case "Journal Entry":
                        JE.push(renderLI(el));
                        break;
                    default:
                        Other.push(renderLI(el));
                        break;
                }
            });
            // validate if array is empty
            setRes({
                LT: emptyArray(LT),
                AT: emptyArray(AT),
                NA: emptyArray(NA),
                JE: emptyArray(JE),
                Other: emptyArray(Other)
            })
        })
        // style by on category and sort alphabetically
    }

    useEffect(() => {
        renderResources()
    }, [])

    return (
        <>
            <div className="rowcenter-focus">
                <header className="row">
                    <h1 className="col-9 d-flex justify-content-center">Resources Library </h1>
                    <span className="col-3 d-flex justify-content-center">{loginData.loggedIn ? <button><Link to="/newresource">Suggest New Resource</Link></button> : ''}</span>
                </header>
                <ul className="row res-category-list flex">
                    <h4 className="col-12">Legal Text:</h4>
                    {resList.LT}
                </ul><ul className="row res-category-list flex">
                    <h4 className="col-12">Academic Text:</h4>
                    {resList.AT}
                </ul><ul className="row res-category-list flex">
                    <h4 className="col-12">News Articles:</h4>
                    {resList.NA}
                </ul><ul className="row res-category-list flex">
                    <h4 className="col-12">Journal Entries:</h4>
                    {resList.JE}
                </ul><ul className="row res-category-list flex">
                    <h4 className="col-12">Other:</h4>
                    {resList.Other}
                </ul>
            </div>
        </>)
}

export default ResourcesList