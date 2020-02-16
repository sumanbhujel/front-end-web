import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './css/form.css';

export default class FeedbackBody extends Component {

    deleteData = () => {
        axios.delete('http://localhost:9000/api/feedback/' + this.props.id);
        alert('deleted');
    }

    render() {
        return (
            <div>
                <div className="box">
                    <h1>{this.props.emailid}</h1>
                    <h1>{this.props.message}</h1>
                    <p>
                        <NavLink to={"/feedbackudate/" + this.props.id}>Update</NavLink>
                        <NavLink to={"/singledata/" + this.props.id}>View Infor</NavLink>
                        <button onClick={this.deleteData}>Delete</button></p>
                </div>

            </div>
        )
    }
}
