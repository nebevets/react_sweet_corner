import React from 'react';
import {convertToDollarsandCents} from '../../assets/helpers';

export default ({createdAt, id, itemCount, status, total}) => {
  return(
    <div className="order">
      <div className="id">{id}</div>
      <div className="createdAt">Placed: {createdAt}</div>
      <div className="itemCount">Items Ordered: {itemCount}</div>
      <div className="status">{status}</div>
      <div className="total">{convertToDollarsandCents(total)}</div>
    </div>
  );
}
