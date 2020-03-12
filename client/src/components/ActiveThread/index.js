import React, { useState, useEffect } from 'react';
import CommentForm from '../CommentForm';
import API from '../../utils/API';
import CommentResource from '../CommentResource';

function ActiveThread ({loginData}) {
    
    const [displayComments, setDisplay] = useState({
        list: [],
        question: [],
        indexingComments: 0
    })
    const thread_id = window.location.href.split("/").pop();
    // API Call to fina all comments for this thread-id
    useEffect(() => {
        apiCall()
    }, [thread_id, displayComments.indexingComments])

    function apiCall(){
        API.findThreads('singleThread', thread_id).then(thread => {
            renderQuestion(thread.data[0])
            API.findComments(thread_id).then(result => {
                console.log(thread_id)
                if (!result.data.length){
                    console.log("no data?")
                } else {
                    setDisplay({...displayComments, list: renderThreadArray(result.data)})
                }
            })
        })
    }
    function renderQuestion(thread){
        setDisplay({...displayComments, question: <>
            <ul className="comment-wrapper" key={thread.id.toString() || '1'}>
                <div className="row comment-header">
                    <div className="username col-10">{thread.title}</div>
                    <div className="stance col-2">{thread.stance}</div>
                </div>
                <div className="comment-body row">
                    <p>{thread.summary}</p>
                </div>
                <div className="comment-footer row">
                    <div className="author col-7">{thread.username}</div>
                    <div className="updated-date col-4">{thread.updatedAt}</div>
                    {/* / if user === logedin user then "edit or delete" button / */}
                    {/* <button className="report-button">Report</button> */}
                </div><br></br>
            </ul>   

        </>})
    }
    
    function renderThreadArray (comments) {
        let temp = displayComments.question;
        if (!comments.length){
            window.location.href = "/#/newthread"
        } else  {
            comments.forEach(el => {
                temp.push(<>
                    <ul className="comment-wrapper" key={el.id.toString()}>
                        <div className="row comment-header">
                            <div className="username col-10">{el.title}</div>
                            <div className="stance col-2">{el.stance}</div>
                        </div>
                        <div className="comment-body row">
                            <p>{el.summary}</p>
                        </div>
                        <div className="comment-footer row">
                            <div className="author col-7">{el.author}</div>
                            <div className="updated-date col-4">{el.updateDate}</div>
                            {/* / if user === logedin user then "edit or delete" button / */}
                            {/* <button className="report-button">Report</button> */}
                        </div>
                        <div className="comment-resources row">
                            <ul key={`res-${el.id}`}>
                                <CommentResource id={el.id} />
                            </ul>
                        </div><br></br>
                    </ul>   
                </>);
            });
        }
        return temp
    };

    function renderForm(status){
        return(
            status ? <CommentForm loginData={loginData} thread_id={thread_id} setDisplay={setDisplay} displayComments={displayComments} /> : ''
        )
    }

    return(<><ul className="active-thread">
        {/* first index as prominent */}
        {displayComments.question}
        {displayComments.list}
        {renderForm(loginData.loggedIn)}
    </ul></>)
}

export default ActiveThread;