import React, { Component } from 'react';
import "./AddJob.css";
import { withTracker } from 'meteor/react-meteor-data';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Jobs } from '../../api/jobs.js';

class EditAssignment extends Component{
    state = {
        deadline: new Date(),
        description: "",
        completed: false
    }

    handleDateChange = date => {
        this.setState({ deadline: date });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const description = this.state.description;
        const deadline = this.state.deadline;
        const completed = this.state.completed;
        // edit the corresponding job
        Jobs.update(this.props._id, {
          $set: { description: description,
                    completed: completed,
                    deadline: deadline
                }
        });
    }
    render(){
        if(this.props.loading){
            return(<div>loading</div>)
        } else {
            return(
                <div className = "addJob">
                    <h2 className="pageHeader">Edit Offer</h2>
                    <form>
                        <p className = "label">Deadline</p>
                        <DatePicker selected={this.state.deadline} onChange={this.handleDateChange}/>

                        <p className="label">Description</p>
                        <input className="addForm"
                        type='text'
                        name='description'
                        placeHolders=""
                        onChange={(e) => this.setState({description: e.target.value})}
                        />

                        <p className="label">Completed</p>
                        <select className = "addForm" value={this.state.completed} onChange={(e) => this.setState({completed: e.target.value})}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        <br/>
                        <button type="submit" id="completed-task" className="addSubmit" onClick={() =>this.handleSubmit}>Next</button>
                    </form>
                </div>
            )
        }
    }
}
export default withTracker(() => {
    return {
      jobs: Jobs.find({})
    }
  })(EditAssignment);
