import React, { Component } from 'react';
import "./AddJob.css";
import { withTracker } from 'meteor/react-meteor-data';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { Jobs } from '../../api/jobs.js';

class EditRejection extends Component {
  state = {
    reason: "",
    date: new Date()
  }

  handleDateChange = date => {
    this.setState({ deadline: date});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const rejection = {
      reason: this.state.reason,
      date: this.state.date
    }
    // edit the corresponding job
    Jobs.update(this.props._id, {
      $set: { rejection: rejection }
    });
  }

  render() {
    if (this.props.loading) {
      return <div>loading</div>
    }
    return (
      <div className="addJob">
      <h2 className="pageHeader">Edit Rejection</h2>
      <form>
        <p className = "label">Date</p>
        <DatePicker selected={this.state.date} onChange={this.handleDateChange}/>
        <p className = "label">Reason</p>
        <input className = "addForm"
          type='text'
          name='reason'
          placeHolder = 'I failed all of the technical questions...'
          required
          onChange={(e) => this.setState({reason: e.target.value})}
        />
        <br/>
        <button type="submit" id="completed-task" className="addSubmit" onClick = {() => this.handleSubmit}>
            Next
        </button>
      </form>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    jobs: Jobs.find({}).fetch()
  }
})(EditRejection)
