import React from 'react'
import './CartItem.css'
import { useStateValue } from '../../Context/AppState'

function CartItem({ id, title, image, price, description, category }) {
  const [{ cart }, dispatch] = useStateValue()

  function removeFromBasket() {
    //remove item from the cart and from local storage if no items left in cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }

  return (
    <div className="checkout__product">
      <img className="checkout__product__image" src={image} alt={title} />
      <div className="checkout__product__info">
        <p className="checkout__product__title">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
    </div>
  )
}

export default CartItem
