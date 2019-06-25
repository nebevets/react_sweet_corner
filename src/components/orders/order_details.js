import './order_details.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getOrderDetails} from '../../actions';
import NetworkError from '../network_error';
import {convertToDollarsandCents} from '../../assets/helpers';

class OrderDetails extends Component{
  componentDidMount(){
    const {order_id} = this.props.match.params;
    this.props.getOrderDetails(order_id);
  }
  render(){
    const {orderDetail, orderDetailsError} = this.props;
    const orderItems = orderDetail && orderDetail.items.map(item => 
      <span className='item' key={item.id}>
        <div>{item.product.name}</div>
        <img src={item.product.thumbnail.url} alt={item.product.thumbnail.altText}/>
        <div>{item.quantity} at {convertToDollarsandCents(item.each)} ea.</div>
      </span>
    );
    return(
      <div className="orderDetails">
        {
          orderDetail &&
            <div className="orderDetail">
              <div className="status">
                Status: {orderDetail.status}
                <div className="orderId">for Order ID: {orderDetail.id}</div>  
              </div>
              <div className="totals">
                <span>Cake Quantity: {orderDetail.itemCount}</span> for: {convertToDollarsandCents(orderDetail.total)}
              </div>
              <div className="orderItems">
                {orderItems}
              </div>
            </div>
        }
        {
          orderDetailsError &&
            <NetworkError stack={orderDetailsError.stack} url={orderDetailsError.config.url} networkError={orderDetailsError.networkError} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('***** Order detail: ', state);
  const {orderDetail, orderDetailsError} = state.orders;
  return {
    orderDetail,
    orderDetailsError,
  }
}
export default connect(mapStateToProps, {
  getOrderDetails,
})(OrderDetails);
