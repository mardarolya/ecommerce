import React from 'react';
import Button from 'shared/components/button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <Button label='Go to checkout' />
    </div>
  );
};

export default CartDropdown;
