import React, {useState} from 'react'; 
import { Link } from "react-router-dom";
import API from "../../utils/API";
import $ from 'jquery';

function LoginForm(){
    function validate(data){
        console.log("login form\n\n::" + JSON.stringify(data));
        API.login(data).then(result => {
            console.log(`test:: ${JSON.stringify(data)}\nlogin form result:: \n ${JSON.stringify(result)}`);
            window.location.href = '/newtopic';
        })
    }
    function formObject(e){
        const inputs = {
            username: $("#username").val(),
            password: $("#password").val()
        }
        validate(inputs)
        e.preventDefault()
    }
    return (
    <form className="form-wrapper border border-primary">
            <input name="username" id="username" placeholder="username"></input>
            <input name="password" id="password" placeholder="password"></input>
            <button onClick={(e) => formObject(e)}>Login</button> 
            <Link to="/newuser">New User</Link> 
            {/* / if source == userComment send to state array for display purposes else send to recommendationPend / */}
    </form> )
}

export default LoginForm
