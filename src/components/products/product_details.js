import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductDetails} from '../../actions';
import NetworkError from './network_error';

class ProductDetails extends Component{
  componentDidMount(){
    const {product_id} = this.props.match.params;
    this.props.getProductDetails(product_id);
  }
  render(){
    const {details, detailsError} = this.props;
    return(
      <div className="productDetails">
        {
          details &&
            <div className="detailsContainer">
              <div className="name">{details.name}</div>
              <div className="caption">{details.caption}</div>
              <div className="description">{details.description}</div>
            </div>
        }
        {
          detailsError &&
            <NetworkError stack={detailsError.stack} url={detailsError.config.url} networkError={detailsError.networkError} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {details, detailsError} = state.products;
  return {
    details,
    detailsError,
  }
}
export default connect(mapStateToProps, {
  getProductDetails
})(ProductDetails);
