import React from 'react';
import CollectionItemContainer from '../collection-item/collection-item.container';
import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.slice(0, 4).map(item => (
          <CollectionItemContainer key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
