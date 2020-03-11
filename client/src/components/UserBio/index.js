import React from 'react';
// import API from '../../utils/API';

function UserBio({loginData}) {

    // function renderUserInfo(x){
    //     API.findUser(x.id).then(result => {
    //         console.log("user bio api call\n=========\n" + result.data[0])
    //         // populate with information from result.data[0]
    //     })
    // };

    return (
        <>
            <div className="row container">
                <h2> Welcome {loginData.username} </h2>
                {/* insert links? */}
                {/* mission statement? */}
                {/* how to use */}
                {/* presentation stuff? */}
                <div>

                </div>
                <div className="row">
                    <h6 className="row col-12"> Things to Look Foreward To:</h6>
                    <span className="col-1"></span>
                    <ul className="col-11 row">
                        <li className=" col-12">More Comments, Resources and Threads</li>
                        <li className=" col-12">Dictionary Connection (Search and Word of the Day)</li>
                        <li className=" col-12">Personalizing & Updating Accounts with Settings</li>
                        <li className=" col-12">Updating and Reporting Resources, Comments or Threads</li>
                        <li className=" col-12">Search Bar</li>
                        <li className=" col-12">Administration</li>
                        <li className=" col-12">Sorting Threads (Most Recent vs Most Popular)</li>
                        <li className=" col-12">"Food for Thought" Quote of the Day (or Week)</li>
                        <li className=" col-12">Terms of Service | Site Guidelines</li>
                        <li className=" col-12">"Share" Options</li>
                        <li className=" col-12">FAQ's | How-To's | Contact</li>
                    </ul>
                </div>
            </div>
        </>)
}

export default  UserBio