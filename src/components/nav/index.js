import React from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return(
    <ul className="main-nav">
      <li><Link to="/">home</Link></li>
      <li><Link to="/products">products</Link></li>
      <li><Link to="/services">services</Link></li>
      <li><Link to="/about">about us</Link></li>
      <li><Link to="/contact">contact</Link></li>
      <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
    </ul>
  );
}

export default Nav;
