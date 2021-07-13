import React from 'react'

//Style Imports//
import './Product.css'

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Backpack</p>
        <p className="product__price">
          <small>$</small>
          <strong>109.95</strong>
        </p>
      </div>
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="backpack"
      />
      <button className="product__btn">Add to Cart</button>
    </div>
  )
}

export default Product
