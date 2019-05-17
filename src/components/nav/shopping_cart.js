import './shopping_cart.scss';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCartItems} from '../../actions';

class ShoppingCart extends Component{
  componentDidMount(){
    this.props.getCartItems();
  }
  updateCart(){
    this.props.getCartItems();
  }
  render(){
    const {total} = this.props;
    return(
      <li className="shoppingCart" onClick={this.updateCart.bind(this)}>
        <Link to="/cart">
          <i className="material-icons">shopping_cart</i>
        </Link>
        {
          total && 
            <div className='total'>
              <Link to="/cart">{this.props.total.items}</Link>
            </div>
        }
      </li>
      );
  }
}

const mapStateToProps = (state) => {
  const {total} = state.cart;
  return {
    total
  }
}

export default connect(mapStateToProps, {
  getCartItems
})(ShoppingCart);
