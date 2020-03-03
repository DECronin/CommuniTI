import React from 'react'; 
import $ from 'jquery';

const unknown = "I do not currently know."

function NewUserForm() {
       
    // function formObject(e){//
    //     e.preventDefault()
    // }
    return (<form className="form-wrapper border border-primary">
            <h6>New User</h6>
            {/* <div className="form-row">
                <div className="form-group col-9">
                    <input className="form-row form-group col-12" name="res-title" id="res-title" placeholder="Resource Name or Title"></input>
                </div>
                <div className="form-group col-3">
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Pro</label>
                        <input type="range" className="form-group col-6" id="res-stance" min="1" max="5" defaultValue="3" />
                        <label className="form-check-label form-group col-2" htmlFor="stance-range">Con</label>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-4">
                    <label>Category:</label>
                    <select className="form-control form-row form-group col-12" id="category">
                        <option value="Legal Text">Legal Text</option>
                        <option value="Academic Text">Academic Text</option>
                        <option value="News Article">News Article</option>
                        <option value="Journal Entry">Journal Entry</option>
                        <option value="Personal Experience">Personal Experience</option>
                        <option value="Other">Other</option> */}
                        {/* add more as progressed to finalization */}
                    {/* </select> */}
                    {/* <input placeholder="Other"></input> If Category: Other, Please Explain */}
                    {/* <div className="form-row">
                        <label className="form-group col-5">Release Date:</label>
                        <input className="form-group col-7" id="release-date" type="date"></input>
                    </div>
                </div>
                <div className="citation form-group col-8">
                    <input className="form-row form-group col-11" id="res-url" placeholder="URL: (source or access to source // ie: Google Books)"></input>
                    <input className="form-row form-group col-11" id="res-authors" placeholder="Author(s) and/or Contributor(s)"></input>
                    <input className="form-row form-group col-11" id="res-publisher" placeholder="Publisher or Sponsor"></input>
                </div>
            </div>
            <div className="form-row additional-notes">
                <textarea className="form-group col-11" placeholder="Additional Notes (optional)" rows="2" id="additional"></textarea>
            </div> */}
            <button onClick={(e) => formObject(e)}>Join</button> 
            {/* / if source == userComment send to state array for display purposes else send to recommendationPend / */}
    </form>)
}

export default NewUserForm

// Required
// ==========
// username
// first name
// last name
// password
// email
// birthdat (age math js)

// Optional
// phone
// affiliation(s)
// others
