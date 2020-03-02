import { CartActionTypes } from './cart.types';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
