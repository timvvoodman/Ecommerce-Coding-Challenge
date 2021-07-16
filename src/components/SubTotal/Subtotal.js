import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../../Context/AppState'
import { getCartTotal } from '../../Context/reducer'
import './Subtotal.css'

function Subtotal() {
  const [{ cart }] = useStateValue()
  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items):
        <strong> ${getCartTotal(cart)}</strong>
      </p>

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
