import React from 'react';
import '../css/form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FormText} from 'reactstrap'

class SignUpForm extends React.Component {

    state = {
        fullname: '',
        address: '',
        email: '',
        mobilenumber: '',
        password: '',
        gender: '',
        isRegistered: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    registerData = () => {
        const data = {
            fullName: this.state.fullname,
            address: this.state.address,
            email: this.state.email,
            mobileNumber: this.state.mobilenumber,
            password: this.state.password,
            gender: this.state.gender
        }
        console.log(data);

        axios.post("http://localhost:9000/api/signup", data).then((response) => {
            
            this.setState({
                fullname: '',
                address: '',
                email: '',
                mobilenumber: '',
                password: '',
                gender: '',
                isRegistered: true
            });
        }).catch((err) => console.log(err));

    }

    render() {
        if (this.state.isRegistered === true) {
            alert(" Successfully Registered");
        }
    
        return (
            <section>
                <form>
                    <h1>Registration</h1>
                    <fieldset>
                        <label for="name">Name:</label>
                        <input type="text" name="fullname" value={this.state.fullname}
                            onChange={this.handleChange} required />

                        <label for="address">Address:</label>
                        <input type="text" name="address" value={this.state.address}
                            onChange={this.handleChange} required />

                        <label for="email">Email:</label>
                        <input type="email" name="email"value={this.state.email}
                            onChange={this.handleChange} required />

                        <label for="mobilenumber">Mobile Number:</label>
                        <input type="number"  name="mobilenumber" value={this.state.mobilenumber}
                            onChange={this.handleChange} required />

                        <label for="password">Password:</label>
                        <input type="password"  name="password" value={this.state.password}
                            onChange={this.handleChange} required />

                        <label>Gender:</label>
                        <input type="text"  name="gender" value={this.state.gender}
                            onChange={this.handleChange} required />

                    </fieldset>

                    <button className="button1" onClick={this.registerData}>Sign Up</button>
                    <FormText>Already a user? <Link to='/loginform'>Login here!</Link></FormText>
                </form>
            </section>
        );
    }

}

export default SignUpForm;