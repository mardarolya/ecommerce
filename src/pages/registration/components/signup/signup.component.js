import React, { Component } from 'react';
import Input from 'shared/components/input/input.component';
import Button from 'shared/components/button/button.component';
import { signUp } from 'services/auth.service.js';

import './signup.styles.scss';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('passwords dont match');
      return;
    }
    await signUp(this.state);

    this.setState(initialState);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            type='text'
            name='displayName'
            label='Display Name'
            value={displayName}
            required
            handleChange={this.handleChange}
          />

          <Input
            type='email'
            name='email'
            label='Email'
            value={email}
            required
            handleChange={this.handleChange}
          />

          <Input
            type='password'
            name='password'
            value={password}
            label='Password'
            minLength='6'
            required
            handleChange={this.handleChange}
          />

          <Input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            minLength='6'
            required
            handleChange={this.handleChange}
          />

          <Button type='submit' label='Sign Up'></Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
