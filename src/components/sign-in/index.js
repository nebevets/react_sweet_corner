import './sign-in.scss';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {signIn, clearErrors} from '../../actions';
import Input from '../input';
import Button from '../button';

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
    return(
      <div className="signIn">
        <h3>Welcome Back!</h3>
        <p>Use your email and password to sign in to your account.</p>
        <form className="signInForm" onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
            <Field name="email" placeholder="Email" className="email" component={Input}/>
            <Field name="password" placeholder="Password" className="password" component={Input} type="password"/>
            <div className="buttonArea">
              <Button type="submit" title="Sign In...">
                <span>Sign In </span>
                <span className="material-icons">arrow_forward</span>
              </Button>
              <p className="error">{signInError}</p>
            </div>
        </form>
      </div>
      
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
