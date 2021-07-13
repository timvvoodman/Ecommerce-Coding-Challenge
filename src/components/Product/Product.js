import React from 'react'

//Style Imports//
import './Product.css'

function Product({ title, image, price }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt={title} />
      <button className="product__btn">Add to Cart</button>
    </div>
  )
}

export default Product
