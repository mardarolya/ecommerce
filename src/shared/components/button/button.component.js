import React from 'react';

import './button.styles.scss';

const Button = ({ label, google = false, inverted, ...otherProps }) => {
  return (
    <button
      className={`custom-button 
      ${google ? 'google' : ''}
      ${inverted ? 'inverted' : ''}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
