import React from 'react';

const UserContext = React.createContext({
    loginStatus: false,
    sessionData: '',
    username: '',
    id: '',
    other: '?'
});

export default UserContext;