import React, { useEffect, useState } from "react";
// import API from "../utils/API";
import CenterFocus from "../components/CenterFocus";
import Header from "../components/Header";
import TopicsList from "../components/TopicsList";
import SuggestionsList from "../components/SuggestionsList";

function Dashboard(){
    // const [userFlow, setFlow] = useState({
    //     user: {
    //         loginStatus: false,
    //         lastName: '',
    //         firstName: '',
    //         username: '',
    //         email: '',
    //         phone: '',
    //         other: '?'
    //     },
    //     activeComponents: {
    //         pageFocus: 'comments',
    //         topicID: '',
    //         threadID: '',
    //         other: '?',
    //         dataThreadArray: [],
    //         dataResourceInputs: []
    //     }})

    // useEffect(){

    // }

    return(<>
        {/* <FlowContext.Provider value={userFlow}> */}
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <TopicsList />
                    <CenterFocus page={'comments'}/>
                    <SuggestionsList />
                </div>
            </div>
        {/* </FlowContext.Provider> */}
    </>)
}

export default Dashboard