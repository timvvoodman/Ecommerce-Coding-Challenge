import React from 'react'
import './Product.css'
import { useStateValue } from '../../Context/AppState'

function Product({ id, title, image, price, description, category }) {
  //Get reducer and Global State
  const [{ cart }, dispatch] = useStateValue()

  // dispatch clicked product to cart state after loaded save cart to local storage
  function addToCart() {
    dispatch({
      type: 'ADD_TO_CART',
      data: {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
      },
    })
  }

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
      <button className="product__btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
