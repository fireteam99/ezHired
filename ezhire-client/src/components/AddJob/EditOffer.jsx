import React, { Component } from 'react';
import "./AddJob.css";
import { withTracker } from 'meteor/react-meteor-data';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Jobs } from '../../api/jobs.js';

class EditOffer extends Component {
    state = {
        interval: 'hourly',
        amount: 0,
        benefits: "",
        deadline: new Date()
    }

    handleDateChange = date => {
        this.setState({ deadline: date });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const compensation = {
            deadline: this.state.deadline,
            link: this.state.link
        }
        const benefits = this.state.benefits;
        const deadline = this.state.deadline;
        // edit the corresponding job
        Jobs.update(this.props._id, {
            $set: {
                compensation: compensation,
                benefits: benefits,
                deadline: deadline
            }
        });
    }


    render() {
        if (this.props.loading) {
            return (<div>loading</div>)
        }
        return (
            <div className="addJob">
                <h2 className="pageHeader">Edit Offer</h2>
                <form>
                    <p className="label">Compensation</p>
                    <select className="addForm" value={this.state.interval} onChange={(e) => this.setState({ interval: e.target.value })}>
                        <option value='hourly'>Hourly</option>
                        <option value='yearly'>Yearly</option>
                    </select>

                    <p className="label">Amount</p>
                    <input className="addForm"
                        type='number'
                        name='amount'
                        placeHolder={0}
                        required
                        onChange={(e) => this.setState({ amount: e.target.value })}
                    />

                    <p className="label">Benefits</p>
                    <input className="addForm"
                        type='text'
                        name='benefits'
                        placeHolders=""
                        required
                        onChange={(e) => this.setState({ benefits: e.target.value })}
                    />

                    <p className="label">Deadline</p>
                    <DatePicker selected={this.state.deadline} onChange={this.handleDateChange} />
                    <br />
                    <button type="submit" id="completed-task" className="addSubmit" onClick={() => this.handleSubmit}>Next</button>

                </form>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        jobs: Jobs.find({})
    }
})(EditOffer);
