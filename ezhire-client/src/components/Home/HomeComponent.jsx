import React from 'react';
import './HomeComponent.css';
import { Link, NavLink } from 'react-router-dom';

function Home(){
    return(
        <div className="container">
            Welcome!
            <div className = "buttons">
                <NavLink to="/dashboard" className = "btn2" ><button className="btn2">Dashboard</button></NavLink>
                <div className="divider"/>
                <NavLink to="/taskList" className = "btn2"><button className="btn2">Task List</button></NavLink>
                <div className="divider"/>
                <NavLink to="/addJob" className = "btn2"><button className="btn2">Add Jobs</button></NavLink>
            </div>
        </div>
    )
}

export default Home;