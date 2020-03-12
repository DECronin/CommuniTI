import React, { useState } from 'react';
import NewResourceForm from '../NewResourceForm';
import API from '../../utils/API';
import $ from 'jquery';

function CommentForm({loginData, thread_id, setDisplay, displayComments}) {
    const [formData, setForm] = useState({
        resourceIndex: 0,
        thread_id: thread_id,
        user_id: loginData.id,
        username: loginData.username,
        title: '',
        stance: '',
        comment: '',
        dataResourceInputs: []
    })

    function renderResourcesList(data) {
        let displayData = data.map(el => <>
            <li className="single-resource-wrapper" key={data.indexOf(el)}>
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

    function validate(data){
        console.log(`validation::\n${JSON.stringify(formData.dataResourceInputs)}`)
        return (data.title !== '' && data.comment !== '' && formData.dataResourceInputs) ? true : false
        // return false
    }

    function submitComment(e){
        let inputs = {
            title: $("#comment-title").val(),
            stance: $("#res-stance").val(),
            comment: $("#comment-body").val()
        }
        if (validate(inputs)){
            setForm({...formData,
                title: inputs.title,
                stance: inputs.stance,
                comment: inputs.comment
            })
            API.newComment({...formData,
                title: inputs.title,
                stance: inputs.stance,
                comment: inputs.comment
            }).then(result => {
                console.log(JSON.stringify(result))
                setDisplay({...displayComments, indexingComments: displayComments.indexingComments++})
                window.location.reload()
            });
        } else {
            if (inputs.title === '') alert("Please Provide a Title for this Comment.")
            if (inputs.comment === '') alert("Please Provide Context to this Comment.")
            if (formData.dataResourceInputs.length < 1) alert("Please Support this Comment with A minimum of 1 Resource")
        }
        e.preventDefault();
    }

    return (<ul className="form-wrapper" key="new">
        <form className="needs-validation" noValidate>
            <h5>New Comment</h5>
            <div className="form-row">
                <div className="form-group col-9">
                    <input className="form-row form-group col-12" name="comment-title" id="comment-title" placeholder="Title Statement" required={true}></input>
                </div>
                <div className="form-group col-3">
                    <label className="form-row col-12 flex justify-content-center">View:</label>
                    <div className="form-row">
                        <span className="col-1"></span>
                        <label className="form-check-label form-group col-1" htmlFor="stance-range">Pro</label>
                        <span className="col-1"></span>
                        <input type="range" className="form-group col-6" id="comment-stance" min="1" max="5" defaultValue="3" />
                        <label className="form-check-label form-group col-1" htmlFor="stance-range">Con</label>
                        <span className="col-1"></span>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <textarea className="form-group col-12" rows="4" placeholder="Comment..." name="comment-body" id="comment-body" required={true}></textarea>
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
    </ul>)
}

export default CommentForm