import React, { useState, useEffect } from 'react'

//Style Imports//
import './Home.css'
import FilterList from '@material-ui/icons/FilterList'
import Search from '@material-ui/icons/Search'
import Sort from '@material-ui/icons/Sort'
import Product from '../Product/Product'
import API from '../../utils/axios'

function Home() {
  //////////STATE DEFINITIONS//////////

  //Product list state (retreived from fake store API)
  const [products, setProducts] = useState({
    results: [],
    filteredResults: [],
  })

  //Value for product search term state
  const [search, setSearch] = useState('')

  /////////END STATE DEFINITIONS////////

  /////COMPONENT LIFECYCLE METHODS//////

  //Calls product request to API on page load (componentDidMount)
  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    setProducts({
      ...products,
      filteredResults: products.filteredResults.filter((product) => {
        return product.title.toLowerCase().includes(search)
      }),
    })
  }, [search])

  async function loadProducts() {
    try {
      const response = await API.getAllProducts()
      setProducts({
        results: response.data,
        filteredResults: [...response.data],
      })
    } catch (error) {
      console.log(error)
    }
    console.log(products.filteredResults)
  }

  //////////PRODUCT SEARCH FUNCTIONALITY//////////

  //Update search state when user enters search term
  function handleSearchInput(event) {
    const input = event.target.value.toLowerCase()
    setSearch(input)
    console.log(search)
  }

  //reset search
  function resetSearch() {
    setProducts({
      ...products,
      filteredResults: products.results,
      search: '',
    })
  }

  return (
    <div className="home">
      <form className="filter__container">
        <div className=" filter__item search">
          <Search />
          <input
            onChange={handleSearchInput}
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
          <button onClick={resetSearch} className="filter__reset">
            Reset
          </button>
        </div>
      </form>
      <div className="product__container">
        {products.filteredResults?.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      {/* <Product id="" title="" price={29.99} image="" /> */}
    </div>
  )
}

export default Home
