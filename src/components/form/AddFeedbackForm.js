import React, { Component } from 'react'
import '../css/form.css';

export default class AddScrapForm extends Component {

    render() {
        return (
            <div className="App">
            
                <form>
                    <h1>Add Scrap</h1>
                    <fieldset>
                        <label for="scraptype">Email:</label>
                        <input type="text" name="scraptype" value={this.state.emailid} onChange={this.handleChange} required />

                        <label for="text">Message:</label>
                        <input type="text" name="message" value={this.state.message} onChange={this.handleChange} required />

                    </fieldset>

                    <button className="button1">Send Feedback</button>
                </form>

            </div>
        )
    }
}
