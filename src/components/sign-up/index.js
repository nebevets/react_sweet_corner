import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {signUp, clearErrors} from '../../actions';
import Input from '../input';

class SignUp extends Component{
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
        <div className="row">
          <Field name="password" label="Create Password" className="col s12 m6" component={Input} type="password"/>
          <Field name="confirmPassword" label="Confirm Password" className="col s12 m6" component={Input} type="password"/>
        </div>
        <div className="row right-align">
          <button className="btn">Sign Up</button>
          {authError}
        </div>
      </form>
    );
  }
}

function validate({firstName, lastName, email, password, confirmPassword}){
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
  if(!password){
    errors.password = 'please enter your password';
  }
  if(password !== confirmPassword){
    errors.confirmPassword = 'passwords do not match';
  }
  return errors;
}

const mapStateToProps = (state) => {
  const {signUpError} = state.user;
  return {
    authError: signUpError //because redux form already has an error key that will overwrite
  };
}

SignUp = connect(mapStateToProps, {
  signUp, clearErrors
})(SignUp);

export default reduxForm({
  form: 'signUpForm',
  validate
})(SignUp);
