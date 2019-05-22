import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {signIn, clearErrors} from '../../actions';
import Input from '../input';

class SignIn extends Component{
  async handleSignIn(values){
    await this.props.signIn(values);
    if(this.props.auth){
      this.props.history.push('/cart');
    }
  }
  componentWillUnmount(){
    this.props.clearErrors();
  }
  render(){
    const {signInError, handleSubmit} = this.props;
    // console.log('signIn props: ', this.props);
    return(
      <form className="signInForm" onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
        <div className="row">
          <Field name="email" label="Email" className="email" component={Input}/>
        </div>
        <div className="row">
          <Field name="password" label="Password" className="password" component={Input} type="password"/>
        </div>
        <div className="row">
          <button className="btnSignIn">Sign In</button>
          <p className="red-text">{signInError}</p>
        </div>
      </form>
    );
  }
}

function validate({email, password}){
  const errors = {};
  if(!email){
    errors.email = 'please enter your email name';
  }
  if(!password){
    errors.password = 'please enter your password';
  }
  return errors;
}

const mapStateToProps = (state) => {
  // console.log('state from signIn: ', state);
  const {signInError, auth} = state.login;
  return {
    auth,
    signInError //because redux form already has an 'error' key that will overwrite
  };
}

SignIn = connect(mapStateToProps, {
  signIn, clearErrors
})(SignIn);

export default reduxForm({
  form: 'signInForm',
  validate
})(SignIn);
