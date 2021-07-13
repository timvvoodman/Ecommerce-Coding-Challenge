import React from 'react'
import { Link } from 'react-router-dom'

//Style Imports//
import './Header.css'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

function Header() {
  return (
    <div>
      <div className="header">
        <Link
          to="/"
          className="header__logo"
          style={{ textDecoration: 'none' }}
        >
          <h1>General Store</h1>
        </Link>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header__basket">
            <div className="header__basket__count">
              <span>2</span>
            </div>

            <ShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
