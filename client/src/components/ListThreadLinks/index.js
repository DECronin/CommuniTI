import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NewThreadForm from '../NewThreadForm';
import API from '../../utils/API';

function ListThreadLinks({loginData}) {
    let topicID = window.location.href.split("/").pop();
    const [threadList, setThread] = useState({
        data: []
    })

    function renderThreadLinks(){
        let temp = [];
        API.findThreads(topicID).then(result => {
            if (!result.data.length){
                temp.push(<ul className="thread-link" key="new-thread-nav"><Link to="/newthread">Start a New Thread</Link></ul>)
            } else {
                let middle = result.data;
                middle.forEach(el => {
                    // sort by popularity vs date?
                    // fill in more data (ie: ^)
                    temp.push(<ul className="thread-link" key={el.id.toString()}><Link to={`${window.location.pathname}thread/${el.id}`}>{el.title}</Link></ul> )
                });
            }
            setThread({
                data: temp
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
                <header> ListThreadLinks </header>
                    <ul>{threadList.data}</ul>
                    {renderForm(loginData.loggedIn)}
            </div>
        </>)
}

export default  ListThreadLinks