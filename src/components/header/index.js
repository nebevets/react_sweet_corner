import './header.scss';
import React from 'react';
import Nav from '../nav';
import headerImage from '../../assets/images/header.png';
import logoImage from '../../assets/images/logo.png';

const Header = () => {
  return(
    <div className="header center">
      <img src={headerImage} alt="topBorder" />
      <Nav />
      <img src={logoImage} alt="logo"/>
      <div className="motto">
        We deliver cupcakes for the important events in your life!
      </div>
    </div>
  );
}

export default Header;
