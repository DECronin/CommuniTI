import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import $ from 'jquery';
// import FocusContext from '../../utils/FocusContext';

function NewThreadForm({loginData}) {

    const [display, setUp] = useState({
        topics: [],
        submitted: false
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
        return (data.title === '' || data.summary === '' || !data.topics.length) ? false : true
    }

    function submitThread(e){
        e.preventDefault();
        let inputs = {
            title: $("#thread-title").val(),
            stance: $("#thread-stance").val(),
            summary: $("#thread-body").val(),
            user_id: loginData.id,
            topicIDs: []
        }
        $.each($("input[name='topic']:checked"), function(){
            inputs.topicIDs.push($(this).val());
        });
        if (validate(inputs)){
            API.newThread(inputs).then(result => {
                // find a way to reload page without buggs
                console.log(JSON.stringify(result.data))
                setUp({...display, submitted: true})
            })
        } else {
            alert("please privide more data")
        }
        e.preventDefault();
    }

    useEffect(() => {
        generateTopicOptions()
    }, [])

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
            <div className="form-group-topics row"><label className="col-12">Topic(s):</label>{display.topics}</div>
        <button onClick={e => submitThread(e)}>Submit</button>
        </form>
    </ul>)
}

export default NewThreadForm