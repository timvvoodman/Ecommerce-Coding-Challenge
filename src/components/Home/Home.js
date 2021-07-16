import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../Context/AppState'
import './Home.css'
import FilterList from '@material-ui/icons/FilterList'
import Search from '@material-ui/icons/Search'
import Sort from '@material-ui/icons/Sort'
import Product from '../Product/Product'
import Filter from '../Filter/Filter'

function Home() {
  //////////STATE DEFINITIONS//////////
  //Get reducer state
  const [{ productsCopy }] = useStateValue()

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

  //////COMPONENT LIFECYCLE METHODS////////
  //updates products list to display based on user search, sort, filter
  //Search
  // useEffect(() => {
  //   setProducts({
  //     ...products,
  //     filteredResults: products.filteredResults.filter((product) => {
  //       return product.title.toLowerCase().includes(search)
  //     }),
  //   })
  // }, [search])
  /////////////////Filter Category////////////////////
  // useEffect(() => {
  //   console.log(categoryRule)
  //   setProducts({
  //     ...products,
  //     filteredResults: products.filteredResults.filter((product) => {
  //       return product.category === categoryRule
  //     }),
  //   })
  // }, [categoryRule])
  //Filter Price///////////////////////
  // useEffect(() => {
  //   const checkedValue = parseInt(priceRule)

  //   setProducts({
  //     ...products,
  //     filteredResults: products.filteredResults.filter((product) => {
  //       return product.price >= checkedValue
  //     }),
  //   })
  // }, [priceRule])
  /////END COMPONENT LIFECYCLE METHODS////////////

  //////////PRODUCT SEARCH FUNCTIONALITY//////////
  //Update search state when user enters search term
  function handleSearchInput(event) {
    const input = event.target.value.toLowerCase()
    setSearch(input)
    console.log(search)
  }
  //conditional render based on search term
  function searchFilter() {
    //holds items in products state that incule matched search string
    const filtered = productsCopy.filter((product) => {
      return product.title.toLowerCase().includes(search)
    })
    //if search is empty map over all products and return component
    if (!search) {
      return productsCopy?.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))
      // if there is a search state map only over the matched results
    } else {
      return filtered?.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))
    }
  }

  ////reset search
  // function resetSearch() {
  //   setProducts({
  //     ...products,
  //     filteredResults: products.results,
  //     search: '',
  //   })
  //   setCategoryRule({
  //     category: '',
  //     price: '',
  //   })
  // }

  /////PRICE SORT/////
  // function sortByPrice() {
  //   if (
  //     (priceSort.highToLow === false && priceSort.lowToHigh === false) ||
  //     priceSort.highToLow === true
  //   ) {
  //     setPriceSort({ lowToHigh: true, highToLow: false })
  //     setProducts({
  //       ...products,
  //       filteredResults: products.filteredResults.sort((a, b) => {
  //         return parseFloat(a.price) - parseFloat(b.price)
  //       }),
  //     })
  //   }
  //   if (priceSort.lowToHigh === true) {
  //     setPriceSort({
  //       lowToHigh: false,
  //       highToLow: true,
  //     })
  //     setProducts({
  //       ...products,
  //       filteredResults: products.filteredResults.sort((a, b) => {
  //         return parseFloat(b.price) - parseFloat(a.price)
  //       }),
  //     })
  //   }
  // }
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
          <div className=" filter__item filter">
            <p>Price</p>
            <FilterList
              className={`filter__icon ${priceSort.lowToHigh ? 'rotate' : ''}`}
            />
          </div>

          <div className=" filter__item sort">
            <p>Filter</p>
            <Sort onClick={() => setFilterComponent(!filterComponent)} />
          </div>
          <button className="filter__reset">Reset</button>
        </div>
      </form>

      {filterComponent ? <Filter onChange={getFilterRules} /> : null}

      <div className="product__container">{searchFilter()}</div>
    </div>
  )
}

export default Home
