import React, { Component } from 'react';
import "./AddJob.css";
import { withTracker } from 'meteor/react-meteor-data';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Jobs } from '../../api/jobs.js';

class EditInterview extends Component{
  state = {
    date: new Date(),
    location: "",
    notes: "",
    contact: ""
  }

  handleDateChange = date => {
    this.setState({ date: date });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const date = this.state.date;
    const location = this.state.location;
    const notes = this.state.notes;
    const contact = this.state.contact;

    // edit the corresponding job
    Jobs.update(this.props._id, {
      $set: { 	date: date,
        location: location,
        notes: notes,
        contact: contact }
      });
    }


    render(){
      if(this.props.loading){
        return(<div>loading</div>)
      }
      return(
        <div className = "addJob">
        <h2 className="pageHeader">Edit Interview</h2>
        <form>

        <p className = "label">Date</p>
        <DatePicker selected={this.state.date} onChange={this.handleDateChange}/>
        <br/>


        
        <p className="label">Location</p>
        <input className="addForm"
        type='text'
        name='location'
        placeHolders=""
        onChange={(e) => this.setState({location: e.target.value})}/>

             <p className = "label">Date</p>
                <DatePicker selected={this.state.date} onChange={this.handleDateChange}/>
                
                

                <p className="label">Location</p>
                <input className="addForm"
                type='text'
                name='location'
                placeHolders=""
                onChange={(e) => this.setState({location: e.target.value})}/>
				
                <p className="label">Notes</p>
                <input className = "addForm"
                type='text'
                name='notes'
                placeHolders=""
                onChange={(e) => this.setState({notes: e.target.value})}
                />

                <p className="label">Contact</p>
                <input className="addForm"
                type='text'
                name='contacts'
                placeHolders=""
                onChange={(e) => this.setState({contact: e.target.value})}
                />
                <br/>
				<button type="submit" id="completed-task" className="addSubmit" onClick={() =>this.handleSubmit}>Next</button>
				
            </form>
        </div>
      );
    }
  }

  export default withTracker(() => {
    return {
      jobs: Jobs.find({})
    }
  })(EditInterview);
