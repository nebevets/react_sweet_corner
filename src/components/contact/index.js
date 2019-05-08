import React from 'react';
import './contact.scss';
import upDots from '../../assets/images/up-dots.png';
import ContactForm from '../contact-form';

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
      <div className="schedule">
        <h4 className="">For phone orders, our work schedule is:</h4>
        <div className="dayTime">
          <span>Monday</span><span>09:00 - 17:00</span>
        </div>
        <div className="dayTime">
          <span>Tuesday</span><span>09:00 - 17:00</span>
        </div>
        <div className="dayTime">
          <span>Wednesday</span><span>09:00 - 19:00</span>
        </div>
        <div className="dayTime">
          <span>Thursday</span><span>09:00 - 19:00</span>
        </div>
        <div className="dayTime">
          <span>Friday</span><span>09:00 - 21:00</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
