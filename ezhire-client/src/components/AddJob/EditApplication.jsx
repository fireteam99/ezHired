import React, { Component } from 'react';
import "./AddJob.css";
import { withTracker } from 'meteor/react-meteor-data';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { Jobs } from '../../api/jobs.js';

class EditApplication extends Component {
  state = {
    deadline: new Date(),
    link: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const application = {
      deadline: this.state.deadline,
      link: this.state.link
    }
    // edit the corresponding job
    Jobs.update(this.props._id, {
      $set: { application: application }
    });
  }

  handleDateChange = date => {
    this.setState({ deadline: date});
  }

  render() {
    if (this.props.loading) {
      return (<div>loading</div>);
    }
    return (
      <div className="addJob">
      <h2 className="pageHeader">Edit Application</h2>
      <form>
        <p className = "label">Deadline</p>
        <DatePicker selected={this.state.deadline} onChange={this.handleDateChange}/>
        <p className = "label">Link</p>
        <input className = "addForm"
          type='text'
          name='link'
          placeHolder = 'https://google.com...'
          required
          onChange={(e) => this.setState({link: e.target.value})}
        />
        <br/>
        <button type="submit" id="completed-task" className="addSubmit" onClick = {() => this.handleSubmit}>
            Next
        </button>
      </form>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    jobs: Jobs.find({})
  }
})(EditApplication);
