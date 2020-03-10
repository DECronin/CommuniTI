import React from 'react'; 
import $ from 'jquery';
// import API from '../../utils/API';

function NewUserForm() {
    // function validate(data){
    //     return () ? true : false
    // }
    function formObject(e){
        let inputs = {
            username: $("#new-username").val(),
            passowrd:  $("#new-password").val(),
            first_name: $("#new-firstname").val(),
            last_name: $("#new-lastname").val(),
            email: $("#new-email").val(),
            phone: $("#new-phone").val()
        }
        console.log('submit click\n' + JSON.stringify(inputs))
        e.preventDefault()
    }
    return (<form className="form-wrapper border border-primary">
            <h6>New User</h6>
            <input name="firstname" id="new-firstname" placeholder="First Name"></input>
            <input name="lastname" id="new-lastname" placeholder="Last Name"></input>
            <input name="username" id="new-username" placeholder="username"></input>
            <input name="password" id="new-password" placeholder="password"></input>
            <input name="email" id="new-email" placeholder="email"></input>
            <input name="phone" id="new-phone" placeholder="phone"></input>
            <button onClick={(e) => formObject(e)}>Join</button> 
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
