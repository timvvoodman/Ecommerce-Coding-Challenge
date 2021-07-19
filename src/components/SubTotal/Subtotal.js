import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../../Context/AppState'
import { getCartTotal } from '../../Context/reducer'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'

function Subtotal() {
  const [{ cart }] = useStateValue()

  const cartTotal = getCartTotal(cart)

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal ({cart.length} items):
            <strong> {value}</strong>
          </p>
        )}
        decimalScale={2}
        value={cartTotal}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
