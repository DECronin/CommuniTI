import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ActiveThread from "../ActiveThread";
import ListThreadLinks from "../ListThreadLinks";
import NewUserForm from "../NewUserForm";
import NewResourceForm from "../NewResourceForm";
import UserBio from "../UserBio";
import NewThreadForm from "../NewThreadForm";
import Login from "../Login";
import Settings from "../Settings";
import TOS from "../TOS";
import ResourcesList from "../ResourceLibrary";
// import NewTopicForm from "../NewTopicForm";

function CenterFocus({loginData, updateLogin}){
    return(<><h3>CenterFocus</h3><Switch>
        <Route exact path="/" render={() => loginData.loggedIn ? <UserBio loginData={loginData} /> : <Login updateLogin={updateLogin} />} />
        <Route path="/thread/:id" render={() => <ActiveThread loginData={loginData} />} />
        <Route path="/topic/:id" render={() => <ListThreadLinks loginData={loginData} />} />
        <Route exact path="/newresource" render={() => <NewResourceForm source="reccomendation" />} />
        <Route exact path="/newthread" render={() => <NewThreadForm loginData={loginData} />} />
        <Route exact path="/newuser" render={() => <NewUserForm updateLogin={updateLogin} />} />
        <Route exact path="/resources" render={() => <ResourcesList loginData={loginData} />} />
        <Route exact path="/termsofservice" render={() => <TOS loginData={loginData} />} />
        <Route exact path="/settings" render={() => <Settings loginData={loginData} />} />
        {/* <Route exact path="/newtopic" render={() => <NewTopicForm />} /> */}
        {/* replace ^ with search bar results */}
        </Switch></>)
}

export default CenterFocus