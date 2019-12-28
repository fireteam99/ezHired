import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Link, NavLink} from "react-router-dom";
import { faHome, listAlt, faCalendarPlus, faSearch } from '@fortawesome/fontawesome-free-solid'
import './app.css';

export default class Header extends Component {
  state = {term: ''};

  render() {
    return(
      <div className = "header">
        <NavLink to="/home"><div className = "logo"><strong>EZ</strong>HIRED</div></NavLink>
        <NavLink to="/dashboard" className = "btn" activeClassName="activeBtn"><FontAwesomeIcon icon="home"/></NavLink>
        <NavLink to="/taskList" className = "btn" activeClassName="activeBtn"><FontAwesomeIcon icon="list-alt"/></NavLink>
        <NavLink to="/addJob" className = "btn" activeClassName="activeBtn"><FontAwesomeIcon icon="calendar-plus"/></NavLink>
        <form className = "searchForm" onSubmit={this.handleSubmit}>
          <input className = "searchBar" type="text"  value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
          <button type="submit" id="completed-task" className="searchEnter">
              <FontAwesomeIcon icon="search"/>
        </button>
        </form>
      </div>
    );
  }
}
