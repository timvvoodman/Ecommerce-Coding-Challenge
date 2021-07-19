import React, { useState } from 'react'
import { useStateValue } from '../../Context/AppState'
import './Home.css'
import FilterList from '@material-ui/icons/FilterList'
import Search from '@material-ui/icons/Search'
import Sort from '@material-ui/icons/Sort'
import Product from '../Product/Product'
import Filter from '../Filter/Filter'

function Home() {
  //Get reducer and Global State
  const [{ productsCopy, priceSortToggle }, dispatch] = useStateValue()

  //STATE: Search Term
  const [search, setSearch] = useState('')
  //STATE: filter component and rule holders
  const [filterComponent, setFilterComponent] = useState(false)

  //Update search state when user enters search term
  function handleSearchInput(event) {
    const input = event.target.value.toLowerCase()
    setSearch(input)
  }
  //Conditional render based on search term
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
          id={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          category={product.category}
          price={product.price.toFixed(2)}
        />
      ))
      // if there is a search state map only over the matched results
    } else {
      return filtered?.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.pricetoFixed(2)}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))
    }
  }

  //Toggle price sort
  function sortByPrice() {
    dispatch({ type: 'TOGGLE_PRICE_SORT' })
  }

  //reset search
  function resetSearch() {
    dispatch({ type: 'RESET_PRODUCTS' })
  }
  ////////////END SEARCH FUNCTIONALITY//////////

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
              className={`filter__icon ${priceSortToggle ? 'rotate' : ''}`}
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

      {filterComponent ? <Filter /> : null}

      <div className="product__container">{searchFilter()}</div>
    </div>
  )
}

export default Home
