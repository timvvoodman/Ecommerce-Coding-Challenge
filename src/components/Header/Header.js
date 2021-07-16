import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { useStateValue } from '../../Context/AppState'

function Header() {
  //Get reducer and Global State
  const [{ cart }] = useStateValue()

  return (
    <div>
      <div className="header">
        <Link
          to="/"
          className="header__logo"
          style={{ textDecoration: 'none' }}
        >
          <h1>THINGS & STUFF</h1>
        </Link>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header__basket">
            <div className="header__basket__count">
              <span>{cart?.length}</span>
            </div>

            <ShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
