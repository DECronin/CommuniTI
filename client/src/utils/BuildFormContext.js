import React from 'react';

const BuildFormContext = React.createContext({
    pageFocus: 'comments',
    resourceIndex: 0,
    dataThreadArray: [],
    author: '',
    userId: '',
    topicID: '',
    threadID: '',
    title: '',
    stance: '',
    comment: '',
    dataResourceInputs: [{"title":"","stance":"3","category":"Legal Text","url":"","authors":"I do not currently know.","publisher":"I do not currently know.","releaseDate":"I do not currently know.","additional":""}],
    other: '?'
});

export default BuildFormContext;