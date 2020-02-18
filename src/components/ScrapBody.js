import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './css/form.css';
import { Table } from 'reactstrap'; 

export default class ScrapBody extends Component {

    deleteData = () => {
        axios.delete('http://localhost:9000/api/scrap/' + this.props.id);
        alert('deleted');
        window.location.reload(false);
    }

    render() {
        return (
            <div className="App">
                <Table dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Scrap Type</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{this.props.scraptype}</td>
                            <td>{this.props.description}</td>
                            <td>{this.props.location}</td>
                            <td><NavLink to={"/editscrap/" + this.props.id}>Edit</NavLink>
                                <NavLink to={"/singledata/" + this.props.id}>View Info</NavLink>
                                <button onClick={this.deleteData}>Delete</button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>


        )
    }
}
