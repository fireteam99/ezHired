import React, { Component } from 'react';
import './Dashboard.css';
import { faPenSquare } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Card extends Component {
  render() {
    return(
      <div>
      <div className="card topCard">
        <div className="topLeft">
          <div className = "cardCompany">
            {this.props.company}
          </div>
          <div className = "cardPosition">
            {this.props.position}
          </div>
        </div>
      </div>
      <div className="card bottomCard">
        <div className = "edit">
          <FontAwesomeIcon icon="pen-square"/>
        </div>
        {this.props.description}
      </div>
      </div>
    );
  }
}
