import './shopping_cart.scss';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {getCartItems} from '../../actions';
import {convertToDollarsandCents} from '../../assets/helpers';

class ShoppingCart extends Component{
  // componentDidMount(){
  //   this.props.getCartItems();
  // }
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
  const {total} = state.cart;
  return {
    total
  }
}

export default connect(mapStateToProps/*, {
  getCartItems
}*/)(ShoppingCart);
