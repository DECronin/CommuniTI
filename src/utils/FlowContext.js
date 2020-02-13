import React from 'react';

const FlowContext = React.createContext({
    user: {
        loginStatus: false,
        lastName: '',
        firstName: '',
        username: '',
        email: '',
        phone: '',
        other: '?'
    },
    activeComponents: {
        pageFocus: 'login',
        topicID: '',
        threadID: '',
        other: '?'
    },
    loginAuth = () => {

    },
    pullList = () => {

    },
    submitForm = () => {

    },
    settings = () => {
        
    }
});

export default FlowContext;