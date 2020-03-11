import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NewThreadForm from '../NewThreadForm';
import API from '../../utils/API';

function ListThreadLinks({loginData}) {
    let topicID = window.location.href.split("/").pop();
    const [threadList, setThread] = useState({
        data: [], 
        title: ''
    })

    function renderThreadLinks(){
        let temp = [];
        API.findThreads('allThreads', topicID).then(result => {
            if (!result.data.data){
                temp.push(<ul className="thread-link row col-12" key="new-thread-nav"><Link to="/newthread">Start a New Thread</Link></ul>)
            } else {
                let middle = result.data.data;
                middle.forEach(el => {
                    // sort by popularity vs date?
                    // fill in more data (ie: ^)
                    temp.push(<ul className="thread-link row col-12" key={el.id.toString()}><Link to={`${window.location.pathname}thread/${el.id}`}>{el.title}</Link></ul> )
                });
            }
            setThread({
                data: temp,
                title: result.data.topicTitle
            })
        })
    }

    useEffect(() => {
        renderThreadLinks()
    }, [topicID])
    
    function renderForm(status){
        return(
            status ? <NewThreadForm loginData={loginData} /> : ''
        )
    }

    return (
        <>
            <div>
                <h2 className="row col-12 flex justify-content-center">{threadList.title}</h2>
                <ul className="row col-12">{threadList.data}</ul>
                {renderForm(loginData.loggedIn)}
            </div>
        </>)
}

export default  ListThreadLinks