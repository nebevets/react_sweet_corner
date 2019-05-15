import './products.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';
import CupCake from './cake';
import NetworkError from '../network_error';


class Products extends Component{
  getProductPage(pid){
    this.props.history.push(`/products/${pid}`);
  }
  componentDidMount(){
    this.props.getAllProducts()
  }
  render(){
    const {data, productsError} = this.props.products;
    const cakes = data && data.map(product => <CupCake onClick={this.getProductPage.bind(this, product.pid)} {...product} key={product.pid} />);
    return(
      <div className="products">
        {
          productsError &&
            <NetworkError stack={productsError.stack} url={productsError.config.url} networkError={productsError.networkError} />
        }
        {
          data && cakes   
        }
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  const {products} = state;
  return {
    products
  }
}

export default connect(mapStatetoProps, {
  getAllProducts
})(Products);
