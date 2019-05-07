import React from 'react';
import './footer.scss';
import dots from '../../assets/images/dots-footer.png';
import phone from '../../assets/images/phone.png';

const Footer = () => {
  return(
    <div className="footer">
      <div className="dots">
        <img src={dots} alt="dots" />
      </div>
      <div className="copy">
        Copyright &copy; {new Date().getFullYear()} Sweet Corner. All rights reserved.
      </div>
      <div className="phone">
        <img src={phone} alt="phone" />
        800 264 2099
      </div>
    </div>
  );
}

export default Footer;
