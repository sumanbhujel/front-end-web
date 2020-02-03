import React from 'react';
import '../css/form.css';

import {FormText} from 'reactstrap'


class SignUpForm extends React.Component {

    render() {
    
        return (
            <section>
                <form>
                    <h1>Sign Up</h1>
                    <fieldset>
                        <legend><span class="number">1</span>Your basic info</legend>
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
                        <input type="text"  name="mobilenumber" value={this.state.mobilenumber}
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