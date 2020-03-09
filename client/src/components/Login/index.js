import React from 'react'; 
import { Link } from "react-router-dom";
import API from "../../utils/API";
import $ from 'jquery';

function LoginForm({updateLogin}){
    function validate(data, cb){
        API.login(data).then((result) => {
            console.log(`result::\n${JSON.stringify(result)}`);
            localStorage.setItem('id', result.data.id);
            localStorage.setItem('loggedIn', 'true')
            cb({
                loggedIn: true,
                id: result.data.id
            })
        })
    }
    function formObject(e, cb){
        const inputs = {
            username: $("#username").val(),
            password: $("#password").val()
        }
        validate(inputs, cb)
        e.preventDefault()
    }
    return (
    <form className="form-wrapper border border-primary">
            <input name="username" id="username" placeholder="username"></input>
            <input name="password" id="password" placeholder="password"></input>
            <button onClick={(e) => formObject(e, updateLogin)}>Login</button> 
            <Link to="/newuser">New User</Link> 
            {/* / if source == userComment send to state array for display purposes else send to recommendationPend / */}
    </form> )
}

export default LoginForm
