import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import API from '../../utils/API';

function CommentResource({id}){
    
    const [resDisplay, setRes] = useState({
        rendering: []
    })

    function populateResources(id){
        let temp = []
        API.findResources("comment_id", id).then(result => {
            // console.log(`api resources result::\n${JSON.stringify(result)}`)
            for(let y = 0; y < result.data.length; y++){
                temp.push(<li key={result.data[y].id.toString()}><Link to={result.data[y].url} target="_blank">{result.data[y].title}</Link></li>)
            }
            setRes({rendering: temp})
        })
    }

    useEffect(() => {
        populateResources(id)
    }, [])

    return(<>
        {resDisplay.rendering}
    </>)
}

export default CommentResource