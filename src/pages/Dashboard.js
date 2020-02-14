import React, { useEffect, useState } from "react";
// import API from "../utils/API";
// import FlowContext from "../utils/FlowContext";
import CenterFocus from "../components/CenterFocus";
import Header from "../components/Header";
import TopicsList from "../components/TopicsList";
import SuggestionsList from "../components/SuggestionsList";

function Dashboard(){
    // const [userFlow, setFlow] = useState({})

    // useEffect(){

    // }

    return(<>
        {/* <FlowContext.Provider value={userFlow}> */}
            <div className="container-fluid">
                <Header />
                <div className="row">
                <TopicsList />
                <CenterFocus />
                <SuggestionsList />
                </div>
            </div>
        {/* </FlowContext.Provider> */}
    </>)
}

export default Dashboard