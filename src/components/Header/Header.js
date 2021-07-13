import React from 'react'
import { Link } from 'react-router-dom'

//Style Imports//
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/" className="header__logo">
          <h1>General Store</h1>
        </Link>

        <Link to="/checkout">
          <div className="header__basket">
            <div className="header__basket__count">
              <span>2</span>
            </div>

            <ShoppingBasketIcon />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
