import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {clearErrors, checkOutGuestCart} from '../../actions';
import Input from '../input';

// ### Guest Order APIs
// Checkout - Create an Order from cart contents as a guest
// POST /api/orders/guest
// headers required: 'X-Cart-Token': 'cart token'
// post data required, example: { email: 'mail@mail.com', firstName: 'Jane', lastName: 'Doe' }

// View Guest Order Details
// POST /api/orders/:orderId
// post data required, example: { email: 'mail@mail.com' }
// The email sent must be the same one the order was made with

class GuestCheckOut extends Component{
  handleSignUp(values){
    this.props.signUp(values);
  }
  componentWillUnmount(){
    this.props.clearErrors();
  }
  renderError(error){
    return(
      <p className="red-text" key={error}>{error}</p>
    );
  }
  render(){
    const {handleSubmit} = this.props;
    let {authError} = this.props;
    if(Array.isArray(authError)){
      authError = authError.map(this.renderError);
    }else{
      authError = this.renderError(authError);
    }
    return(
      <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
        <div className="row">
          <Field name="firstName" label="Given Name" className="col s12 m6" component={Input}/>
          <Field name="lastName" label="Sur Name" className="col s12 m6" component={Input}/>
        </div>
        <div className="row">
          <Field name="email" label="Email" className="col s12" component={Input}/>
        </div>
        <div className="row right-align">
          <Button>
            <span>
              Check Out 
            </span>
            <span className="material-icons">
              shopping-cart
            </span>
          </Button>
          {authError}
        </div>
      </form>
    );
  }
}

function validate({firstName, lastName, email}){
  const errors = {};
  if(!firstName){
    errors.firstName = 'please enter your given name';
  }
  if(!lastName){
    errors.lastName = 'please enter your sur name';
  }
  if(!email){
    errors.email = 'please enter your email name';
  }
  return errors;
}

const mapStateToProps = (state) => {
  const {cart} = state;
  return {
    cart
  };
}

GuestCheckOut = connect(mapStateToProps, {
  clearErrors, checkOutGuestCart
})(GuestCheckOut);

export default reduxForm({
  form: 'guestCheckOutForm',
  validate
})(GuestCheckOut);
