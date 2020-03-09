import React from 'react'; 
import { Link } from "react-router-dom";
import API from "../../utils/API";
import $ from 'jquery';

function LoginForm({updateLogin}){
    function validate(data, cb){
        localStorage.clear();
        console.log(`sending data : ${JSON.stringify(data)}`)
        API.login(data).then((result) => {
            console.log(JSON.stringify(result));
            localStorage.setItem('id', result.data.id);
            localStorage.setItem('loggedIn', 'true')
            localStorage.setItem('username', data.username)
            cb({
                loggedIn: true,
                id: result.data.id,
                username: data.username
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
            <Link onClick={(e) => formObject(e, updateLogin)} to="/">Login</Link> 
            <Link to="/newuser">New User</Link> 
            {/* / if source == userComment send to state array for display purposes else send to recommendationPend / */}
    </form> )
}

export default LoginForm
