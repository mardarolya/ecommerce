import React from 'react';

import './button.styles.scss';

const Button = ({ label, google = false, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${google ? 'google' : ''}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
