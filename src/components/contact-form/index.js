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

export default reduxForm({
  form: 'contactForm'
})(ContactForm);
