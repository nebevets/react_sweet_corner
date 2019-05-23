import './cart-footer.scss';
import React from 'react';
import Button from '../../button';

const CartFooter = ({total}) => {
  return(
    <div className="cartFooter">
      <div className="total">
        Cart Total: {total}
      </div>
      <div className="checkOut">
        <Button onClick={console.log('you clicked me')} title="Check out...">
          <span>Check Out </span>
          <span className="material-icons">shopping_cart</span>
        </Button>
      </div>
    </div>
  );
}

export default CartFooter;
