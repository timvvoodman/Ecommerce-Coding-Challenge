import React from 'react'
import './Filter.css'
import { useStateValue } from '../../Context/AppState'

function Filter({ onChange }) {
  const [{ priceFilter }, dispatch] = useStateValue()

  //get and set as filter rules
  async function getPriceRules(event) {
    await dispatch({ type: 'SET_PRICE_FILTER', data: event.target.value })

    dispatch({ type: 'PRICE_FILTER' })
  }

  async function getCategoryRules(event) {
    await dispatch({ type: 'SET_CATEGORY_FILTER', data: event.target.value })
    dispatch({ type: 'CATEGORY_FILTER' })

    console.log(event.target.value)
  }

  return (
    <div className="filter__form__container">
      <form className="filter__form">
        <div className="category">
          <label name="price">Price</label>
          <select onChange={getPriceRules}>
            <option value="defualt"> -- select an option -- </option>
            <option value="49">$49 and up</option>
            <option value="100">$99 and up</option>
            <option value="250">$250 and up</option>
          </select>
        </div>
        <div className="category">
          <label name="category">Category</label>
          <select onChange={getCategoryRules}>
            <option value="defualt"> -- select an option -- </option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter
