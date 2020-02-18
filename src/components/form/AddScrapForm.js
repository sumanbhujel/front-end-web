import React, { Component } from 'react'
import '../css/form.css';
import axios from 'axios';

export default class AddScrapForm extends Component {

    state = {
        //image: 'image',
        scraptype: '',
        description: '',
        location: '',
        // userid: '123',
        isAddSuccess: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    addScrap = () => {
        const data = {
            // image:this.state.image,
            scrapType: this.state.scraptype,
            description: this.state.description,
            location: this.state.location,
            //userId:this.state.userid,
        }
        console.log(data);

        axios.post("http://localhost:9000/api/scrap", data).then((response) => {

            this.setState({
                scraptype: '',
                description: '',
                location: '',
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
                    <h1>Add Scrap</h1>
                    <fieldset>
                        <label for="scraptype">Scraptype:</label>
                        <input type="text" name="scraptype" value={this.state.scraptype} onChange={this.handleChange} required />

                        <label for="text">Description:</label>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} required />

                        <label for="text">Location:</label>
                        <input type="text" name="location" value={this.state.location} onChange={this.handleChange} required />
                    </fieldset>

                    <button className="button1" onClick={this.addScrap}>Add</button>
                </form>

            </div>
        )
    }
}
