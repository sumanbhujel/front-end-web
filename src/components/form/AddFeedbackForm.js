import React, { Component } from 'react'
import '../css/form.css';
import axios from 'axios';

export default class AddFeedbackForm extends Component {

    state = {
        emailid: '',
        message: '',
        isAddSuccess: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    addFeedback = () => {
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

        if (this.state.isAddSuccess === true) {
            alert("Detail Added Successfully");
        }
        return (
            <div>
                <form>
                    <h1>Give Feedback</h1>
                    <fieldset>
                        <label for="emailid">Email:</label>
                        <input type="text" name="emailid" value={this.state.emailid} onChange={this.handleChange} required />

                        <label for="text">Message:</label>
                        <input type="text" name="message" value={this.state.message} onChange={this.handleChange} required />
                    </fieldset>
                    <button className="button1" onClick={this.addFeedback}>Send Feedback</button>
                </form>
            </div>
        )
    }
}
