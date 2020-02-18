import React, { Component } from 'react';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/home/home-page.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './shell/header/header.component.jsx';
import RegistrationPage from './pages/registration/registration-page.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  authUnsubscription = null;

  componentDidMount() {
    this.authUnsubscription = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    this.authUnsubscription();
  }

  handleSignup = () => {
    auth.signOut();
  };

  render() {
    return (
      <div>
        <Header user={this.state.user} handleSignup={this.handleSignup} />
        <Switch>
          <Route exact path='/signin' component={RegistrationPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}
export default App;
