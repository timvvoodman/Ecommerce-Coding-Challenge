import React from 'react'

//Style Imports//
import './Home.css'
import FilterList from '@material-ui/icons/FilterList'
import Search from '@material-ui/icons/Search'
import Sort from '@material-ui/icons/Sort'
import Product from '../Product/Product'

function Home() {
  return (
    <div className="home">
      <form className="filter__container">
        <div className=" filter__item search">
          <Search />
          <input
            type="text"
            placeholder="Search for Products"
            className="search__input"
          ></input>
        </div>
        <div className="drop__items">
          <div className=" filter__item filter">
            <p>Sort</p>
            <FilterList />
          </div>

          <div className=" filter__item sort">
            <p>Filter</p>
            <Sort />
          </div>
        </div>
      </form>
      <div className="product__container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      {/* <Product id="" title="" price={29.99} image="" /> */}
    </div>
  )
}

export default Home
