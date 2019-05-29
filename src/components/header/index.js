import './header.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearHeaderMessage} from '../../actions';
import Nav from '../nav';
import headerImage from '../../assets/images/header.png';
import logoImage from '../../assets/images/logo.png';

class Header extends Component{
  constructor(props){
    super(props);
  }
  componentDidUpdate(prevProps){
    console.log('cdu header: ', prevProps, this.props)
    if(!prevProps.message && this.props.message){
      this.timeOut = setTimeout(this.props.clearHeaderMessage, 2000);
    }
  }
  render(){
    const {message} = this.props;
    return(
      <div className="header center">
        <img src={headerImage} alt="topBorder" />
        <Nav />
        <img src={logoImage} alt="logo"/>
        <div className="motto">
          We deliver cupcakes for the important events in your life!
        </div>
        {
          message && <div className="networkMessage">{message}</div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {message} = state.cart;
  // console.log('header message', message);
  return {
    message,
  };
}

export default connect(mapStateToProps, {
  clearHeaderMessage
})(Header);
