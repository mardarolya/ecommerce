import React, { Component } from 'react';
import { signInWithGoogle } from 'firebase/firebase.utils';
import Input from 'shared/components/input/input.component';
import Button from 'shared/components/button/button.component';

import './signin.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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

          <Button type='submit' label='Sign In'></Button>
          <Button
            type='button'
            google={true}
            label='Sign In With Google'
            onClick={signInWithGoogle}
          ></Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
