import React, { Component } from 'react'
import axios from 'axios';
import ScrapBody from './ScrapBody';

export default class ScrapData extends Component {

    state = {
        mydata: []
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/scrap").then(res => {
            this.setState({ mydata: res.data });
        });
    }

    render() {
        const mydata11 = this.state.mydata.map(scrapList => {
            return <ScrapBody scraptype={scrapList.scrapType} description={scrapList.description} 
            location={scrapList.location} id={scrapList._id} />
        });

        return (
            <div>
                {mydata11}
            </div>
        )
    }
}
