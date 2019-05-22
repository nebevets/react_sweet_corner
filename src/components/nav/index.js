import './nav.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import ShoppingCart from './shopping_cart';
import User from './user';

const Nav = () => {
  return(
    <ul className="main-nav">
      <li className="navItem"><Link to="/">home</Link></li>
      <li className="navItem"><Link to="/products">products</Link></li>
      <li className="navItem"><Link to="/services">services</Link></li>
      <li className="navItem"><Link to="/about">about us</Link></li>
      <li className="navItem"><Link to="/contact">contact</Link></li>
      <ShoppingCart/>
      <User/>
    </ul>
  );
}

export default Nav;
