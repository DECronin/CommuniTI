import React, { useState, useEffect} from 'react';
import API from '../../utils/API';

function ResourcesList() {
    const [resList, setRes] = useState({
        data: []
    })

    function renderResources(){
        let temp = [];
        // only pull "aproved" status
        API.findResources().then(result => {
            result.data.forEach(el => {
                temp.push(<li>{JSON.stringify(el)}</li> )
            });
            setRes({
                data: temp
            })
        })

        // style by on category and sort alphabetically
    }

    useEffect(() => {
        renderResources()
    }, [])

    return (
        <>
            <div>
                <header> ResourcesList </header>
                <ul>{resList.data}</ul>
            </div>
        </>)
}

export default ResourcesList