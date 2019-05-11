import React from 'react';
import './contact.scss';
import upDots from '../../assets/images/up-dots.png';
import ContactForm from '../contact-form';
import Schedule from '../schedule';

const Contact = () => {
  return(
    <div className="contactUs">
      <div className="contactInfo">
        <h3>
          Contact us today!
        </h3>
        <p>
          Talk cupcakes to us! At Sweet Corner we love hearing from our customers. Send your questions, comments and flavor suggestions to:
        </p>
        <p className="email">
          <a href="mailto:office@sweetcorner.com">office@sweetcorner.com</a>
        </p>
        <p>Our expert bakers are waiting to create a unique cupcake bursting with freshness and flavor just for you. Our management team are also waiting for their next event organize.</p>
        <img src={upDots} alt="dots" />
      </div>
      <ContactForm />
      <Schedule />
    </div>
  );
}

export default Contact;
