import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from 'pages/cart/components/cart-icon/cart-icon.component';
import CartDropdown from 'pages/cart/components/cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdownBasket: false
    };
  }

  handleToogleBasket = () => {
    this.setState(({ showDropdownBasket }) => ({
      showDropdownBasket: !showDropdownBasket
    }));
  };

  render() {
    const { user, handleSignOut } = this.props;
    const { showDropdownBasket } = this.state;
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
          <CartIcon handleClick={this.handleToogleBasket} />
        </div>
        {showDropdownBasket ? <CartDropdown /> : null}
      </div>
    );
  }
}

export default Header;
