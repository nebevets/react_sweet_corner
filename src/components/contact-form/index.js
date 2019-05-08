import './form.scss';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../contact-form/input'
import TextArea from '../contact-form/textarea';

class ContactForm extends Component{
  getUserData(formValues){
    console.log(formValues);
  }
  render(){
    const {handleSubmit} = this.props;
    return(
      <div className="contactForm">
        <h4>Contact Form</h4>
        <form className="submitForm" onSubmit={handleSubmit(this.getUserData)}>
          <Field placeholder="Name" name="name" component={Input}/>
          <Field placeholder="Email" name="email" component={Input}/>
          <Field placeholder="Phone" name="phone" component={Input} type="tel" autoComplete="tel"/>
          <Field placeholder="Subject" name="subject" component={Input}/>
          <Field placeholder="Message" name="message" component={TextArea}/>
          <button>Send</button>
        </form> 
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  const regExpTests = {
    name: /^[a-z ,.'-]+$/i,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^\d{10}$/,
    subject: /^[a-z ,.'-[:punct]]+$/i,
    message: /^[a-z ,.'-]+$/i
  }
  const errorMessages = {
    name: 'Please enter a first and last name.',
    email: 'That is not a valid email address.',
    phone: 'Please enter 10 digits for a US phone only.',
    subject: 'Please enter a subject for your message',
    message: 'Please enter a message',
  }
  Object
    .keys(errorMessages)
    .map((key) => {
      if(!formValues[key] || !regExpTests[key].test(formValues[key])){
        errors[key] = errorMessages[key];
      }
    })
    return errors;
}

export default reduxForm({
  form: 'contactForm',
  validate
})(ContactForm);
