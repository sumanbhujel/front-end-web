import React, { Component } from 'react'
import '../css/form.css';
import axios from 'axios';

export default class EditScrap extends Component {

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
