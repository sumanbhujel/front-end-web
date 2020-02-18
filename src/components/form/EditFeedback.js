import React, { Component } from 'react'
import '../css/form.css';
import axios from 'axios';

export default class EditFeedback extends Component {

    state = {
        emailid: '',
        message: '',
        user_data: [],
        isUpdateSuccess: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/feedback/" + this.props.match.params.id).then(res => {
            this.setState({
                emailid: res.data.emailid,
                message: res.data.message,
                user_data: res.data
            });
        });
    }

    updateData = () => {
        const data = {
            emailId: this.state.emailid,
            message: this.state.message,

        }
        console.log(data);

        axios.put("http://localhost:9000/api/feedback/" + this.props.match.params.id, data).then((response) => {
            this.setState({ 
                isUpdateSuccess: true
            });
        }).catch((err) => console.log(err));;
    }

    render() {
        if (this.state.isUpdateSuccess === true) {
            alert(" Successfully Updated");
        }
        return (
            <div className="App">

                <form>
                    <h1>Edit Feedback</h1>
                    <fieldset>
                        <label for="emailid">Email:</label>
                        <input type="text" name="emailid" value={this.state.user_data.emailid} onChange={this.handleChange} required />

                        <label for="text">message:</label>
                        <input type="text" name="message" value={this.state.user_data.message} onChange={this.handleChange} required />

                    </fieldset>

                    <button className="button1" onClick={this.updateData}>Update</button>
                </form>

            </div>
        )
    }
}
