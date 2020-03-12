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
                    <ul className="topic-nav row col-12" key={li.id.toString()}>
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
    }, [])

    return (<>
        <div className="col-left col-2">
            <div className="row col-12 flex justify-content-center">
            {loginData.loggedIn ? <button><Link to="/newthread">New Thread</Link></button> : ''}
            <h4 className="row col-12 flex justify-content-center">Topics:</h4>
            <ul>
                {topicsData.displayTopicsNav}
            </ul></div>
        </div>
    </>)
}

export default TopicsList