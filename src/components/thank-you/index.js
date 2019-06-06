import React from 'react';
import {Link} from 'react-router-dom';

const ThankYou = props => {
  return(
    <div className="thankYou">
      <h2>Thank you for your order!</h2>
      <h3>Important: </h3>
      <div>Your order number is: {props.match.params.order_id}</div>
      <div>To check your <Link to="/guest/order-status">order status</Link>, supply the email name you used when checking out and this order number.</div>
      <div>We appreciate your business and please feel free to <Link to="/contact">contact us</Link> for any additional questions or concerns.</div>
    </div>
  );
};

export default ThankYou;
