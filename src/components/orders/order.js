import React from 'react';
import {convertToDollarsandCents} from '../../assets/helpers';

export default ({createdAt, id, itemCount, status, total, onClick}) => {
  const orderDate = new Date(createdAt).toLocaleDateString();
  return(
    <div className="order" title="Click for Details..." onClick={onClick}>
      <div className="id">
        <span className="leftSpan">Order ID:</span>
        <span className="rightSpan">{id}</span>
      </div>
      <div className="createdAt">
        <span className="leftSpan">Placed:</span>
        <span className="rightSpan">{orderDate}</span>
      </div>
      <div className="itemCount">
        <span className="leftSpan">Items Ordered:</span>
        <span className="rightSpan">{itemCount}</span>
      </div>
      <div className="status">
        <span className="leftSpan">Status:</span>
        <span className="rightSpan">{status}</span>
      </div>
      <div className="total">
        <span className="leftSpan">Total:</span>
        <span className="rightSpan">{convertToDollarsandCents(total)}</span>
      </div>
    </div>
  );
}
