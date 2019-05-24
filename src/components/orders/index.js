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
    console.log(oid);
  }
  render(){
    const {orders, ordersError} = this.props;
    const orderList = orders && orders.map(order => <Order onClick={this.getOrderPage.bind(this, order.id)} {...order} key={order.id} />);
    return(
      <div className="orders">
        {
          ordersError &&
            <NetworkError stack={ordersError.stack} url={ordersError.config.url} networkError={ordersError.networkError} />
        }
        {
          orders && orderList   
        }
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  const {orders} = state.orders;
  return {
    orders
  }
}

export default connect(mapStatetoProps, {
  getAllOrders
})(Orders);
