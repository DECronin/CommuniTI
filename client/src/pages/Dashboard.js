import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { HashRouter as Router } from "react-router-dom";
import { AuthContext } from '../utils/AuthContext';
import TopicsList from "../components/TopicsList";
import SuggestionsList from "../components/SuggestionsList";
import CenterFocus from "../components/CenterFocus";

let myStorage = window.localStorage;

function Dashboard() {

    const [loginData, setLogin] = useState(testLoginStorage());

    function testLoginStorage(){
        return(myStorage.loggedIn === 'true' ? {
            loggedIn: true,
            id: myStorage.id
        } : {
            loggedIn: false,
            id: 0
        })
    }

    function updateLogin(data){
        setLogin(data);
        let temp = window.location.href.split('/');
        temp.pop()
        temp.push("user");
        let newURL = temp.join("/");
        window.location.href = newURL
    }

    useEffect(() => {
        console.log(`Local storage::{\nloggedIn: ${localStorage.loggedIn || "x"}\nid: ${localStorage.id || "x"}\n }`);
    }, [loginData])

    return (<>
        <Router><div className="container-fluid">
            <AuthContext.Provider value={loginData}>
                <Header loginData={loginData} />
                <div className="row">
                    <TopicsList />
                    <div className="center-focus col-8 border border-primary">
                        <CenterFocus loginData={loginData} updateLogin={updateLogin}/>
                    </div>
                    <SuggestionsList />
                </div>
                {/* <Route 404 page />*/}
            </AuthContext.Provider>
        </div></Router>
    </>)
}

export default Dashboard