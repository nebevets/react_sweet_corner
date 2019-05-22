import './button.scss';
import React from 'react';

const Button = ({children, onClick, title}) => {
  return(
    <span className="sweetButton" onClick={onClick} title={title}>
      {children}
    </span>
  );
};

export default Button;
