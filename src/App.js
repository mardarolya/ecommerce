import React from 'react';
import HomePage from './pages/home/home-page.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './shell/header/header.component.jsx';
import RegistrationPage from './pages/registration/registration-page.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/signin' component={RegistrationPage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
