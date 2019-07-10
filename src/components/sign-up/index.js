import './sign-up.scss';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {signUp, clearErrors} from '../../actions';
import Input from '../input';
import Button from '../button';

class SignUp extends Component{
  async handleSignUp(values){
    try{
      await this.props.signUp(values);
      const {auth} = this.props;
      if(auth){
        this.props.history.push('/cart');
      } else {
        throw new Error();
      }
    }
    catch(error){
      return;
    }
  }
  checkSignUpSuccess(){
    const {auth} = this.props;
    console.log(auth);
  }
  componentWillUnmount(){
    this.props.clearErrors();
  }
  renderError(error){
    return(
      <p className="error" key={error}>{error}</p>
    );
  }
  render(){
    const {handleSubmit} = this.props;
    let {signUpError} = this.props;
    if(Array.isArray(signUpError)){
      signUpError = signUpError.map(this.renderError);
    }else{
      signUpError = this.renderError(signUpError);
    }
    return(
      <div className="signUp">
        <h3>Sign up for sweetness...</h3>
        <p>Complete the information below and receive your personal Sweet Corner shopping account. Creating an account puts you in our rewards program where you receive special announcements, discounts, order history and more.</p>
        <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
          <Field name="firstName" placeholder="First Name" component={Input}/>
          <Field name="lastName" placeholder="Last Name" component={Input}/>
          <Field name="email" placeholder="Email" component={Input}/>
          <Field name="password" placeholder="Create Password" component={Input} type="password"/>
          <Field name="confirmPassword" placeholder="Confirm Password" component={Input} type="password"/>
          <div className="buttonArea">
            <Button type="submit" title="Sign Up...">
              <span>Sign Up </span>
              <span className="material-icons">person_add</span>
            </Button>
            {signUpError}
          </div>
        </form>
      </div> 
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  const regExpTests = {
    firstName: /^[a-z ,.'-]+$/i,
    lastName: /^[a-z ,.'-]+$/i,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.{8,}$)(?=.+[0-9])(?=.+[!@#\$%\^&])/
  }
  const errorMessages = {
    firstName: 'Please enter a first name.',
    lastName: 'Please enter a last name.',
    email: 'That is not a valid email address.',
    password: 'Pick at least 8 characters from: A-Z, a-z, 0-9, and !@#$%^&',
  }
  Object
    .keys(errorMessages)
    .map((key) => {
      if(!formValues[key] || !regExpTests[key].test(formValues[key])){
        errors[key] = errorMessages[key];
      }
    })
  if(formValues.confirmPassword !== formValues.password){
    errors.confirmPassword = 'Passwords do not match.';
  }
  return errors;
}

const mapStateToProps = (state) => {
  console.log('state from signIn: ', state);
  const {signUpError, auth} = state.login;
  return {
    auth,
    signUpError
  };
}

SignUp = connect(mapStateToProps, {
  signUp, clearErrors
})(SignUp);

export default reduxForm({
  form: 'signUpForm',
  validate
})(SignUp);
