import './shopping_cart.scss';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCartTotals} from '../../actions';
import {convertToDollarsandCents} from '../../assets/helpers';

class ShoppingCart extends Component{
  componentDidMount(){
    this.props.getCartTotals();
  }
  // componentDidUpdate(prevProps){
  //   if (JSON.stringify(this.props.total) !== JSON.stringify(prevProps.total)) {
  //     this.props.getCartItems();
  //   }
  // }
  render(){
    const {total} = this.props;
    return(
      <li className="shoppingCart"  title={total && convertToDollarsandCents(total.cost)}>
        <Link to="/cart">
          <i className="material-icons">shopping_cart</i>
        </Link>
        {
          total && 
            <div className='total'>
              <Link to="/cart">{total.items}</Link>
            </div>
        }
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state from shoppingcart', state);
  const {auth} = state.login;
  const {total} = state.cart;
  return {
    auth,
    total
  }
}

export default connect(mapStateToProps, {
  getCartTotals
})(ShoppingCart);
