import React from 'react';
// import API from '../../utils/API';

function UserBio({ loginData }) {

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
                <div className="row flex justify-content-center">
                    <h6 className="row flex justify-content-center col-12">Unreliable Narrator:</h6>
                    <span className="col-2"></span>
                    <p className="col-8 flex justify-content-center">A narrator (Provider of Context) whose credibility has been compromised.
                    Their input is not completely accurate due to influencing factors such as mental state, maturity, credible versus noncredible education or research, past experiences and simply how they process logic.
                    The Information is shared from the events or interpretation of their perspective.
                    </p>
                    <span className="col-2"></span><p className="col-8 flex justify-content-center">
                        "Unreliable Narrator: Definition & Examples."
                        Study.com, 22 July 2015,
                        Instructor: Suzanne Sweat
                        <a className="row col-12 flex justify-content-center" href="https://study.com/academy/lesson/unreliable-narrator-definition-examples.html">https://study.com/academy/lesson/unreliable-narrator-definition-examples.html</a>
                        <a className="row col-12 flex justify-content-center" href="https://en.wikipedia.org/wiki/Unreliable_narrator">https://en.wikipedia.org/wiki/Unreliable_narrator</a>
                        <span className="col-2"></span>
                    </p>
                </div>
                <div className="row">
                    <h6 className="row col-12 flex justify-content-center"> Things to Look Foreward To:</h6>
                    <span className="col-3"></span>
                    <ul className="col-9 row">
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

export default UserBio