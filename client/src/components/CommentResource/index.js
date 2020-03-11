import React, {useState, useEffect} from 'react';
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
                temp.push(<li>{result.data[y].title}</li>)
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