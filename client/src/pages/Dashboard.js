import React from "react";
// import API from "../utils/API";
import Header from "../components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopicsList from "../components/TopicsList";
import SuggestionsList from "../components/SuggestionsList";
import ActiveThread from "../components/ActiveThread";
import ListThreadLinks from "../components/ActiveThread";
// import NewTopicForm from "../components/ActiveThread";
import NewUserForm from "../components/NewUserForm";
import NewResourceForm from "../components/ActiveThread";
// import UserBio from "../components/UserBio";
// import NewThreadForm from "../components/NewThreadForm";
import Login from "../components/Login";
// import Settings from "../components/Settings";
// import TOS from "../components/TOS";

function Dashboard() {

    return (<>
        <Router><div className="container-fluid">
            <Header />
            <div className="row">
                <TopicsList />
                {/* CenterFocus */}
                <div className="center-focus col-8 border border-primary">
                    <h3>CenterFocus</h3>
                    <Route exact path="/" component={Login} />
                    <Route path="/thread/:id" component={ActiveThread} />
                    <Route path="/topic/:id" component={ListThreadLinks} />
                    <Route exact path="/newtopic" component={ActiveThread} />
                    <Route exact path="/newresource" component={NewResourceForm} />
                    {/* <Route exact path="/newthread" component={NewThreadForm} /> */}
                    <Route exact path="/newuser" component={NewUserForm} />
                    {/* <Route exact path="/user" component={UserBio} /> */}
                    {/* <Route exact path="/termsofservise" component={TOS} /> */}
                    {/* <Route exact path="/settings" component={Settings} /> */}
                    {/* // 404 page */}
                </div>
                {/* CenterFocus */}
                <SuggestionsList />
            </div>
        </div></Router>
    </>)
}

export default Dashboard