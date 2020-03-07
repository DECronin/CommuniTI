import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";

const htmlTest = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"%PUBLIC_URL%/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width";

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
        let temp = [];
        API.findTopics().then(result => {
            let middle = result.data.toString().split(",");
            let obj = (middle[0] === htmlTest) ? {err: 'HTML?'} : result
            if (obj.data){
                let topics = obj.data.sort((a, b) => alphabeticalSort(a.title, b.title));
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
        topicsData.displayTopicsNav.length > 1 ? console.log(`persist`) : generateTopicsList()
    },[window.location.href])

    return (<>
        <div className="col-left col-2 border border-danger">
            <button><Link to="/newtopic">New Topic</Link></button>
            <button><Link to="/newresource">New Resource</Link></button>
            <header>Topics:</header>
            <ul>
                {topicsData.displayTopicsNav}
            </ul>
        </div>
    </>)
}

export default TopicsList