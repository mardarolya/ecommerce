import { connect } from 'react-redux';
import * as actions from 'redux/cart/cart.actions';
import CollectionItem from './collection-item.component';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(actions.addItem(item))
});

const CollectionItemContainer = connect(
  null,
  mapDispatchToProps
)(CollectionItem);

export default CollectionItemContainer;
