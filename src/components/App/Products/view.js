import React, { Component } from 'react';
import './style.css';

class ProductList extends Component {

  getProductList = () => {
    const { products } = this.props
    return this.props.products.map(item => (
      <div>
        {item.name +' '+ item.price}
      </div>
    ))
  }

  render() {
    const { title, addProduct } = this.props
    return (
      <div>
        <h1>Showing {title} Products</h1>
        { this.getProductList() }
        <button onClick={() => addProduct({
          name: 'alfajor',
          price: 20
        })}>
          Add
        </button>
      </div>
    )
  }


}

export default ProductList;
