import { connect } from 'react-redux';
import * as actions from './redux/user/user.actions';
import App from './App';

const mapStateToProps = ({ user }) => ({
  user: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(actions.setCurrentUser(user))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
