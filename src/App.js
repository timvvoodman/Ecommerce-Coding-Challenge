import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import API from './utils/axios'

//Component Imports//
import Header from './components/Header/Header'
import Home from './components/Home/Home.js'
import { useStateValue } from './Context/AppState'
import Checkout from './components/Checkout/Checkout'

function App() {
  //Bring in Reducer from context
  const [{ products }, dispatch] = useStateValue()

  //on component mount call loadProduct Funtion
  useEffect(() => {
    const loadProducts = async () => {
      let response = await API.getAllProducts()
      dispatch({ type: 'FETCH_PRODUCTS', data: response.data })
    }

    loadProducts()
  }, [])

  //Get cart data from local storage and save to cart state

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path={process.env.PUBLIC_URL + '/'}>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
