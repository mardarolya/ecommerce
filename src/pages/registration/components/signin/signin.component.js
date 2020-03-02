import React, { Component } from 'react';
import { signIn, signInWithGoogle } from 'services/auth.service';
import Input from 'shared/components/input/input.component';
import Button from 'shared/components/button/button.component';

import './signin.styles.scss';

const initialState = {
  email: '',
  password: ''
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleSubmit = async event => {
    event.preventDefault();

    await signIn(this.state);
    this.setState(initialState);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSighInWitGoogle = async () => {
    await signInWithGoogle();
    this.setState(initialState);
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
            onClick={this.handleSighInWitGoogle}
          ></Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
