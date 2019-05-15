import './product_details.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductDetails, clearProductDetails} from '../../actions';
import NetworkError from './network_error';
import {convertToDollarsandCents} from '../../assets/helpers';

class ProductDetails extends Component{
  componentDidMount(){
    const {product_id} = this.props.match.params;
    this.props.getProductDetails(product_id);
  }
  componentWillUnmount(){
    this.props.clearProductDetails();
  }
  render(){
    //console.log(this.props.details);
    const {details, detailsError} = this.props;
    return(
      <div className="productDetails">
        {
          details &&
            <div className="detailsContainer" style={{backgroundImage: `url(${details.image.url})`}}>
              <h2 className="name">{details.name}</h2>
              <div className="caption">{details.caption}</div>
              <div className="description">{details.description}</div>
              <div className="cost">{convertToDollarsandCents(details.cost)}</div>
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
  getProductDetails, clearProductDetails
})(ProductDetails);
