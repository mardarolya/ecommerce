import { connect } from 'react-redux';
import CartIcon from './cart-icon.component';

const mapStateToProps = ({ cart }) => ({
  count: cart.cartItems.length
});

const CartIconContainer = connect(mapStateToProps)(CartIcon);

export default CartIconContainer;
