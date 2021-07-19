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
  console.log(cart)
  return (
    <div className="checkout__product">
      <div
        className="checkout__product__image"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundImage: `url(${image})`,
        }}
      ></div>

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
