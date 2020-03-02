import React from 'react';
import { ReactComponent as ShoppingIcon } from 'assets/bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ count = 0, handleClick }) => {
  return (
    <div className='cart-icon' onClick={handleClick}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{count}</span>
    </div>
  );
};

export default CartIcon;
