import React, { Component } from 'react'
import '../css/form.css';

export default class AddScrapForm extends Component {

    state = {
        emailid: '',
        message: '',
        location: '',
        isAddSuccess: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    addScrap = () => {
        const data = {

            emailid: this.state.emailid,
            message: this.state.message,

        }
        console.log(data);

        axios.post("http://localhost:9000/api/feedback", data).then((response) => {

            this.setState({
                emailid: '',
                message: '',
                isAddSuccess: true
            });
        }).catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="App">

                <form>
                    <h1>Add Scrap</h1>
                    <fieldset>
                        <label for="emailid">Email:</label>
                        <input type="text" name="emailid" value={this.state.emailid} onChange={this.handleChange} required />

                        <label for="text">Message:</label>
                        <input type="text" name="message" value={this.state.message} onChange={this.handleChange} required />

                    </fieldset>

                    <button className="button1">Send Feedback</button>
                </form>

            </div>
        )
    }
}
