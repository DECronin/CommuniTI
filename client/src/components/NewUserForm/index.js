import React, {useState, useEffect} from 'react'; 
import $ from 'jquery';
import API from '../../utils/API';

function NewUserForm({updateLogin}) {
    const [formFlow, setFlow] = useState({continue: false, valid: false})
    const [loginData, setInputs] = useState({})

    function validate(data){
        // validating if apropriate phone number
        // let temp = data.phone.split('');
        // let isNumbers = true;
        // let i = 0;
        // while(isNumbers && i < temp.length){
        //     isNumbers = !isNaN(temp[i])
        //     i++
        // }
        // if (!isNumbers || temp.length !== 10) alert("Please Provide a 10-Digit Phone Number with Valid Numbers");
        // console.log(`phone stuff\n!isNan => ${isNumbers}\nlength => ${temp.length}`)

        // validate email to not have empty spaces?
        // replace all " " with "" for now

        // username requirements? (7 characters or longer for now)
        let splitUsername = data.username.split('');
        // password requirements? (7 characters or longer for now as well)
        let splitPassword = data.password.split('');

        // && data.email !== '' && temp.lenght === 10 && isNumbers
        if (data.username !== '' && data.password !== '' && data.first_name !== '' && data.last_name !== ''
        && splitUsername.length > 6 && splitPassword.length > 6) {
            // test if api findUser username already exists
            API.findUser("username", data.username).then(result => {
                if(result.data.length !== 0){
                    alert(`Username ${data.username} Already Exists.\nPlease Provide an Alternative.`);
                    setFlow({continue: true, valid: false})
                } else{ 
                    setFlow({continue: true, valid: true})
                }
            }).catch(function (error) {
                console.log(error.response);
            })
        } else { 
            setFlow({continue: true, valid: false})
        }
    }
    function formObject(e){
        let inputs = {
            username: $("#new-username").val().replace(" ", ""),
            password:  $("#new-password").val(),
            first_name: $("#new-firstname").val(),
            last_name: $("#new-lastname").val(),
            email: $("#new-email").val().replace(" ", "") || `${$("#new-username").val().replace(" ", "")}-filler@email.com`,
            // birthday: '' // validate for users over age of 18?
            // Math.randoms: debugging only => phone cannot be null and must be unique (taking out of form and model for now)
            // phone: $("#new-phone").val() || `311${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
        }
        setInputs(inputs)
        validate(inputs)
        e.preventDefault()
    }

    function dbInsert(){
        console.log(JSON.stringify(loginData))
        API.newUser(loginData).then(API.login({
            username: loginData.username,
            password: loginData.password
        }).then((result) => {
            console.log(JSON.stringify(result));
            localStorage.setItem('id', result.data.id);
            localStorage.setItem('loggedIn', 'true')
            localStorage.setItem('username', loginData.username)
            updateLogin({
                loggedIn: true,
                id: result.data.id,
                username: loginData.username
            })
            window.location.href = "/"
        })).catch(function (error) {
            console.log(error.response);
            });
    }

    useEffect(() => {
        console.log(`formFlow == ${formFlow.continue}\nuseeffect()`)
        if(formFlow.continue) { if (formFlow.valid){ dbInsert()} else {
                let splitUsername = loginData.username.split('');
                let splitPassword = loginData.password.split('');
                if (loginData.username === ''|| splitUsername.length < 7) alert("Please Provide a Username with a Minimum of 7 Characters.")
                if (loginData.password === ''|| splitPassword.length < 7) alert("Please Provide a Password with a Minimum of 7 Characters.")
                if (loginData.first_name === '' || loginData.last_name === '') alert("Please Provide Your Full Name.")
                if (loginData.email === '') alert("Please Provide a Valid Email.")
                setFlow({continue: false, valid: false})
            }}
    }, [formFlow.continue])
    
    return (<form className="form-wrapper border border-primary">
            <h6>New User</h6>
            <div className="form-row form-group">
                <label className="col-1">Name:</label>
                <input className="col-5" name="firstname" id="new-firstname" placeholder="First"></input>
                <input className="col-5" name="lastname" id="new-lastname" placeholder="Last"></input>
            </div>
            <div className="form-row form-group">
                <input className="col-6" name="username" id="new-username" placeholder="username"></input>
                <input className="col-6" name="password" id="new-password" placeholder="password"></input>
            </div>
            {/* <input className="form-row" name="phone" id="new-phone" placeholder="phone"></input> */}
            {/* <input>birthday</input> */}
            <div className="form-row">
                <input className="col-9" name="email" id="new-email" placeholder="email"></input>
                <button className="col-2" onClick={(e) => formObject(e)}>Join</button>
            </div>
            
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

// birthday (age math validate js) !!!!!!!!!!!!!!!!!!! (to add in future developement)

// Optional
//=========
// phone
// affiliation(s)
// others
