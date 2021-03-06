import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { HashRouter as Router } from "react-router-dom";
import { AuthContext } from '../utils/AuthContext';
import TopicsList from "../components/TopicsList";
// import SuggestionsList from "../components/SuggestionsList";
import CenterFocus from "../components/CenterFocus";
import Footer from '../components/Footer';

let myStorage = window.localStorage;

function Dashboard() {

    const [loginData, setLogin] = useState(testLoginStorage());

    function testLoginStorage(){
        return(myStorage.loggedIn === 'true' ? {
            loggedIn: true,
            id: myStorage.id,
            username: myStorage.username
        } : {
            loggedIn: false,
            id: "X",
            username: "X"
        })
    }

    function updateLogin(data){
        setLogin(data);
    }

    useEffect(() => {}, [loginData])

    return (<>
        <Router><div className="container-fluid">
            <AuthContext.Provider value={loginData}>
                <Header loginData={loginData} />
                <div className="row">
                    <TopicsList loginData={loginData} />
                    <div className="center-focus col-8">
                        <CenterFocus loginData={loginData} updateLogin={updateLogin}/>
                    </div>
                    <div className="col-right col-2">{/* <SuggestionsList /> */}</div>
                </div>
                <Footer />
                {/* <Route 404 page />*/}
            </AuthContext.Provider>
        </div></Router>
    </>)
}

export default Dashboard