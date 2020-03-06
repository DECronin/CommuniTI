import React from 'react';
// import API from '../../utils/API';
// import $ from 'jquery';, { useState, useEffect } 

function NewTopicForm() {
    function submittopic(e){
        console.log("==click==\nSUBMIT NEW TOPIC");
        e.preventDefault();
    }
    return (<ul className="form-wrapper border border-warning" key="new">
        <form>
            <h5>New topic</h5>
            <div className="form-row">
                <div className="form-group col-9">
                    <input className="form-row form-group col-12" name="topic-title" id="topic-title" placeholder="Title Statement"></input>
                </div>
                <div className="form-group col-3">
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Pro</label>
                        <input type="range" className="form-group col-6" id="res-stance" min="1" max="5" defaultValue="3" />
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Con</label>
                </div>
            </div>
            <div className="form-row">
                <textarea className="form-group col-12" rows="4" placeholder="topic..." name="topic-body" id="topic-body"></textarea>
            </div>
        <button onClick={e => submittopic(e)}>Submit</button>
        </form>
    </ul>)
}

export default NewTopicForm