// import React { useContext } from "react";
import React, {Component} from 'react';
// import FlowContext from "../../utils/flowContext";
import ActiveThread from "../ActiveThread";
// import ListThreadLinks from "../ActiveThread";
// import NewTopicForm from "../ActiveThread";
// import NewUserForm from "../ActiveThread";
// import NewResourceForm from "../ActiveThread";
// import UserBio from "../UserBio";
// import NewThreadForm from "../NewThreadForm";
// import Login from "../ActiveThread";
// import Settings from "../Settings";
// import TOS from "../TOS";

class CenterFocus extends Component {
    // const { activeCompunents } = useContext(FlowContext);

    activeFocusContent = pageName => {
            console.log(pageName);
        switch(pageName){
            case 'comments':
                return <ActiveThread />
            // case 'threads':
            //     return <ListThreadLinks />
            // case 'resources':
            //     return <ResourceLibrary />
            // case 'newTopic':
            //     return <NewTopicForm />
            // case 'newUser':
            //     return <NewUserForm />
            // case 'newResource':
            //     return <NewResourceForm />
            // case 'userBio':
            //     return <UserBio />
            // case 'newThread':
            //     return <NewThreadForm />
            // case 'Settings':
            //     return <Settings />
            // case 'tos':
            //     return <TOS />
            // default:
            //     return <Login />
        }
    }

    render(){
        return (<>
            <div className="center-focus col-8 border border-primary">
                <h3>CenterFocus</h3>
                {this.activeFocusContent('comments')}
            </div>
        </>)
    }
}

export default CenterFocus