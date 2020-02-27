const initialState = {
  currentUser: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

export default userReducer;