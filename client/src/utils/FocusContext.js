import React from 'react';

const FocusContext = React.createContext({
    pageFocus: 'comments',
    topicID: '',
    threadID: '',
    other: '?',
    dataThreadArray: []
});

export default FocusContext;