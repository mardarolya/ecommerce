import React, { Component } from 'react';
import Input from 'shared/components/input/input.component';
import Button from 'shared/components/button/button.component';

import './signup.styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            type='email'
            name='displayName'
            label='Display Name'
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
          />

          <Input
            type='email'
            name='email'
            label='Email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />

          <Input
            type='password'
            name='password'
            value={this.state.password}
            label='Password'
            required
            handleChange={this.handleChange}
          />

          <Input
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            label='Confirm Password'
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
