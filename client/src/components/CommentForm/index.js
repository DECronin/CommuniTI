import React, { useState } from 'react';
import NewResourceForm from '../NewResourceForm';
import API from '../../utils/API';
import $ from 'jquery';
import BuildFormContext from '../../utils/BuildFormContext';

function CommentForm() {
    const [formData, setForm] = useState({
        pageFocus: 'comments',
        resourceIndex: 0,
        dataThreadArray: [],
        author: '',
        userId: '',
        topicID: '',
        threadID: '',
        title: '',
        stance: '',
        comment: '',
        displayResources: [],
        dataResourceInputs: [],
        other: '?'
    })

    function renderResourcesList(data) {
        // console.log(`data======\n\n${JSON.stringify(data)}`)
        let displayData = data.map(el => <>
            <li className="single-resource-wrapper" key={data.indexOf(el).toString()}>
                 <div className="row res-header">
                     <div className="col-10">{el.title}</div>
                     <div className="col-2">Stance</div>
                 </div>
                 <div className="row res-body">
                     <div className="row">
                         <div className="col-4">Publisher/Sponsor: {el.publisher}</div>
                         <div className="col-5">Author/Contributor(s): {el.authors}</div>
                         <div className="col-2">Released: {el.releaseDate}</div>
                     </div>
                     <div className="row">
                         <div className="col-4">Category: {el.category}</div>
                         <div className="col-8">URL: {el.url}</div>
                     </div>
                 </div>
                 <div className="row res-footer col-12">{el.additional}</div>
                 </li>
            </>
        )
            return displayData
    };
    function submitComment(e){
        setForm({...formData, 
            title: $("#comment-title"),
            stance: $("#res-stance"),
            comment: $("#comment-body")
        })
        console.log("submit click ==::==\n" + JSON.stringify(formData));
        API.newComment((formData));
        e.preventDefault();
    }

    return (<ul className="form-wrapper border border-warning" key="new">
        <BuildFormContext.Provider value={formData, setForm}>
        <form>
            <h5>New Comment</h5>
            <div className="form-row">
                <div className="form-group col-9">
                    <input className="form-row form-group col-12" name="comment-title" id="comment-title" placeholder="Title Statement"></input>
                </div>
                <div className="form-group col-3">
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Pro</label>
                        <input type="range" className="form-group col-6" id="res-stance" min="1" max="5" defaultValue="3" />
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Con</label>
                </div>
            </div>
            <div className="form-row">
                <textarea className="form-group col-12" rows="4" placeholder="Comment..." name="comment-body" id="comment-body"></textarea>
            </div>
            <div className="resource-wrapper">
                <ul>
                    <h6>Current Resource(s):</h6>
                    {renderResourcesList(formData.dataResourceInputs)}
                    <NewResourceForm source="userComment" formData={formData} setForm={setForm} />
                </ul>
            </div>
        <button onClick={e => submitComment(e)}>Submit</button>
        </form>
        </BuildFormContext.Provider>
    </ul>)
}

export default CommentForm

//(username, thread, topic?, timestamp later grabbed from state)
// sumbit button 