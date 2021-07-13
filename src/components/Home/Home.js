import React, { useState, useEffect } from 'react'

//Style Imports//
import './Home.css'
import FilterList from '@material-ui/icons/FilterList'
import Search from '@material-ui/icons/Search'
import Sort from '@material-ui/icons/Sort'
import Product from '../Product/Product'
import API from '../../utils/axios'

function Home() {
  //Product list state (retreived from fake store API)//
  const [products, setProducts] = useState({
    results: [],
    filteredResults: [],
    search: '',
  })

  //Calls product request to API on page load (componentDidMount)
  useEffect(() => {
    loadProducts()
  }, [])

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
  }
  //////////PRODUCT SEARCH FUNCTIONALITY//////////

  //Update search state when user enters search term

  const handleSearchInput = (event) => {
    const input = event.target.value
    setProducts({ ...products, search: input })
    console.log(products.search)
  }

  function hanldeSearch(search) {
    const arr = [...products.results]
    const filteredArray = arr.filter((product) => {
      if (
        product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      ) {
        return product
      }
      return filteredArray
    })

    setProducts({ ...products, filterResults: filteredArray })
    console.log('Click')
  }
  //reset search
  function resetSearch() {
    setProducts({
      ...products,
      filterResults: products.results,
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
            onSubmit={hanldeSearch}
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
