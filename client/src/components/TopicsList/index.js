import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";

function TopicsList(){
    const [topicsData, setTopics] = useState({
        displayTopicsNav: []
    })
    
    function alphabeticalSort(a, b){
        const maxLength = a.length > b.length ? b.length : a.length;
        for (let i = 0; i < maxLength;){
            let x = a.charCodeAt(i);
            let y = b.charCodeAt(i);
            if (x === y){
                i++
            } else {
                return x - y
            }
        }
    }
    function generateTopicsList(){
        let temp = []
        API.findTopics().then(data => {
            let topics = data.data.sort((a, b) => alphabeticalSort(a.title, b.title));
            topics.forEach(li => {
                temp.push(
                <li className="topic-nav" key={li.id.toString()}>
                    <Link
                        to={`/topic/{${li.id}}`}
                        className={window.location.pathname === `/topic/{${li.id}}` ? "nav-link active" : "nav-link"}>
                    {li.title}</Link>
                </li>
            )})
            setTopics({displayTopicsNav: temp})
        })
    };

    useEffect(() => {
        generateTopicsList()
    }, [topicsData.displayTopicsNav])

    return (<>
        <div className="col-left col-2 border border-danger">
            <header>Topics:</header>
            <ul>
                {topicsData.displayTopicsNav}
            </ul>
            <button>Suggest New Topic</button>
        </div>
    </>)
}

export default TopicsList