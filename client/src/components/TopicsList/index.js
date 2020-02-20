import React from 'react';
// import API from "../../utils/API";

function TopicsList(){
    // generateTopicsList = () => {

    // };
    return (<>
        <div className="col-left col-2 border border-danger">
            <header>Topics:</header>
            <ul>
                <li key="1">1</li>
                <li key="2">1</li>
                <li key="3">1</li>
                <li key="4">1</li>
                <li key="5">1</li>
                <li key="6">1</li>
                <li key="7">1</li>
                <li key="8">1</li>
                <li key="9">1</li>
                {/* {this.generateTopicsList()} */}
            </ul>
            <button>Suggest New Topic</button>
        </div>
    </>)
}

export default TopicsList