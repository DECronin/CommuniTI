import React, { useState, useEffect } from 'react';
import CommentForm from '../CommentForm';
import API from '../../utils/API';

const htmlTest = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"%PUBLIC_URL%/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width";

function ActiveThread ({loginData}) {
    const [displayComments, setDisplay] = useState({
        list: []
    })

    // API Call to fina all comments for this thread-id
    useEffect(() => {
        const threadID = window.location.href.split("/").pop();
        console.log("thread ID::    " + threadID);
        API.findComments('1').then(result => {
            let middle = result.data.toString().split(",");
            let obj = (middle[0] === htmlTest) ? {err: 'HTML?'} : result
            if(obj.data){
                renderThreadArray(obj.data)
            }
        })
    }, [window.location.href])
    
    function renderThreadArray (comments) {
        // let feed = [];
        let question = comments.shift();
        let feed = [
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
                        <li key="1">Populate Resources</li>
                    </ul>
                </div><br></br>
            </ul>];
        comments.forEach(el => {
            feed.push(<>
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
                            <li key={`res-${el.id}`}>Populate Resources</li>
                        </ul>
                    </div><br></br>
                </ul>   
            </>);
        });
        setDisplay({...displayComments, list: feed})
    };

    function renderForm(status){
        return(
            status ? <CommentForm /> : ''
        )
    }

    return(<><ul>
        {/* first index as prominent */}
        {displayComments.list}
        {renderForm(loginData.loggedIn)}
    </ul></>)
}

export default ActiveThread;