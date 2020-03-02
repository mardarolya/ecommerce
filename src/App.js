import React, { Component } from 'react';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/home/home-page.component';
import ShopPage from './pages/shop/shop-page.component';
import HeaderContainer from './shell/header/header.container';
import RegistrationPage from './pages/registration/registration-page.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { signOut, createUserProfileDocument } from './services/auth.service';

import './App.css';

class App extends Component {
  authUnsubscription = null;

  componentDidMount() {
    const { setUser } = this.props;
    this.authUnsubscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

        return;
      }

      setUser(null);
    });
  }

  componentWillUnmount() {
    this.authUnsubscription();
  }

  handleSignOut = () => {
    signOut();
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <HeaderContainer handleSignOut={this.handleSignOut} />
        <Switch>
          <Route
            exact
            path='/signin'
            render={() => (user ? <Redirect to='/' /> : <RegistrationPage />)}
          />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}
export default App;
