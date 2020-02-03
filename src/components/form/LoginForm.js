import React from 'react';
import '../css/form.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import {FormText} from 'reactstrap'

class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        isloggedIn: false

    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    UserLogin = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:9000/api/login", data)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                this.setState({ isloggedIn: true }).catch((err) => console.log(err.response))
                this.setState({ email: '', password: '' })

            });
    }

    render() {
        if (this.state.isloggedIn === true) {
            return <Redirect to='/userdashboard' />
        } 
            return (<section>
                <form>
                    <h1>Login Form</h1>
                    <fieldset>
                        <label for="email">Email:</label>
                        <input type="email" name="email" value={this.state.email}
                            onChange={this.handleChange} required />

                        <label for="password">Password:</label>
                        <input type="password" name="password" value={this.state.password}
                            onChange={this.handleChange} required />
                    </fieldset>

                    <button className="button1" onClick={this.UserLogin}>Login</button>
                    <FormText>Not yet a user? <Link to='/signupform'> Sign Up here!</Link></FormText>
                </form>
            </section>

            );
    


    }
}

export default LoginForm;


