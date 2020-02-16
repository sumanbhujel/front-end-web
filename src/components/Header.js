import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="App">
                <p>This is nav header</p>
                <div>
                    <NavLink to="/loginform">Login Form</NavLink>
                    <NavLink to="/signupform">Sign Up Form</NavLink>
                    <NavLink to="/addscrap">Add Scrap</NavLink>
                    <NavLink to="/viewscrap">View Scrap</NavLink>
                    <NavLink to="/addfeedback">Give Feedback</NavLink>
                    <NavLink to="/viewfeedback">View Feedback</NavLink>
                    <Button onClick={this.handleLogout}> Logout</Button>
                </div>
            </div>
        )
    }
}
