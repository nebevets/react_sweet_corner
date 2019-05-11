import './products.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';


class Products extends Component{
  componentDidMount(){
    this.props.getAllProducts()
  }
  render(){
    return(
      <div className="products">
        products page
      </div>
    );
  }
}

export default connect(null, {
  getAllProducts
})(Products);
