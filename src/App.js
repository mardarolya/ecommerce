import React, { Component } from 'react';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/home/home-page.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './shell/header/header.component.jsx';
import RegistrationPage from './pages/registration/registration-page.component';
import { Route, Switch } from 'react-router-dom';
import { signOut, createUserProfileDocument } from './services/auth.service';
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
    this.authUnsubscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            user: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({
          user: null
        });
      }
    });
  }

  componentWillUnmount() {
    this.authUnsubscription();
  }

  handleSignOut = () => {
    signOut();
  };

  render() {
    return (
      <div>
        <Header user={this.state.user} handleSignOut={this.handleSignOut} />
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
