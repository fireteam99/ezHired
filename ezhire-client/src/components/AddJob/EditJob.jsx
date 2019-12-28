import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import "./AddJob.css";
import EditApplication from './EditApplication.jsx';
import EditAssignment from './EditAssignment.jsx';
// import EditInterview from './EditInterview.jsx';
import EditOffer from './EditOffer.jsx';
import EditRejection from './EditRejection.jsx';
import { Jobs } from '../../api/jobs.js';

const queryString = require('query-string');

class EditJob extends Component {
  state = {
    company: "Wayfair",
    position: "Devops",
    status: "application",
    _id: ''
  }

  handleSubmit = () => {
    const job = {
      user: 'feces',
      company: {
        name: this.state.company
      },
      position: this.state.position,
      status: this.state.status,
      application: null,
      applied: null,
      offer: null,
      rejection: null,
    };
    this._id = Jobs.insert(job);
  }

  test = () => {
    console.log("FUCKING WORK YOU PIECE OF SHIT");
  }

  renderAdditional = () => {
    if (this.state.status === 'application') {
      return <EditApplication />
    } else if (this.state.status === 'applied') {
      return (
        <div>
          <EditAssignment />
        </div>
      )
    } else {
      return (
        <div>
          <EditOffer />
          <EditRejection />
        </div>
      )
    }
  }

  render() {
    if (this.props.loading) {
      return(<div>loading</div>);
    }
    return(
      <div className="addJob">
      <h2 className="pageHeader">ADD JOB</h2>
      <form>
        <p className = "label">Company</p>
        <input className = "addForm"
          type='text'
          name='company'
          placeHolder='Company'
          required
          onChange={(e) => this.setState({company: e.target.value})}
        />
        <p className = "label">Position</p>
        <input className = "addForm"
          type='text'
          name='position'
          placeHolder = 'Position'
          required
          onChange={(e) => this.setState({position: e.target.value})}
        />
        <br/>
        <p className = "label">Status</p>
        <select className = "addForm" value={this.state.status} onChange={(e) => this.setState({status: e.target.value})}>
              <option value="application">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="finalized">Finalized</option>
        </select>
        <br/>
        <NavLink to="/home" onClick = {() => this.handleSubmit()}>
          <button type="button" id="completed-task" className="addSubmit" >
            Next
          </button>
        </NavLink>
      </form>
      <div>
      {this.renderAdditional()}
      </div>
      </div>
    );
  }
}

export default EditJob;
