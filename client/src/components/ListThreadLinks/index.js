import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NewThreadForm from '../NewThreadForm';
import API from '../../utils/API';

function ListThreadLinks() {
    const [threadList, setThread] = useState({
        data: []
    })

    function renderThreadLinks(){
        let temp = [];
        let topicID = window.location.href.split("/").pop();
        console.log("thread ID::   " + topicID);
        API.findThreads(topicID).then(result => {
            result.data.forEach(el => {
                temp.push(<ul className="thread-link" key={el.id.toString()}><Link to={`${window.location.pathname}thread/${el.id}`}>{el.title}</Link></ul> )
            });
            setThread({
                data: temp
            })
        })
    }

    useEffect(() => {
        renderThreadLinks()
    }, [])

    return (
        <>
            <div>
                <header> ListThreadLinks </header>
                    <ul>{threadList.data}</ul>
                    <NewThreadForm />
            </div>
        </>)
}

export default  ListThreadLinks