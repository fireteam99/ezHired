import React, { Component, useState } from 'react';
import './Dashboard.css';
import {JOBS} from './jobtest';
import Card from './Card.jsx';
import Column from './Column.jsx';
import { withTracker } from 'meteor/react-meteor-data';

import { Jobs } from '../../api/jobs.js';


class Dashboard extends Component {

  renderCards = (jobs) => (
    jobs.map(job => <Card company={job.company.name} position={job.position} description={job.description}/>)
  )

  render() {
    if (this.props.loading) {
      return <div>loading</div>
    } else {
      const applicationJobs = this.props.jobs.filter(j => j.status === 'application');
      const appliedJobs = this.props.jobs.filter(j => j.status === 'applied');
      const finalizedJobs = this.props.jobs.filter(j => j.status === 'finalized');
      console.log(applicationJobs)
      return(
        <div className="dashboard">
          <h2 className="pageHeader">DASHBOARD</h2>
          <Column title="to apply">
              {this.renderCards(applicationJobs)}
          </Column>
          <Column title="applied for">
            {this.renderCards(appliedJobs)}
          </Column>
          <Column title="completed">
            {this.renderCards(finalizedJobs)}
          </Column>

        </div>
      );
    }
  }
}

export default withTracker(() => {
  return {
    jobs: Jobs.find({}).fetch(),
  }
})(Dashboard);
