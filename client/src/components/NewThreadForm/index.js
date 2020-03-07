import React from 'react';
// import API from '../../utils/API';
// import $ from 'jquery';, { useState, useEffect } 

function NewThreadForm() {
    function submitThread(e){
        console.log("==click==\nSUBMIT NEW THREAD");
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
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Pro</label>
                        <input type="range" className="form-group col-6" id="res-stance" min="1" max="5" defaultValue="3" />
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Con</label>
                </div>
            </div>
            <div className="form-row">
                <textarea className="form-group col-12" rows="4" placeholder="Further Context..." name="thread-body" id="thread-body"></textarea>
            </div>
        <button onClick={e => submitThread(e)}>Submit</button>
        </form>
    </ul>)
}

export default NewThreadForm