import React from 'react'
import './CartItem.css'
import { useStateValue } from '../../Context/AppState'

function CartItem({ id, title, image, price, description, category }) {
  const [dispatch] = useStateValue()

  function removeFromBasket() {
    //remove item from the cart and from local storage if no items left in cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt={title} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
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
