import React, { Component } from 'react';
import CommentForm from '../CommentForm';

const fillerData = [{
    id: 1,
    title: 'test1',
    stance: 'Neutral',
    comment: 'gvbinnononnnnnnne nnbneineinien nibeuyveueb ubybniecnioeoicnien ubdubinindubfubf udbdnidnudnudbud dbubdundidin.',
    author: 'Anonymous',
    updateDate: '2-13-2020 11:23pm'
},{
    id: 2,
    title: 'test2',
    stance: 'Pro',
    comment: 'gvbinnononnnnnnne nnbneineinien nibeuyveueb ubybniecnioeoicnien ubdubinindubfubf udbdnidnudnudbud dbubdundidin.',
    author: 'Anonymous',
    updateDate: '2-13-2020 11:23pm'
},{
    id: 3,
    title: 'test3',
    stance: 'Con',
    comment: 'gvbinnononnnnnnne nnbneineinien nibeuyveueb ubybniecnioeoicnien ubdubinindubfubf udbdnidnudnudbud dbubdundidin.',
    author: 'Anonymous',
    updateDate: '2-13-2020 11:24pm'
}];

class ActiveThread extends Component {
    
    renderThreadArray = comments => {
        let question = comments.shift();
        let feed = [
            <ul className="question-wrapper border border-primary" key={question.id}>
                <div className="row question-header">
                    <div className="username col-10">{question.title}</div>
                    <div className="stance col-2">{question.stance}</div>
                </div>
                <div className="question-body row">
                    <p>{question.comment}</p>
                </div>
                <div className="question-footer row">
                    <div className="author col-7">{question.author}</div>
                    <div className="updated-date col-4">{question.updateDate}</div>
                    {/* / if user === logedin user then "edit or delete" button / */}
                    <button className="report-button">Report</button>
                </div>
                <div className="question-resources row">
                    <ul>
                        <li key="1">Populate Resources</li>
                    </ul>
                </div><br></br>
            </ul>];
        comments.forEach(el => {
            feed.push(<>
                <ul className="comment-wrapper border border-success" key={el.id.toString()}>
                    <div className="row comment-header">
                        <div className="username col-10">{el.title}</div>
                        <div className="stance col-2">{el.stance}</div>
                    </div>
                    <div className="comment-body row">
                        <p>{el.comment}</p>
                    </div>
                    <div className="comment-footer row">
                        <div className="author col-7">{el.author}</div>
                        <div className="updated-date col-4">{el.updateDate}</div>
                        {/* / if user === logedin user then "edit or delete" button / */}
                        <button className="report-button">Report</button>
                    </div>
                    <div className="comment-resources row">
                        <ul>
                            <li key="res-1">Populate Resources</li>
                        </ul>
                    </div><br></br>
                </ul>   
            </>);
        });
        return feed
    };

    render() {
        return(<><ul>
            {/* first index as prominent */}
            {this.renderThreadArray(fillerData)}
            <CommentForm />
        </ul>
        </>)
    }
}

export default ActiveThread;