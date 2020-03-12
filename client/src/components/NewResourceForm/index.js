import React from 'react'; 
import $ from 'jquery';
import API from '../../utils/API';

const unknown = "I do not currently know."

function NewResourceForm({ source, formData, setForm }) {

    function validate(data){
        return (data.title && data.category && data.url) ? true : false
    }
       
    function formObject(e){//
        let resData = {
            title: $('#res-title').val(),
            stance: $('#res-stance').val(),
            category: $('#category').val(),
            url: $('#res-url').val(),
            source: source || "Client-Side Error",
            authors: $('#res-authors').val() || unknown,
            publisher: $('#res-publisher').val() || unknown,
            releaseDate: $('#release-date').val() || unknown,
            additional: $('#additional').val()
        };
        // test if title and url are included
        console.log(`\n-----\nsource => ${source}\n-----`);
        if (validate(resData)){
            // if source == userComment send to state array for display purposes else send to recommendationPend
            if(source === 'reccomendation'){
                API.newResource(resData).then(() => window.location.href = "/#/resources")
            } else {
                let middleData = formData.dataResourceInputs || [];
                middleData.push(resData);
                setForm({
                    ...formData,
                    dataResourceInputs: middleData
                })
            }
        } else {
            if (resData.title === '') alert("Please Provide a Title for this Resource.")
            if (resData.url === '') alert("Please Provide a URL to Support this Resource.")
            if (!resData.category) alert("Please Provide a Category for this Resource. (If 'Other' explain in 'Additional Notes'.)")
        }
        e.preventDefault()
    }
    return (<ul className="form-wrapper" key="next">
                <h6>New Resource</h6>
            <div className="form-row">
                <div className="form-group col-9">
                    <input className="form-row form-group col-12" name="res-title" id="res-title" placeholder="Resource Name or Title" required={true}></input>
                </div>
                <div className="form-group col-3 rows">
                        <label className="col-12 d-flex justify-content-center">Overall View | Side:</label>
                        <label className="form-check-label form-group col-1" htmlFor="stance-range">Pro</label>
                        <span className="col-1"></span>
                        <input type="range" className="form-group col-6" id="res-stance" min="1" max="5" defaultValue="3" />
                        <label className="form-check-label form-group col-1" htmlFor="stance-range">Con</label>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-4">
                    <label>Category:</label>
                    <select className="form-control form-row form-group col-12" id="category" required={true}>
                        <option value="Legal Text">Legal Text</option>
                        <option value="Academic Text">Academic Text</option>
                        <option value="News Article">News Article</option>
                        <option value="Journal Entry">Journal Entry</option>
                        <option value="Personal Experience">Personal Experience</option>
                        <option value="Other">Other</option>
                        {/* add more as progressed to finalization */}
                    </select>
                    {/* <input placeholder="Other"></input> If Category: Other, Please Explain */}
                    <div className="form-row">
                        <label className="form-group col-5">Release Date:</label>
                        <input className="form-group col-7" id="release-date" type="date"></input>
                    </div>
                </div>
                <div className="citation form-group col-8">
                    <input className="form-row form-group col-11" id="res-url" placeholder="URL: (source or access to source // ie: Google Books)" required={true}></input>
                    <input className="form-row form-group col-11" id="res-authors" placeholder="Author(s) and/or Contributor(s)"></input>
                    <input className="form-row form-group col-11" id="res-publisher" placeholder="Publisher or Sponsor"></input>
                </div>
            </div>
            <div className="form-row additional-notes">
                <textarea className="form-group col-11" placeholder="Additional Notes (optional)" rows="2" id="additional"></textarea>
            </div>
            <button onClick={(e) => formObject(e)}>Add Resource</button> 
    </ul>)
}

export default NewResourceForm