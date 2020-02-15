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
        pageFocus: 'comments',
        topicID: '',
        threadID: '',
        other: '?',
        dataThreadArray: [],
        dataResourceInputs: []
    },
    // loginAuth = () => {

    // },
    // pullList = () => {

    // },
    // submitForm = () => {

    // },
    // settings = () => {
        
    // }
});

export default FlowContext;