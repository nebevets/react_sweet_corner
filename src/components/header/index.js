import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';
import headerImage from '../../assets/images/header.png';
import logoImage from '../../assets/images/logo.png';

const Header = () => {
  return(
    <div className="header center">
      <img src={headerImage} alt="topBorder" />
      <ul className="headerNav">
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about us</Link></li>
        <li><Link to="/services">services</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
      <img src={logoImage} alt="logo"/>
      <div className="motto">
        We deliver cupcakes for the important events in your life!
      </div>
    </div>
  );
}

export default Header;
