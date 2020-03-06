import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ActiveThread from "../ActiveThread";
import ListThreadLinks from "../ListThreadLinks";
import NewTopicForm from "../NewTopicForm";
import NewUserForm from "../NewUserForm";
import NewResourceForm from "../NewResourceForm";
import UserBio from "../UserBio";
import NewThreadForm from "../NewThreadForm";
import Login from "../Login";
import Settings from "../Settings";
import TOS from "../TOS";
import ResourcesList from "../ResourceLibrary";

function CenterFocus(){
    return(<><h3>CenterFocus</h3><Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/thread/:id" render={() => <ActiveThread />} />
        <Route exact path="/topic" render={() => <ListThreadLinks />} />
        <Route exact path="/newtopic" render={() => <NewTopicForm />} />
        <Route exact path="/newresource" render={() => <NewResourceForm />} />
        <Route exact path="/newthread" render={() => <NewThreadForm />} />
        <Route exact path="/newuser" render={() => <NewUserForm />} />
        <Route exact path="/user" render={() => <UserBio />} />
        <Route exact path="/resources" render={() => <ResourcesList />} />
        <Route exact path="/termsofservice" render={() => <TOS />} />
        <Route exact path="/settings" render={() => <Settings />} />
        </Switch></>)
}

export default CenterFocus