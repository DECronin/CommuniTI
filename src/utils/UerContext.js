import React from 'react';

const UserContext = React.createContext({
    loginStatus: false,
    lastName: '',
    firstName: '',
    username: '',
    email: '',
    phone: '',
    other: '?'
});

export default UserContext;