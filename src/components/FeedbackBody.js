import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './css/form.css';
import { Table } from 'reactstrap';

export default class FeedbackBody extends Component {

    deleteData = () => {
        axios.delete('http://localhost:9000/api/feedback/' + this.props.id);
        alert('deleted');
        window.location.reload(false);
    }

    render() {
        return (
            <div className="App">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Email ID</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.emailid}</td>
                            <td>{this.props.message}</td>
                            <td><NavLink to={"/editfeedback/" + this.props.id}>Edit</NavLink>
                                <button onClick={this.deleteData}>Delete</button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
