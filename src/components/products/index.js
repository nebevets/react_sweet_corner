import './products.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';
import CupCake from './cake';


class Products extends Component{
  componentDidMount(){
    this.props.getAllProducts()
  }
  render(){
    const {data, error} = this.props.products;
    const cakes = data && data.map(product => <CupCake {...product} key={product.pid} />);
    return(
      <div className="products">
        {
          error &&
            <div className="productsError">
              <div className="stack">
                {error.stack}
              </div>
              <div className="getAllProductsError">
                {error.getAllProductsError}
              </div>
              <div className="errorUrl">
                {error.config.url}
              </div>
            </div>
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
