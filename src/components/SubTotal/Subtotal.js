import React, { useEffect } from 'react'
import './Subtotal.css'
import { useStateValue } from '../../Context/AppState'
import { getCartTotal } from '../../Context/reducer'
import './Subtotal.css'

function Subtotal() {
  const [{ cart }] = useStateValue()

  useEffect(() => {
    console.log(cart)
  }, [])

  const cartTotal = getCartTotal(cart)

  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items):
        <strong> ${cartTotal.toFixed(2)}</strong>
      </p>

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
