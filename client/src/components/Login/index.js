import React from 'react'; 
import { Link } from "react-router-dom";
import API from "../../utils/API";
import $ from 'jquery';

function LoginForm({updateLogin}){
    function validate(data, cb){
        localStorage.clear();
        API.login(data).then((result) => {
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
    <form className="form-wrapper row col-12">
        <span className="col-4"></span>
            <input className="col-4" name="username" id="username" placeholder="username"></input>
        <span className="col-4"></span>
            <input className="col-4" name="password" id="password" placeholder="password"></input>
        <span className="row col-12 flex justify-content-center">
            <button><Link onClick={(e) => formObject(e, updateLogin)} to="/">Login</Link> </button>
            <button><Link to="/newuser">New User</Link></button> 
        </span>
    </form> )
}

export default LoginForm
