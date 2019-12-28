import React, { Component } from 'react';
import './TaskList.css';
import Task from './Task.jsx';

export default class TaskList extends Component {
  render() {
    return(
      <div className="page">
        <h2 className="pageHeader">TASKLIST</h2>
          <div className="column taskList">
            <div className = "columnHeader">
              Today
            </div>
            <Task company = "Wayfair" position="devops" task = "Coding Challenge" date = "10/14/19"/>
          </div>
          <div className="column taskList">
            <div className = "columnHeader">
              Tomorrow
            </div>
          </div>
          <div className="column taskList">
            <div className = "columnHeader">
              This Week
            </div>
          </div>
      </div>
    );
  }
}
