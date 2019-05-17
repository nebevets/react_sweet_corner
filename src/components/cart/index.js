import './cart.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteCartItem} from '../../actions';
import {convertToDollarsandCents} from '../../assets/helpers';

class Cart extends Component{
  // componentDidMount(){
  //   this.props.getCartItems();
  // }
  removeThisItem(pid){
    this.props.deleteCartItem(pid);
  }
  render(){
    const {items} = this.props.cart;
    const cartItems = items && items.map(item =>{
      return(
        <div className="cartItems" key={item.itemId}>
          <div className="name">
            <img src={item.thumbnail.url} alt={item.thumbnail.altText} />
            <span>{item.name}</span>
          </div>
          <div className="quantity">{item.quantity}</div>
          <div className="total">{convertToDollarsandCents(item.total)}</div>
          <div className="removeItem" onClick={this.removeThisItem.bind(this, item.itemId)}>
            <i className="material-icons">remove_shopping_cart</i>
          </div>
        </div>
      );
    });
    return(
      <div className="cart">
        <h2>Your Cart:</h2>
        {
          items && cartItems
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {cart} = state;
  return {
    cart
  }
}

export default connect(mapStateToProps, {
  deleteCartItem
})(Cart);
