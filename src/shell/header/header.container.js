import { connect } from 'react-redux';
import Header from './header.component';

const mapStateToProps = state => ({
  user: state.user.currentUser
});

const HeaderContainer = connect(mapStateToProps);

export default HeaderContainer(Header);
