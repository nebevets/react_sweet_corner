import './quantity.scss';
import React, {Component} from 'react';
import Button from '../button';

class Quantity extends Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: props.quantity 
    };
  }
  componentDidUpdate(prevProps){
    if (prevProps.quantity !== this.props.quantity){
      this.setState({
        quantity: this.props.quantity
      })
    }
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
  render(){
    const {updateQuantity, pid} = this.props;
    const {quantity} = this.state;
    return(
      <div className="quantityChanger">
        <input name="quantity" type="number" value={quantity} onChange={this.handleQuantity.bind(this)} />
        <Button onClick={() => updateQuantity(pid, quantity)} title="Update this quantity...">
          <span>Update </span>
          <span className="material-icons">shopping_cart</span>
        </Button>
      </div>
    );
  }
}

export default Quantity;
