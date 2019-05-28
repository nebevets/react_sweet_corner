import './user.scss';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {signOut} from '../../actions';
import {connect} from 'react-redux';

class User extends Component{
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }
  handleSignOut(){
    this.props.signOut();
  }
  handleMouseEnter(){
    this.setState({
      hover: true
    });
  }
  handleMouseLeave(){
    this.setState({
      hover: false
    });
  }
  render(){
    const {hover} = this.state;
    const {auth} = this.props;
    return(
      <li className="user" onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
          <i className="material-icons">account_box</i>
          {
            hover && auth &&
              <div className="menu">
                <div className="menuItem" onClick={this.handleSignOut.bind(this)}>
                  <Link to="/">Sign Out...</Link>
                </div>
                <div className="menuItem">
                  <Link to="/orders">Orders Status...</Link>
                </div>
              </div>
              
          }
          {
            hover && !auth &&
              <div className="menu">
                <div className="menuItem">
                  <Link to="/sign-in">Sign In...</Link>
                </div>
                <div className="menuItem">
                  <Link to="/sign-in">Order Status...</Link>
                </div>
              </div>
          }
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("state from user icon", state);
  const {auth} = state.login;
  return {
    auth
  }
};

export default connect(mapStateToProps, {
  signOut
})(User);
