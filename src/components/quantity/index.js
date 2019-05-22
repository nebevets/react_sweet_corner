import './quantity.scss';
import React, {Component} from 'react';
import Button from '../button';

class Quantity extends Component{
  constructor(props){
    super(props);
    this.state = {
      [props.pid]: props.quantity 
    };
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
    return(
      <div className="quantityChanger">
        <input name={pid} type="number" value={this.state[pid]} onChange={this.handleQuantity.bind(this)} />
        <Button onClick={() => updateQuantity(pid, this.state[pid])} title="Update this quantity...">
          <span>Update </span>
          <span className="material-icons">shopping_cart</span>
        </Button>
      </div>
    );
  }
}

export default Quantity;
