import './orders.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllOrders} from '../../actions';
import NetworkError from '../network_error';
import Order from './order.js';

class Orders extends Component{
  componentDidMount(){
    this.props.getAllOrders()
  }
  getOrderPage(oid){
    this.props.history.push(`/orders/${oid}`);
  }
  render(){
    const {orders, ordersError} = this.props;
    if(ordersError){
      return(
        <div className="orders">
          {
            <NetworkError stack={ordersError.stack} url={ordersError.config.url} networkError={ordersError.networkError} />
          }
        </div>
      );
    }
    if(orders && orders.length){
      return(
        <div className="orders">
          {
            orders
            .reverse()
            .map(order => <Order onClick={this.getOrderPage.bind(this, order.id)} {...order} key={order.id} />)
          }
        </div>
      );
    }
    return(
      <div className="orders">
        <h2>No orders found...</h2>
        <p>Click products to start building your order.</p>
      </div>
    );
  }
}

//todo: if you come to this page and auth is false, we need a form for checking a guest order

const mapStatetoProps = (state) => {
  const {orders, ordersError} = state.orders;
  return {
    orders,
    ordersError
  }
}

export default connect(mapStatetoProps, {
  getAllOrders
})(Orders);
