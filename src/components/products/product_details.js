import './product_details.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductDetails, clearProductDetails, addCartItem} from '../../actions';
import NetworkError from '../network_error';
import {convertToDollarsandCents} from '../../assets/helpers';
import Button from '../button';

class ProductDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 1
    }
  }
  componentDidMount(){
    const {product_id} = this.props.match.params;
    this.props.getProductDetails(product_id);
  }
  componentWillUnmount(){
    this.props.clearProductDetails();
  }
  handleQuantity(event){
    const {name, value} = event.target;
    const requestedQuantity = Number(value);
    const newQuantity = requestedQuantity < 1
      ? 1
      : requestedQuantity;
    this.setState({
      [name]: newQuantity
    });
  }
  async handleAddCartItem(pid, quantity){
      await this.props.addCartItem(pid, quantity);
      this.props.history.push('/cart');
  }
  render(){
    const {details, detailsError} = this.props;
    const {quantity} = this.state;
    return(
      <div className="productDetails">
        {
          details &&
            <div className="detailsContainer" style={{backgroundImage: `url(${details.image.url})`}}>
              <h2 className="name">{details.name}</h2>
              <div className="caption">{details.caption}</div>
              <div className="description">{details.description}</div>
              <div className="cost">
                {convertToDollarsandCents(details.cost)} each.
              </div>
              <div className="addToCart">
                <input name="quantity" type="number" value={quantity} onChange={this.handleQuantity.bind(this)}/>
                <Button onClick={this.handleAddCartItem.bind(this, details.pid, quantity)} title="Click to Add...">
                  <span>Add to</span>
                  <span className="material-icons">add_shopping_cart</span>
                </Button>
              </div>
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
  getProductDetails, clearProductDetails, addCartItem
})(ProductDetails);
