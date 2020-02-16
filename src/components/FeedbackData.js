import React, { Component } from 'react'
import axios from 'axios';
import FeedbackBody from './FeedbackBody';

export default class FeedbackData extends Component {

    state = {
        mydata: []
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/feedback").then(res => {
            this.setState({ mydata: res.data });
        });
    }

    render() {
        const mydata11 = this.state.mydata.map(feedbackList => {
            return <FeedbackBody emailid={feedbackList.emailId} message={feedbackList.message}  id={feedbackList._id} />
        });

        return (
            <div>
                {mydata11}
            </div>
        )
    }
}
