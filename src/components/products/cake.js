import React from 'react';
import ThumbNail from './thumbnail';
import {convertToDollarsandCents} from '../../assets/helpers';

export default ({caption, cost, name, thumbnail, pid, onClick}) => {
  return(
    <div className="cupCake" onClick={onClick}>
      <div className="name">{name}</div>
      <ThumbNail {...thumbnail} />
      <div className="cupCakeFooter">
        <div className="caption">{caption}</div>
        <div className="cost">{convertToDollarsandCents(cost)}</div>
      </div>
    </div>
  );
};
