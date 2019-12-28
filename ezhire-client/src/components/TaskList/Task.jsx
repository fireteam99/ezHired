import React, { Component } from 'react';
import './TaskList.css';

export default class Task extends Component {
  render() {
    return(
      <div className="task">
      {this.props.date}- <strong>{this.props.company} ({this.props.position}):</strong> {this.props.task}
        <hr/>
      </div>
    );
  }
}
