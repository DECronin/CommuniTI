import React, { useState, useEffect } from 'react';
import CommentForm from '../CommentForm';
import API from '../../utils/API';
import CommentResource from '../CommentResource';

function ActiveThread ({loginData}) {
    const [displayComments, setDisplay] = useState({
        list: [],
        indexingComments: 0
    })
    const thread_id = window.location.href.split("/").pop();

    // API Call to fina all comments for this thread-id
    useEffect(() => {
        API.findComments(thread_id).then(result => {
            setDisplay({...displayComments, list: renderThreadArray(result.data)})
        })
    }, [thread_id, displayComments.indexingComments])
    
    function renderThreadArray (comments) {
        let temp = [];
        if (!comments.length){
            temp.push(<><ul className="question-wrapper border border-primary" key="testing">
            <h2>No Comments Currently Available</h2>
        </ul></>)
        } else  {
            let question = comments.shift();
            temp.push(<>
                <ul className="question-wrapper border border-primary" key={question.id.toString()}>
                    <div className="row question-header">
                        <div className="username col-10">{question.title}</div>
                        <div className="stance col-2">{question.stance}</div>
                    </div>
                    <div className="question-body row">
                        <p>{question.summary}</p>
                    </div>
                    <div className="question-footer row">
                        <div className="author col-7">{question.author}</div>
                        <div className="updated-date col-4">{question.updateDate}</div>
                        {/* / if user === logedin user then "edit or delete" button / */}
                        <button className="report-button">Report</button>
                    </div>
                    <div className="question-resources row">
                        <ul key={`res-${question.id}`}>
                            <CommentResource id={question.id} />
                        </ul>
                    </div><br></br>
                </ul></>);
            comments.forEach(el => {
                temp.push(<>
                    <ul className="comment-wrapper border border-success" key={el.id.toString()}>
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
                            <button className="report-button">Report</button>
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

    return(<><ul>
        {/* first index as prominent */}
        {displayComments.list}
        {renderForm(loginData.loggedIn)}
    </ul></>)
}

export default ActiveThread;