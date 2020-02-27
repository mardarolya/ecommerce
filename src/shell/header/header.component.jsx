import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ user, handleSignOut }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          Shop
        </Link>
        <Link to='/shop' className='option'>
          Contact
        </Link>
        {user ? (
          <button type='button' className='option' onClick={handleSignOut}>
            Sign out
          </button>
        ) : (
          <Link to='/signin' className='option'>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;