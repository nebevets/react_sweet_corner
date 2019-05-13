import React from 'react';
import ThumbNail from './thumbnail';

const convertToDollarsandCents = (cents) => {
  const dollarsAndCents = cents/100;
  return `$${dollarsAndCents.toFixed(2)}`
}

export default ({caption, cost, name, thumbnail}) => {
  return(
    <div className='cupCake'>
      <div className="name">{name}</div>
      <ThumbNail {...thumbnail} />
      <div className="caption">{caption}</div>
      <div className="cost">{convertToDollarsandCents(cost)}</div>
    </div>
  );
};
