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
            <div>
                <header> UserBio: {loginData.username} </header>
                <div> Options </div>
                <div> Options </div>
                <div> Options </div>
                <div> Options </div>
                <div> Options </div>
                <div> Options </div>
                <div> Options </div>
                <div> Options </div>
                <footer>
                    <button>Save</button>
                </footer>
            </div>
        </>)
}

export default  UserBio