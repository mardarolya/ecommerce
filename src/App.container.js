import { connect } from 'react-redux';
import * as actions from './redux/user/user.actions';
import App from './App';

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(actions.setCurrentUser(user))
});

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;
