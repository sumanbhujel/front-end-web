import React, { Component } from 'react'
import { Button, Navbar, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/')
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <Navbar color='dark' dark expand='md'>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink href="/loginform">Login Form</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signupform">Sign Up Form</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/addscrap">Add Scrap</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/viewscrap">View Scrap</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/addfeedback">Give Feedback</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/viewfeedback">View Feedback</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button color='warning' onClick={this.handleLogout}> Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Navbar)

