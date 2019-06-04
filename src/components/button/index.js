import './button.scss';
import React from 'react';

const Button = ({children, onClick, title, type='button'}) => {
  return(
    <button className="sweetButton" onClick={onClick} title={title} type={type}>
      {children}
    </button>
  );
};

export default Button;
