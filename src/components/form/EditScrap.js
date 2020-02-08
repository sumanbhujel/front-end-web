import React, { Component } from 'react'
import '../css/form.css';
import axios from 'axios';

export default class EditScrap extends Component {

    state = {
        scraptype: '',
        description: '',
        location: '',
        user_data: [],
        isUpdateSuccess: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/scrap/" + this.props.match.params.id).then(res => {
            this.setState({
                scraptype: res.data.scrapType,
                description: res.data.description,
                location: res.data.location,
                user_data: res.data
            });
        });
    }

    updateData = () => {
        const data = {
            scrapType: this.state.scraptype,
            description: this.state.description,
            location: this.state.location,

        }
        console.log(data);

        axios.put("http://localhost:9000/api/scrap/" + this.props.match.params.id, data);
    }

    render() {
        return (
            <div className="App">

                <form>
                    <h1>Update Scrap</h1>
                    <fieldset>
                        <label for="scraptype">Scraptype:</label>
                        <input type="text" name="scraptype" value={this.state.user_data.scrapType} onChange={this.handleChange} required />

                        <label for="text">Description:</label>
                        <input type="text" name="description" value={this.state.user_data.description} onChange={this.handleChange} required />

                        <label for="text">Location:</label>
                        <input type="text" name="location" value={this.state.user_data.location} onChange={this.handleChange} required />
                    </fieldset>

                    <button className="button1" onClick={this.updateData}>Update</button>
                </form>

            </div>
        )
    }
}
