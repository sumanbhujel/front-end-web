import React, { Component } from 'react'
import UserHeader from './UserHeader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './css/form.css';

export default class ScrapBody extends Component {

    deleteData = () => {
        axios.delete('http://localhost:9000/api/scrap/' + this.props.id);
        alert('deleted');
    }

    render() {
        return (
            <div>
                <UserHeader />
                <div className="box">

                    <h1>{this.props.scraptype}</h1>
                    <h1>{this.props.description}</h1>
                    <h1>{this.props.location}</h1>
                    <p>
                        <NavLink to={"/scrapupdate/" + this.props.id}>Update</NavLink>
                        <NavLink to={"/singledata/" + this.props.id}>View Infor</NavLink>

                        <button onClick={this.deleteData}>Delete</button></p>
                </div>

            </div>
        )
    }
}
