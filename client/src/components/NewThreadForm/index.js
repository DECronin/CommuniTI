import React from 'react';
import API from '../../utils/API';
import $ from 'jquery';
// import FocusContext from '../../utils/FocusContext';, { useState, useEffect }

function NewThreadForm({loginData}) {

    let topic_ids = []

    function generateTopicOptions(){
        let displayOptions = [];
        API.findTopics().then(result => {
            result.data.forEach(topic => {
                // displayOptions.push( <> <div className="custom-control custom-checkbox">
                // <input type="checkbox" className="custom-control-input" id="customCheck1">
                // <label className="custom-control-label" for="customCheck1">"TOPICS"</label>
                // </div> </>)
                displayOptions.push(topic.title)
            });
        }) 

        return displayOptions
    }

    function validate(data){
        // title, min 1 topic, body
        return (data.title !== '' && data.summary !== '' && data.topics.length >= 1) ? true : false
    }

    function submitThread(e){
        let inputs = {
            title: $("#thread-title").val(),
            stance: $("#thread-stance").val(),
            summary: $("#thread-body").val(),
            user_id: loginData.id,
            topics: topic_ids
        }
        if (validate(inputs)){
            API.newThread(inputs).then()
        } else {
            alert("please privide more data")
        }
        e.preventDefault();
    }

    return (<ul className="form-wrapper border border-warning" key="new">
        <form>
            <h5>New Thread</h5>
            <div className="form-row">
                <div className="form-group col-9">
                    <input className="form-row form-group col-12" name="thread-title" id="thread-title" placeholder="Question or Statement Title"></input>
                </div>
                <div className="form-group col-3">
                    <label className="form-row col-12">Starting View:</label>
                    <div className="form-row">
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Pro</label>
                        <input type="range" className="form-group col-6" id="thread-stance" min="1" max="5" defaultValue="3" />
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Con</label>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <textarea className="form-group col-12" rows="4" placeholder="Further Context..." name="thread-body" id="thread-body"></textarea>
            </div>
            {generateTopicOptions()}
        <button onClick={e => submitThread(e)}>Submit</button>
        </form>
    </ul>)
}

export default NewThreadForm