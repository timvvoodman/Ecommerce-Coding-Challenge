import React, { useState, useEffect } from 'react'

//Style Imports//
import './Home.css'
import FilterList from '@material-ui/icons/FilterList'
import Search from '@material-ui/icons/Search'
import Sort from '@material-ui/icons/Sort'
import Product from '../Product/Product'
import API from '../../utils/axios'
import Filter from '../Filter/Filter'

function Home() {
  //////////STATE DEFINITIONS//////////
  //Product list state (retreived from fake store API)
  const [products, setProducts] = useState({
    results: [],
    filteredResults: [],
  })

  //Search Term
  const [search, setSearch] = useState('')

  //Price sort Toggle
  const [priceSort, setPriceSort] = useState({
    lowToHigh: false,
    highToLow: false,
  })

  //filter component and rule holders
  const [filterComponent, setFilterComponent] = useState(false)
  const [categoryRule, setCategoryRule] = useState('')
  const [priceRule, setPriceRule] = useState('')
  /////////END STATE DEFINITIONS////////

  /////COMPONENT LIFECYCLE METHODS//////
  //Calls product request to API on page load (componentDidMount)
  useEffect(() => {
    loadProducts()
  }, [])

  //API call to get product data
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

  //updates products list to display based on user search, sort, filter
  //Search
  useEffect(() => {
    setProducts({
      ...products,
      filteredResults: products.filteredResults.filter((product) => {
        return product.title.toLowerCase().includes(search)
      }),
    })
  }, [search])
  //Filter Category////////////////////
  useEffect(() => {
    console.log(categoryRule)
    setProducts({
      ...products,
      filteredResults: products.filteredResults.filter((product) => {
        return product.category === categoryRule
      }),
    })
  }, [categoryRule])
  //Filter Price///////////////////////
  useEffect(() => {
    const checkedValue = parseInt(priceRule)

    setProducts({
      ...products,
      filteredResults: products.filteredResults.filter((product) => {
        return product.price >= checkedValue
      }),
    })
  }, [priceRule])
  /////END COMPONENT LIFECYCLE METHODS////////////

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
    setCategoryRule({
      category: '',
      price: '',
    })
  }

  /////PRICE SORT/////
  function sortByPrice() {
    if (
      (priceSort.highToLow === false && priceSort.lowToHigh === false) ||
      priceSort.highToLow === true
    ) {
      setPriceSort({ lowToHigh: true, highToLow: false })
      setProducts({
        ...products,
        filteredResults: products.filteredResults.sort((a, b) => {
          return parseFloat(a.price) - parseFloat(b.price)
        }),
      })
    }
    if (priceSort.lowToHigh === true) {
      setPriceSort({
        lowToHigh: false,
        highToLow: true,
      })
      setProducts({
        ...products,
        filteredResults: products.filteredResults.sort((a, b) => {
          return parseFloat(b.price) - parseFloat(a.price)
        }),
      })
    }
  }
  /////END PRICE SORT/////

  ///PRODUCT FILTER FUNCTIONALITY///

  //get  and set as filter rules
  function getFilterRules(event, name) {
    if (name === 'category') {
      setCategoryRule(event.target.value)
    }
    if (name === 'price') {
      setPriceRule(event.target.value)
    }
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
          <div className=" filter__item filter" onClick={sortByPrice}>
            <p>Price</p>
            <FilterList
              className={`filter__icon ${priceSort.lowToHigh ? 'rotate' : ''}`}
            />
          </div>

          <div className=" filter__item sort">
            <p>Filter</p>
            <Sort onClick={() => setFilterComponent(!filterComponent)} />
          </div>
          <button onClick={resetSearch} className="filter__reset">
            Reset
          </button>
        </div>
      </form>

      {filterComponent ? <Filter onChange={getFilterRules} /> : null}

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
    </div>
  )
}

export default Home
