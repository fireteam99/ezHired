import React, { Component } from 'react';
import './Dashboard.css';

export default class Column extends Component {
  render() {
    return(
      <div className="column">
        <div className = "columnHeader">
          {this.props.title}
        </div>
        {this.props.children}
      </div>
    );
  }
}
