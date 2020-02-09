import React, { Component } from 'react'
import axios from 'axios';
import '../css/form.css';

export default class SingleData extends Component {

    state = {
        scrap_data: []
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/scrap/" + this.props.match.params.id).then(res => {
            this.setState({ scrap_data: res.data });
        });
    }

    render() {
        return (
            <div className="teacher">
                Scrap Data by Id
                <p>{this.props.match.params.id}</p>
                <p>Scrap Type: {this.state.scrap_data.scrapType}</p>
                <p>Description: {this.state.scrap_data.description}</p>
                <p>Location: {this.state.scrap_data.location}</p>
            </div>
        )
    }
}

