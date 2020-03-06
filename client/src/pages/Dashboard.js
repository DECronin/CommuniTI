import React from "react";
// import API from "../utils/API";
import Header from "../components/Header";
import { HashRouter as Router} from "react-router-dom";
import TopicsList from "../components/TopicsList";
import SuggestionsList from "../components/SuggestionsList";
import CenterFocus from "../components/CenterFocus";

function Dashboard() {

    return (<>
        <Router><div className="container-fluid">
            <Header />
            <div className="row">
                <TopicsList />
                {/* CenterFocus */}
                <div className="center-focus col-8 border border-primary">
                    <CenterFocus />
                    {/* // 404 page */}
                </div>
                {/* CenterFocus */}
                <SuggestionsList />
            </div>
        </div></Router>
    </>)
}

export default Dashboard