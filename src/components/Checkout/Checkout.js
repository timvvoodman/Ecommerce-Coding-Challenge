import React from 'react'
import { useStateValue } from '../../Context/AppState'
import CartItem from '../CartItem/CartItem'
import Subtotal from '../SubTotal/Subtotal'
import './Checkout.css'

function Checkout() {
  const [{ cart }] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__subtotal">
        <Subtotal />
      </div>
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">
            Your Cart{cart.length === 0 ? <span> is empty</span> : null}
          </h2>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Checkout
