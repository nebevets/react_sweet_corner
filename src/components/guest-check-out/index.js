import './guest-check-out.scss';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {clearErrors, checkOutGuestCart} from '../../actions';
import Input from '../input';
import Button from '../button';

class GuestCheckOut extends Component{
  handleGuestCheckout(values){
    this.props.checkOutGuestCart(values);
  }
  componentWillUnmount(){
    this.props.clearErrors();
  }
  render(){
    const {handleSubmit} = this.props;
    return(
      <form className="guestCheckOut" onSubmit={handleSubmit(this.handleGuestCheckout.bind(this))}>
        <h3>Welcome to Guest Checkout</h3>
          <Field name="firstName" placeholder="Given Name" className="firstName" component={Input}/>
          <Field name="lastName" placeholder="Surname" className="lastName" component={Input}/>
          <Field name="email" placeholder="Email" className="email" component={Input}/>
          <div className="checkOut">
            <Button type="submit" onClick={handleSubmit(this.handleGuestCheckout.bind(this))} title="Check out...">
              <span>Check Out </span>
              <span className="material-icons">shopping_cart</span>
            </Button>
          </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  const regExpTests = {
    firstName: /^[a-z ,.'-]+$/i,
    lastName: /^[a-z ,.'-]+$/i,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  }
  const errorMessages = {
    firstName: 'Please enter your given (first) name.',
    lastName: 'Please enter your surname.',
    email: 'That is not a valid email address.',
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

GuestCheckOut = connect(null, {
  clearErrors, checkOutGuestCart
})(GuestCheckOut);

export default reduxForm({
  form: 'guestCheckOutForm',
  validate
})(GuestCheckOut);
