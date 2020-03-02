import React, { Component } from 'react';
import Button from 'shared/components/button/button.component';

import './collection-item.styles.scss';

class CollectionItem extends Component {
  handleAddItem = () => {
    const { addItem, ...item } = this.props;
    this.props.addItem(item);
  };

  render() {
    const { name, price, imageUrl } = this.props;
    return (
      <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >
          <div className='add-button'>
            <Button label='Add to cart' inverted onClick={this.handleAddItem} />
          </div>
        </div>

        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
      </div>
    );
  }
}

export default CollectionItem;
