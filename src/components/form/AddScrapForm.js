import React, { Component } from 'react'
import '../css/form.css';


export default class AddScrapForm extends Component {

    render() {
        return (
            <div className="App">
            
                <form>
                    <h1>Add Scrap</h1>
                    <fieldset>
                        <label for="scraptype">Scraptype:</label>
                        <input type="text" name="scraptype" value={this.state.scraptype} onChange={this.handleChange} required />

                        <label for="text">Description:</label>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} required />

                        <label for="text">Location:</label>
                        <input type="text"name="location" value={this.state.location}  onChange={this.handleChange} required />
                    </fieldset>

                    <button className="button1" onClick={this.addScrap}>Add</button>
                </form>

            </div>
        )
    }
}
