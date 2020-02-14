import React, {Component} from 'react';
import NewResourceForm from '../NewResourceForm';

class CommentForm extends Component {
    resourcesArray = [];

    // rederResourcesList = data => { // pull 'data' from state
    //     this.resourcesArray.push(<li>

    //     </li>)
    // };

    render(){
        return(<ul className="form-wrapper border border-warning" key="new"> 
            <form>
                <h5>New Comment</h5>
                <div className="form-row">
                    <div className="form-group col-9">
                        <input className="form-row form-group col-12" name="comment-title" id="comment-title" placeholder="Title Statement"></input>
                    </div>
                    <div className="form-group col-3">
                        <div className="form-check form-row">
                            <input className="form-check-input" type="radio" name="stance-range" id="stance-range" value="stance-range" />
                            <label className="form-check-label form-group col-2" htmlFor="stance-range">Pro</label>
                            <input type="range" className="form-group col-6" id="res-stance" min="1" max="5" defaultValue="3" />
                            <label className="form-check-label form-group col-2" htmlFor="stance-range">Con</label>
                        </div>
                        <div className="form-check form-row">
                            <input className="form-check-input" type="radio" name="stance-other" id="stance-other" value="thance-other" />
                            <label className="form-check-label" htmlFor="stance-other">
                                Other
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <textarea className="form-group col-12" rows="4" placeholder="Comment..." name="comment-body" id="comment-body"></textarea>
                </div>
                <div className="resource-wrapper">
                    <ul>
                        <h6>Resources:</h6>
                        {this.resourcesArray}
                        <NewResourceForm source="userComment" />
                    </ul>
                </div>
            </form>    
        </ul>) 
    }
}

export default CommentForm

//(username, thread, topic?, timestamp later grabbed from state)
// sumbit button 