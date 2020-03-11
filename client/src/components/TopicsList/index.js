import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";

function TopicsList({loginData}){
    const [topicsData, setTopics] = useState({
        displayTopicsNav: []
    })
    
    function alphabeticalSort(a, b){
        const maxLength = a.length > b.length ? b.length : a.length;
        for (let i = 0; i < maxLength;){
            if (a.charCodeAt(i) === b.charCodeAt(i)){
                i++
            } else {
                return a.charCodeAt(i) - b.charCodeAt(i)
            }
        }
    }
    function generateTopicsList(){
        let temp = [];
        API.findTopics().then(result => {
            if (result.data){
                let topics = result.data.sort((a, b) => alphabeticalSort(a.title, b.title));
                topics.forEach(li => {
                    temp.push(
                    <ul className="topic-nav border border-primary" key={li.id.toString()}>
                        <Link
                            to={`/topic/${li.id}`}
                            className={window.location.pathname === `/topic/${li.id}` ? "nav-link active" : "nav-link"}>
                        {li.title}</Link>
                    </ul>
                )})
                setTopics({displayTopicsNav: temp})
            }
        })
    };

    useEffect(() => {
        generateTopicsList()
    })

    return (<>
        <div className="col-left col-2 border border-danger">
            {loginData.loggedIn ? <button><Link to="/newthread">New Thread</Link></button> : ''}
            <header>Topics:</header>
            <ul>
                {topicsData.displayTopicsNav}
            </ul>
        </div>
    </>)
}

export default TopicsList