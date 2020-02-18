import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './shell/header/header.component.jsx';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
