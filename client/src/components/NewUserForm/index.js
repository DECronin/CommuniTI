import React from 'react'; 
// import $ from 'jquery';

function NewUserForm() {
    // function validate(data){
    //     return () ? true : false
    // }
    function formObject(e){
        console.log('click')
        e.preventDefault()
    }
    return (<form className="form-wrapper border border-primary">
            <h6>New User</h6>
            <input name="username" placeholder="username"></input>
            <input name="password" placeholder="password"></input>
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
// birthday (age math validate js)

// Optional
//=========
// phone
// affiliation(s)
// others
