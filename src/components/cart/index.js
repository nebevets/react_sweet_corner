import './cart.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCartItems, deleteCartItem, putCartItem, checkOutCart} from '../../actions';
import {convertToDollarsandCents} from '../../assets/helpers';
import Quantity from '../quantity';
import Button from '../button';
import CartHeader from './cart-header';
import CartFooter from './cart-footer';

// delete /api/cart/:cartId Delete cart and all items in it
// patch /api/cart/:itemId, { quantity: 2 } add 2 items to that items qty

class Cart extends Component{
  componentDidMount(){
    this.props.getCartItems();
  }
  async checkOutThisCart(){
    await this.props.checkOutCart();
    this.props.history.push('/orders');
  }
  async removeThisItem(pid){
    // delete /api/cart/items/:itemId Delete that item
    await this.props.deleteCartItem(pid);
    this.props.getCartItems();
  }
  async handleUpdateQuantity(pid, quantity){
    // put /api/cart/:itemId, { quantity: 4 } set that item qty to 4
    await this.props.putCartItem(pid, quantity);
    this.props.getCartItems();
  }
  render(){
    const {items, total} = this.props.cart;
    const {user} = this.props.login;
    if(items && items.length){
      const cartItems = items.map(item =>{
        return(
          <div className="cartItem" key={item.itemId}>
            <div className="name">
              <img src={item.thumbnail.url} alt={item.thumbnail.altText} />
              <span>{item.name}</span>
            </div>
            <Quantity quantity={item.quantity} pid={item.itemId} updateQuantity={this.handleUpdateQuantity.bind(this)} />
            <div className="total">{convertToDollarsandCents(item.total)}</div>
            <div className="removeItem">
              <Button onClick={this.removeThisItem.bind(this, item.itemId)} title="Delete this item...">
                <span>Delete from </span>
                <span className="material-icons">remove_shopping_cart</span>
              </Button>
            </div>
          </div>
        );
      });
      return(
        <div className="cart">
          <h2>Cart for {user.name}:</h2>
            <CartHeader/>
            {
              cartItems
            }
            <CartFooter checkOutCart={this.checkOutThisCart.bind(this)} total={convertToDollarsandCents(total.cost)} />
        </div>
      );
    }
    return(
      <div className="cart">
        <h2>Nothing here yet...</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {cart, login} = state;
  // console.log(state);
  return {
    cart,
    login,
  }
}

export default connect(mapStateToProps, {
  deleteCartItem,
  getCartItems,
  putCartItem,
  checkOutCart
})(Cart);
