import './cart.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCartItems} from '../../actions';

class Cart extends Component{
  componentDidMount(){
    console.log(this.props.getCartItems());
  }
  render(){
    return(
      <div className="cart">Shopping Cart
      <i className="material-icons">remove_shopping_cart</i>
      </div>
    );
  }
}

export default connect(null, {
  getCartItems
})(Cart);
