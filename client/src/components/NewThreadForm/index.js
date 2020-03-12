import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import $ from 'jquery';
// import FocusContext from '../../utils/FocusContext';

function NewThreadForm({loginData}) {

    const [display, setUp] = useState({
        topics: [],
        submitted: false,
        navId: ''
    })
    
    function alphabeticalSort(a, b){
        const maxLength = a.length > b.length ? b.length : a.length;
        for (let i = 0; i < maxLength;){
            if (a.charCodeAt(i) === b.charCodeAt(i)){
                i++
            } else {
                return a.charCodeAt(i) - b.charCodeAt(i)
            }
        }
    }
    
    function generateTopicOptions(){
        API.findTopics().then(result => {
            let sorted = result.data.sort((a, b) => alphabeticalSort(a.title, b.title));
            let options = []
            sorted.forEach(topic => {
                options.push(<>
                    <div className="form-check col-4">
                        <input className="form-check-input" name="topic" type="checkbox" value={topic.id} id={`checkbox-${topic.id}`} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                        {topic.title}
                        </label>
                    </div>
                </>)
            });
            setUp({... display, topics: options})
        }) 
    }

    function validate(data){
        return (data.title === '' || data.summary === '' || !data.topicIDs.length) ? false : true
    }

    function submitThread(e){
        e.preventDefault();
        let inputs = {
            title: $("#thread-title").val(),
            stance: $("#thread-stance").val(),
            summary: $("#thread-body").val(),
            username: loginData.username,
            topicIDs: []
        }
        $.each($("input[name='topic']:checked"), function(){
            inputs.topicIDs.push($(this).val());
        });
        if (validate(inputs)){
            API.newThread(inputs).then(result => {
                // find a way to reload page without buggs
                setUp({...display, submitted: true, navId: result.data.id});
                if(display.submitted) window.location.replace(`/#/thread/${display.navId}`);
            })
        } else {
            alert("please privide more data")
        }
        e.preventDefault();
    }

    useEffect(() => {
        generateTopicOptions()
    }, [])

    return (<ul className="form-wrapper" key="new">
        <form><header className="row">
                <h5 className="col-9">New Thread</h5>
                <p className="col-3"><i>* Required Fields</i></p>
            </header>
            <div className="form-row">
                <div className="form-group col-9">
                    <input className="form-row form-group col-12" name="thread-title" id="thread-title" placeholder="* Question or Statement Title"></input>
                </div>
                <div className="form-group col-3">
                    <div className="form-row">
                    <label className="form-row col-10 flex justify-content-center">Starting View:</label>
                    <span className="col-2"></span>
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Pro</label>
                        <input type="range" className="form-group col-6" id="thread-stance" min="1" max="5" defaultValue="3" />
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Con</label>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <textarea className="form-group col-12" rows="4" placeholder="* Further Context..." name="thread-body" id="thread-body"></textarea>
            </div>
            <div className="form-group-topics row">
                <h6 className="col-9 d-flex justify-content-center">Topic(s)</h6>
                <p className="col-3"><i>* (Minimum: 1)</i></p>
                {display.topics}
            </div>
            <div className="form-row col-12 d-flex justify-content-center">
                <button onClick={e => submitThread(e)}>Submit</button>
            </div>
        </form>
    </ul>)
}

export default NewThreadForm