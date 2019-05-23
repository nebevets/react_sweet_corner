import './cart-header.scss';
import React from 'react';


const CartHeader = () => {
  return(
    <div className="cartHeader">
      <div className="name">
        Cakes
      </div>
      <div className="quantity">
        Quantities
      </div>
      <div className="total">
        Totals
      </div>
    </div>
  );
}

export default CartHeader;
