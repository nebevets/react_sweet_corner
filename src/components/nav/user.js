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
  
  componentDidMount(){
    console.log('cDM: user icon');
  }
  componentDidUpdate(){
    console.log('cDU: user icon');
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
              <div className="menuItem" onClick={this.handleSignOut.bind(this)}>
                <Link to="/">sign out</Link>
              </div>
          }
          {
            hover && !auth &&
              <div className="menuItem">
                <Link to="/sign-in">sign in</Link>
              </div>
          }
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state from user icon", state);
  const {auth} = state.login;
  return {
    auth
  }
};

export default connect(mapStateToProps, {
  signOut
})(User);
